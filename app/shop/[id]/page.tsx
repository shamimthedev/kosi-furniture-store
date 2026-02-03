'use client'

import { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RefreshCw, Minus, Plus, Check } from 'lucide-react'
import { mockProducts } from '@/lib/mock-data'
import { useCartStore } from '@/lib/store/cart-store'

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap the params Promise using React.use()
  const { id } = use(params)
  const productId = parseInt(id)
  const product = mockProducts.find(p => p.id === productId) || mockProducts[0]
  
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState<'description' | 'specs' | 'reviews'>('description')
  
  const addToCart = useCartStore(state => state.addToCart)

  // Mock additional images
  const images = [product.image, product.image, product.image, product.image]

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
  }

  const relatedProducts = mockProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-primary">Shop</Link>
            <span>/</span>
            <span className="text-primary">{product.title}</span>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div>
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden mb-4">
              <Image
                src={images[selectedImage]}
                alt={product.title}
                fill
                className="object-cover"
              />
              {product.badgeText && (
                <span className={`absolute top-4 right-4 px-4 py-2 rounded-full text-sm font-bold ${product.className}`}>
                  {product.badgeText}
                </span>
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <Image src={img} alt={`View ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              {product.isNew && (
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  New Arrival
                </span>
              )}
              {product.isBestSeller && (
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Best Seller
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold text-primary mb-3">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.category}</p>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating!)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="text-5xl font-bold text-productPrice">${product.price}</span>
              {product.oldPrice && (
                <>
                  <span className="text-2xl text-gray-400 line-through">${product.oldPrice}</span>
                  <span className="text-lg text-green-600 font-semibold">
                    Save ${product.oldPrice - product.price}
                  </span>
                </>
              )}
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block font-semibold mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="px-6 py-3 font-bold text-lg min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <span className="text-sm text-gray-600">
                  {product.reviews! > 50 ? 'In Stock' : 'Limited Stock'}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-primary hover:bg-primary/90 text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
                Add to Cart
              </button>
              <button className="p-4 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors">
                <Heart className="w-6 h-6" />
              </button>
              <button className="p-4 border-2 border-gray-300 rounded-lg hover:border-primary hover:text-primary transition-colors">
                <Share2 className="w-6 h-6" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gray-100 rounded-xl">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-semibold">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-semibold">1 Year Warranty</p>
              </div>
              <div className="text-center">
                <RefreshCw className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-sm font-semibold">30-Day Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl p-8 mb-16">
          <div className="flex gap-6 mb-8 border-b">
            {(['description', 'specs', 'reviews'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 font-semibold capitalize transition-colors relative ${
                  activeTab === tab
                    ? 'text-primary'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>

          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                Elevate your lifestyle with our premium {product.title}. Crafted with attention to detail
                and designed for both style and functionality, this piece represents the perfect blend
                of modern aesthetics and practical design.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you're looking to upgrade your daily essentials or searching for the perfect
                gift, this product delivers exceptional quality and lasting value.
              </p>
              <h3 className="text-xl font-bold text-primary mb-3">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Premium quality materials and construction</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Modern design that complements any style</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Durable and built to last</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Easy to maintain and care for</span>
                </li>
              </ul>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-4">Product Details</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <dt className="text-gray-600">Category</dt>
                    <dd className="font-semibold">{product.category}</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <dt className="text-gray-600">SKU</dt>
                    <dd className="font-semibold">KOS-{product.id.toString().padStart(5, '0')}</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <dt className="text-gray-600">Availability</dt>
                    <dd className="font-semibold text-green-600">In Stock</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <dt className="text-gray-600">Warranty</dt>
                    <dd className="font-semibold">1 Year</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Shipping Info</h3>
                <dl className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <dt className="text-gray-600">Weight</dt>
                    <dd className="font-semibold">2.5 lbs</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <dt className="text-gray-600">Dimensions</dt>
                    <dd className="font-semibold">12 x 8 x 4 in</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <dt className="text-gray-600">Shipping</dt>
                    <dd className="font-semibold">Free</dd>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <dt className="text-gray-600">Delivery</dt>
                    <dd className="font-semibold">5-7 days</dd>
                  </div>
                </dl>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center gap-8 mb-8 pb-8 border-b">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">{product.rating}</div>
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating!)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">{product.reviews} reviews</p>
                </div>
                <div className="flex-1">
                  {[5, 4, 3, 2, 1].map(star => (
                    <div key={star} className="flex items-center gap-3 mb-2">
                      <span className="text-sm w-8">{star}★</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400"
                          style={{ width: `${star === 5 ? 70 : star === 4 ? 20 : 10}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600 w-12">
                        {star === 5 ? '70%' : star === 4 ? '20%' : '10%'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Reviews */}
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="pb-6 border-b last:border-0">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full" />
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-bold">Customer {i}</h4>
                          <div className="flex">
                            {[...Array(5)].map((_, idx) => (
                              <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500">Verified Purchase • 2 weeks ago</p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      Excellent product! Exactly as described and delivered quickly. Very satisfied
                      with my purchase and would definitely recommend to others.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(item => (
                <Link
                  key={item.id}
                  href={`/shop/${item.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div className="relative aspect-square">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-1">{item.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-productPrice">${item.price}</span>
                      {item.oldPrice && (
                        <span className="text-sm text-gray-400 line-through">${item.oldPrice}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}