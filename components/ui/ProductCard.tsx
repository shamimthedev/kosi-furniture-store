'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { 
  ShoppingBag, 
  Heart, 
  Eye, 
  CheckCircle2 
} from "lucide-react"
import { Star, StarHalf } from "lucide-react"
import Badge from "./Badge"
import { useCartStore } from "@/lib/store/cart-store"
import { Product as ProductType } from "@/types"

interface ProductCardProps extends ProductType {
  className?: string
}

export default function ProductCard({ 
  id, 
  category, 
  badgeText, 
  title, 
  price, 
  oldPrice, 
  image, 
  className,
  rating = 4.5,
  reviews = 24,
  isNew = false,
  isBestSeller = false
}: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart)
  const [isLoading, setIsLoading] = useState(false)
  const [isAdded, setIsAdded] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = async () => {
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 600))
    
    addToCart({
      id,
      title,
      price,
      oldPrice,
      image,
      category,
      quantity: 1,
    })

    setIsAdded(true)
    setIsLoading(false)

    // Reset the "added" state after 2 seconds
    setTimeout(() => setIsAdded(false), 2000)
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 text-yellow-400 fill-current" />)
    }
    
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-200" />)
    }
    
    return stars
  }

  const discountPercentage = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0

  return (
    <div className="group relative bg-white rounded-xl border border-productBorder hover:border-secondary/30 hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 rounded-t-xl">
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse"></div>
        )}
        
        {/* Product Image */}
        <Image 
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          src={image} 
          alt={title}
          onLoad={() => setImageLoaded(true)}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
              NEW
            </span>
          )}
          {isBestSeller && (
            <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
              BESTSELLER
            </span>
          )}
        </div>

        {/* Discount Badge */}
        {badgeText && (
          <Badge 
            badgeText={badgeText} 
            className={`${className} absolute top-3 right-3 shadow-lg`} 
          />
        )}

        {/* Quick Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <button
            onClick={handleWishlist}
            className={`p-2 rounded-full backdrop-blur-sm border transition-all duration-200 hover:scale-110 ${
              isWishlisted 
                ? 'bg-red-500 text-white border-red-500' 
                : 'bg-white/90 hover:bg-white text-gray-700 border-white/20'
            }`}
            title="Add to Wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
          
          <button
            className="p-2 bg-white/90 hover:bg-white text-gray-700 rounded-full backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-110"
            title="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Add to Cart Button */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <button
            onClick={handleAddToCart}
            disabled={isLoading || isAdded}
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 ${
              isAdded
                ? 'bg-green-500 text-white'
                : isLoading
                ? 'bg-gray-400 text-white cursor-not-allowed'
                : 'bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl'
            }`}
          >
            {isAdded ? (
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Added!
              </span>
            ) : isLoading ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Adding...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" />
                Quick Add
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6">
        {/* Category */}
        <p className="text-gray-500 text-sm font-medium mb-2 uppercase tracking-wide">
          {category}
        </p>

        {/* Title */}
        <Link href={`/shop/${id}`}>
          <h3 className="font-bold text-lg text-productTitle mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200 cursor-pointer">
            {title}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {renderStars()}
          </div>
          <span className="text-sm text-gray-500">
            {rating} ({reviews} reviews)
          </span>
        </div>

        {/* Price and Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-productPrice font-bold text-xl">
              ${price}
            </span>
            {oldPrice && (
              <div className="flex flex-col">
                <span className="text-gray-400 font-medium line-through text-sm">
                  ${oldPrice}
                </span>
                {discountPercentage > 0 && (
                  <span className="text-green-600 font-bold text-xs">
                    Save {discountPercentage}%
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Desktop Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={isLoading || isAdded}
            className={`hidden md:flex items-center justify-center h-12 w-12 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
              isAdded
                ? 'bg-green-50 border-green-500 text-green-600'
                : isLoading
                ? 'bg-gray-50 border-gray-300 text-gray-400 cursor-not-allowed'
                : 'border-primary text-primary hover:bg-primary hover:text-white hover:shadow-lg'
            }`}
            title="Add to Cart"
          >
            {isAdded ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : isLoading ? (
              <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <ShoppingBag className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={isLoading || isAdded}
          className={`md:hidden w-full mt-4 py-3 rounded-lg font-medium transition-all duration-200 ${
            isAdded
              ? 'bg-green-500 text-white'
              : isLoading
              ? 'bg-gray-400 text-white cursor-not-allowed'
              : 'bg-primary hover:bg-primary/90 text-white hover:shadow-lg'
          }`}
        >
          {isAdded ? (
            <span className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Added to Cart!
            </span>
          ) : isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Adding to Cart...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </span>
          )}
        </button>
      </div>
    </div>
  )
}