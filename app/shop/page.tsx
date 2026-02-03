'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, SlidersHorizontal, Grid3x3, List } from 'lucide-react'
import { mockProducts } from '@/lib/mock-data'
import { useCartStore } from '@/lib/store/cart-store'
import Link from 'next/link'

const categories = ['All', 'Sportswear', 'Accessories', 'Wearable Tech']
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Newest', 'Best Rating']

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('Featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [priceRange, setPriceRange] = useState([0, 300])
  
  const addToCart = useCartStore(state => state.addToCart)

  const filteredProducts = mockProducts
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .filter(product => product.price >= priceRange[0] && product.price <= priceRange[1])
    .sort((a, b) => {
      switch(sortBy) {
        case 'Price: Low to High': return a.price - b.price
        case 'Price: High to Low': return b.price - a.price
        case 'Best Rating': return (b.rating || 0) - (a.rating || 0)
        case 'Newest': return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
        default: return 0
      }
    })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container py-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Shop</h1>
          <p className="text-gray-600">Discover our premium collection</p>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-primary" />
                <h2 className="font-bold text-lg">Filters</h2>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-primary">Categories</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat 
                          ? 'bg-primary text-white' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold mb-3 text-primary">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="300"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <p className="text-sm text-gray-600">
                    ${priceRange[0]} - ${priceRange[1]}
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-lg p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-gray-600">
                Showing {filteredProducts.length} products
              </p>
              
              <div className="flex items-center gap-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {sortOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>

                {/* View Mode */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-100'}`}
                  >
                    <Grid3x3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'
              : 'space-y-4'
            }>
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow ${
                    viewMode === 'list' ? 'flex gap-6' : ''
                  }`}
                >
                  <Link 
                    href={`/shop/${product.id}`}
                    className={viewMode === 'list' ? 'w-48 h-48 flex-shrink-0 relative' : 'relative aspect-square block'}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes={viewMode === 'list' ? '192px' : '(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw'}
                    />
                    {product.badgeText && (
                      <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm font-semibold ${product.className}`}>
                        {product.badgeText}
                      </span>
                    )}
                  </Link>

                  <div className="p-4 flex-1">
                    <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                    <Link href={`/shop/${product.id}`}>
                      <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">{product.title}</h3>
                    </Link>
                    
                    {product.rating && (
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating!)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">({product.reviews})</span>
                      </div>
                    )}

                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-productPrice">${product.price}</span>
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through">${product.oldPrice}</span>
                      )}
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
