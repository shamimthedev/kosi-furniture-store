'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SunsetLamp from "@/public/images/hero-sunset-lamp.png"
import SofaCollection from "@/public/images/hero-sofa-collection.png"

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState({ sunset: false, sofa: false })

  const handleImageLoad = (imageType: 'sunset' | 'sofa') => {
    setImageLoaded(prev => ({ ...prev, [imageType]: true }))
  }

  return (
    <section className="py-8 md:py-16 lg:py-20 overflow-hidden relative">
      <div className="container relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="font-primary text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-6 leading-tight">
            Discover Your
            <span className="block text-secondary">Perfect Space</span>
          </h1>
          <p className="font-secondary text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform your home with our curated collection of premium furniture and unique lighting solutions
          </p>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
          
          {/* Sunset Lamp Card */}
          <div className="group relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            {/* Image Container with Loading State */}
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-gray-100">
              {!imageLoaded.sunset && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
              )}
              <Image
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imageLoaded.sunset ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                } group-hover:scale-110`}
                src={SunsetLamp}
                alt="Premium Sunset Lamp Collection - Modern Ambient Lighting"
                onLoad={() => handleImageLoad('sunset')}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                <span className="px-3 py-1 md:px-4 md:py-2 bg-white/90 backdrop-blur-sm text-primary font-semibold text-xs md:text-sm rounded-full shadow-lg">
                  Featured
                </span>
              </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 text-white">
              <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                <h2 className="font-primary text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                  Sunset Lamp
                </h2>
                <p className="font-secondary text-sm md:text-base text-white/90 mb-4 md:mb-6 max-w-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  Create the perfect ambiance with our premium sunset lamp collection
                </p>
                
                <Link
                  href="/shop/3"
                  className="inline-flex items-center gap-2 font-secondary font-semibold text-sm md:text-base border-b-2 border-white hover:border-secondary hover:text-secondary transition-all duration-300 group/link"
                >
                  Shop Collection
                  <ArrowRight className="text-lg transform transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Hover Effect Circle */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full transform transition-all duration-700 group-hover:scale-150 group-hover:bg-secondary/30"></div>
          </div>

          {/* Sofa Collection Card */}
          <div className="group relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            {/* Image Container with Loading State */}
            <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden bg-gray-100">
              {!imageLoaded.sofa && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"></div>
              )}
              <Image
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imageLoaded.sofa ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                } group-hover:scale-110`}
                src={SofaCollection}
                alt="Premium Sofa Collection - Modern Living Room Furniture"
                onLoad={() => handleImageLoad('sofa')}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6">
                <span className="px-3 py-1 md:px-4 md:py-2 bg-secondary/90 backdrop-blur-sm text-white font-semibold text-xs md:text-sm rounded-full shadow-lg">
                  Best Seller
                </span>
              </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 text-white">
              <div className="transform transition-all duration-500 group-hover:-translate-y-2">
                <h2 className="font-primary text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 md:mb-4 leading-tight">
                  Sofa Collection
                </h2>
                <p className="font-secondary text-sm md:text-base text-white/90 mb-4 md:mb-6 max-w-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  Comfort meets style in our handpicked sofa collection
                </p>
                
                <Link
                  href="/shop/1"
                  className="inline-flex items-center gap-2 font-secondary font-semibold text-sm md:text-base border-b-2 border-white hover:border-secondary hover:text-secondary transition-all duration-300 group/link"
                >
                  Explore Sofas
                  <ArrowRight className="text-lg transform transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Hover Effect Circle */}
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/20 rounded-full transform transition-all duration-700 group-hover:scale-150 group-hover:bg-primary/30"></div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link
              href="/shop"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View All Products
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none -translate-x-40 -translate-y-40"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none translate-x-40 translate-y-40"></div>
      </div>
    </section>
  )
}