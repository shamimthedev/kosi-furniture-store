'use client'

import { useState, useEffect, useRef } from "react"
import Image, { StaticImageData } from "next/image"
import { Heart, Eye, Share2, X } from "lucide-react"
import FooterItem1 from "@/public/images/footerItem1.png"
import FooterItem2 from "@/public/images/footerItem2.png"
import FooterItem3 from "@/public/images/footerItem3.png"
import FooterItem4 from "@/public/images/footerItem4.png"
import FooterItem5 from "@/public/images/footerItem5.png"
import FooterItem6 from "@/public/images/footerItem6.png"

interface GalleryItem {
  id: number
  src: StaticImageData
  title: string
  category: string
  description: string
  tags: string[]
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: FooterItem1,
    title: "Modern Living Space",
    category: "Living Room",
    description: "Elegant furniture arrangement showcasing our premium collection in a contemporary setting.",
    tags: ["Modern", "Minimalist", "Luxury"]
  },
  {
    id: 2,
    src: FooterItem2,
    title: "Cozy Bedroom Setup",
    category: "Bedroom",
    description: "Comfortable and stylish bedroom design featuring our signature furniture pieces.",
    tags: ["Comfort", "Style", "Relaxation"]
  },
  {
    id: 3,
    src: FooterItem3,
    title: "Dining Experience",
    category: "Dining Room",
    description: "Perfect dining room setup that brings families together with style and functionality.",
    tags: ["Family", "Dining", "Elegant"]
  },
  {
    id: 4,
    src: FooterItem4,
    title: "Office Workspace",
    category: "Office",
    description: "Professional and organized workspace design for maximum productivity and comfort.",
    tags: ["Professional", "Productivity", "Clean"]
  },
  {
    id: 5,
    src: FooterItem5,
    title: "Kitchen Design",
    category: "Kitchen",
    description: "Modern kitchen layout featuring our premium storage and dining solutions.",
    tags: ["Modern", "Functional", "Storage"]
  },
  {
    id: 6,
    src: FooterItem6,
    title: "Outdoor Living",
    category: "Outdoor",
    description: "Beautiful outdoor furniture arrangement perfect for entertaining and relaxation.",
    tags: ["Outdoor", "Entertainment", "Relaxation"]
  }
]

const categories = ["All", "Living Room", "Bedroom", "Dining Room", "Office", "Kitchen", "Outdoor"]

export default function ImageGallery() {
  const [filteredItems, setFilteredItems] = useState(galleryItems)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({})
  const sectionRef = useRef<HTMLElement>(null)

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate items one by one
            filteredItems.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => [...prev, index])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [filteredItems])

  // Filter items by category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(galleryItems)
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === selectedCategory))
    }
    setVisibleItems([])
  }, [selectedCategory])

  const handleImageLoad = (itemId: number) => {
    setImagesLoaded(prev => ({ ...prev, [itemId]: true }))
  }

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-3 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
            Our Showcase
          </span>
          <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">
            Inspiration Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore how our furniture transforms spaces into beautiful, functional environments
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-primary border border-gray-200 hover:border-primary/30 hover:shadow-md'
              }`}
            >
              {category}
              {category !== "All" && (
                <span className="ml-2 text-xs opacity-70">
                  ({galleryItems.filter(item => item.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const isVisible = visibleItems.includes(index)
            const isHovered = hoveredItem === index
            const imageLoaded = imagesLoaded[item.id]
            
            return (
              <div
                key={item.id}
                className={`group relative transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Image Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  
                  {/* Loading Skeleton */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 animate-pulse"></div>
                  )}
                  
                  {/* Main Image */}
                  <Image
                    src={item.src}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    } group-hover:scale-110`}
                    onLoad={() => handleImageLoad(item.id)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold rounded-full shadow-lg">
                      {item.category}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
                    isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                  }`}>
                    <button className="p-2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-700 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Content Overlay */}
                  <div className={`absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 ${
                    isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-white/90 mb-4 line-clamp-2">{item.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Button */}
                    <button
                      onClick={() => openLightbox(item)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Gallery Stats */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">500+</h4>
              <p className="text-gray-600">Design Inspirations</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">50+</h4>
              <p className="text-gray-600">Room Categories</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">1K+</h4>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-primary mb-2">24/7</h4>
              <p className="text-gray-600">Design Support</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Get Design Consultation
            </button>
            <button className="px-8 py-4 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              View Full Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-all duration-200 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-square lg:aspect-auto">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                    {selectedImage.category}
                  </span>
                </div>
                
                <h3 className="font-primary text-3xl font-bold text-primary mb-4">
                  {selectedImage.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedImage.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedImage.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <button className="flex-1 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors duration-200">
                    Shop Similar Items
                  </button>
                  <button className="px-6 py-3 border border-gray-300 hover:border-primary text-gray-700 hover:text-primary rounded-lg font-medium transition-colors duration-200">
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}