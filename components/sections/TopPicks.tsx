'use client'

import Link from "next/link"
import ProductCard from "@/components/ui/ProductCard"
import { mockProducts } from "@/lib/mock-data"

export default function TopPicks() {
  const featuredProducts = mockProducts
    .filter(p => p.isBestSeller || p.isNew)
    .sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0))
    .slice(0, 8)

  return (
    <section id="shop" className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-x-48 translate-y-48"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
              CURATED SELECTION
            </span>
          </div>
          
          <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            <span className="hidden md:inline">Top Picks For You</span>
            <span className="md:hidden">Top Picks</span>
          </h2>
          
          <p className="max-w-2xl mx-auto font-secondary text-lg md:text-xl text-gray-600 leading-relaxed">
            <span className="hidden md:inline">
              Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
            </span>
            <span className="md:hidden">
              Find your perfect style with our curated collection.
            </span>
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            View All Products
          </Link>
        </div>

        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">500+</h4>
              <p className="text-gray-600">Premium Products</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">10K+</h4>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">4.8★</h4>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">24/7</h4>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
