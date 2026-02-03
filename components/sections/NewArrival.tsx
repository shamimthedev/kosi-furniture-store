'use client'

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Heart, ShoppingBag } from "lucide-react"
import { useCartStore } from "@/lib/store/cart-store"
import WoodenSnail from "@/public/images/wooden-snail-decor.png"

export default function NewArrival() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const addToCart = useCartStore((state) => state.addToCart)

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleAddToCart = () => {
    addToCart({
      id: 'wooden-snail-decor',
      title: 'Wooden Snail Decor',
      price: 75,
      oldPrice: 95,
      image: WoodenSnail.src,
      category: 'Home Decor',
      quantity: 1,
    })
  }

  const productDetails = {
    originalPrice: 95,
    salePrice: 75,
    rating: 4.9,
    reviews: 127,
    discount: 21,
    availability: "In Stock",
    features: ["Handcrafted Wood", "Natural Finish", "Eco-Friendly", "Unique Design"]
  }

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background with gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF4F1] via-[#F5EDE6] to-[#FAF4F1]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-700"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[600px]">
          
          {/* Product Image Section */}
          <div 
            className={`relative order-2 lg:order-1 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Image container with loading state */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group">
              {/* Loading skeleton */}
              {!imageLoaded && (
                <div className="aspect-square bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse"></div>
              )}
              
              {/* Main product image */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={WoodenSnail}
                  alt="Premium Wooden Snail Decor - Handcrafted Home Accent"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  } ${isHovering ? 'scale-110' : 'scale-100'}`}
                  onLoad={() => setImageLoaded(true)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
                
                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-black/0 transition-all duration-500 ${
                  isHovering ? 'bg-black/10' : ''
                }`}></div>
              </div>

              {/* Floating badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-3">
                <span className="px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full shadow-lg">
                  NEW ARRIVAL
                </span>
                <span className="px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-full shadow-lg">
                  -{productDetails.discount}% OFF
                </span>
              </div>

              {/* Quick actions */}
              <div className={`absolute top-6 right-6 flex flex-col gap-3 transition-all duration-300 ${
                isHovering ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
              }`}>
                <button className="p-3 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-3 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                  <Star className="w-5 h-5" />
                </button>
              </div>

              {/* Product info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
                <div className={`transition-all duration-500 transform ${
                  isHovering ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm">{productDetails.rating} ({productDetails.reviews} reviews)</span>
                  </div>
                  <p className="text-sm opacity-90">Premium handcrafted wooden decor piece</p>
                </div>
              </div>
            </div>

            {/* Floating price tag */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 border-4 border-secondary/20">
              <div className="text-center">
                <p className="text-gray-500 text-sm line-through">${productDetails.originalPrice}</p>
                <p className="text-2xl font-bold text-productPrice">${productDetails.salePrice}</p>
                <p className="text-xs text-green-600 font-semibold">Save ${productDetails.originalPrice - productDetails.salePrice}</p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div 
            className={`order-1 lg:order-2 space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold uppercase tracking-wide">
                  New Arrivals
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                  {productDetails.availability}
                </span>
              </div>
              
              <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold text-productTitle mb-6 leading-tight">
                Wooden Snail
                <span className="block text-secondary">Decor</span>
              </h2>
            </div>

            {/* Product features */}
            <div className="grid grid-cols-2 gap-4">
              {productDetails.features.map((feature, index) => (
                <div 
                  key={feature}
                  className={`flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 transition-all duration-500 hover:shadow-lg hover:border-secondary/30 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="font-medium text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Rating and reviews */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-gray-800">{productDetails.rating}</span>
              </div>
              <div className="text-gray-600">
                <span className="font-medium">{productDetails.reviews}</span> customer reviews
              </div>
            </div>

            {/* Price display */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-productPrice">
                ${productDetails.salePrice}
              </span>
              <div className="text-gray-500">
                <span className="text-xl line-through">${productDetails.originalPrice}</span>
                <span className="ml-2 bg-red-100 text-red-700 px-2 py-1 rounded-lg text-sm font-semibold">
                  Save {productDetails.discount}%
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="group flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3"
              >
                <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110" />
                Add to Cart
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <Link
                href="/shop/2"
                className="group flex-1 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                View Details
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                </div>
                <p className="text-sm font-medium text-gray-700">Free Shipping</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold text-xl">↻</span>
                </div>
                <p className="text-sm font-medium text-gray-700">Easy Returns</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600 font-bold text-xl">★</span>
                </div>
                <p className="text-sm font-medium text-gray-700">Quality Guaranteed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional product showcase */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="font-primary text-2xl md:text-3xl font-bold text-primary mb-4">
              Why Choose Our New Arrivals?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each piece in our new collection is carefully curated and crafted to bring unique character to your space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="font-bold text-lg text-primary mb-2">Unique Design</h4>
              <p className="text-gray-600 text-sm">Handpicked designs that stand out and make a statement in your home.</p>
            </div>
            
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="font-bold text-lg text-primary mb-2">Eco-Friendly</h4>
              <p className="text-gray-600 text-sm">Sustainably sourced materials that care for both your home and the planet.</p>
            </div>
            
            <div className="text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="font-bold text-lg text-primary mb-2">Premium Quality</h4>
              <p className="text-gray-600 text-sm">Superior craftsmanship and materials ensure lasting beauty and durability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}