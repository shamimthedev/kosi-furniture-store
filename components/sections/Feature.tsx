'use client'

import { useState, useEffect, useRef } from "react"
import { 
  ArrowLeftRight, 
  Rocket, 
  ShieldCheck, 
  CheckCircle2,
  MapPin,
  Phone,
  Clock,
  CreditCard
} from "lucide-react"

const features = [
  {
    id: 1,
    icon: ArrowLeftRight,
    title: "90 Days Return",
    description: "Easy returns within 90 days of purchase. No questions asked, full refund guaranteed.",
    details: "Hassle-free return policy",
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  {
    id: 2,
    icon: Rocket,
    title: "Free Delivery",
    description: "Complimentary shipping on all orders above $50. Fast and secure delivery worldwide.",
    details: "Free shipping over $50",
    color: "bg-green-500",
    lightColor: "bg-green-50",
    borderColor: "border-green-200"
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "256-bit SSL encryption ensures your payment information is completely secure and protected.",
    details: "Bank-level security",
    color: "bg-purple-500",
    lightColor: "bg-purple-50",
    borderColor: "border-purple-200"
  },
  {
    id: 4,
    icon: CheckCircle2,
    title: "100% Warranty",
    description: "Comprehensive warranty coverage on all products. Quality assurance you can trust.",
    details: "Lifetime quality guarantee",
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    borderColor: "border-orange-200"
  }
]

export default function Feature() {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate features one by one
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleFeatures(prev => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
            Why Choose Kosi
          </span>
          <h2 className="font-primary text-4xl md:text-5xl font-bold text-primary mb-6">
            Premium Service Promise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience excellence with our comprehensive service offerings designed to exceed your expectations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            const isVisible = visibleFeatures.includes(index)
            const isHovered = hoveredFeature === index
            
            return (
              <div
                key={feature.id}
                className={`relative group transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Feature Card */}
                <div className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
                  isHovered 
                    ? `${feature.borderColor} shadow-xl` 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 ${feature.lightColor} rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isHovered ? 'scale-110 rotate-6' : ''
                    }`}>
                      <IconComponent className={`w-8 h-8 ${feature.color.replace('bg-', 'text-')} transition-all duration-500 ${
                        isHovered ? 'scale-125' : ''
                      }`} />
                    </div>
                    
                    {/* Floating badge */}
                    <div className={`absolute -top-2 -right-2 w-6 h-6 ${feature.color} rounded-full flex items-center justify-center transform transition-all duration-500 ${
                      isHovered ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`}>
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-primary text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                    {feature.description}
                  </p>
                  
                  {/* Feature highlight */}
                  <div className={`inline-flex items-center gap-2 px-3 py-2 ${feature.lightColor} rounded-full transition-all duration-300 ${
                    isHovered ? 'opacity-100 translate-x-0' : 'opacity-70'
                  }`}>
                    <div className={`w-2 h-2 ${feature.color} rounded-full animate-pulse`}></div>
                    <span className="text-xs font-medium text-gray-700">{feature.details}</span>
                  </div>

                  {/* Hover gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                </div>

                {/* Connecting line for desktop */}
                {index < features.length - 1 && (
                  <div className="hidden xl:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2 z-10">
                    <div className={`h-full bg-gradient-to-r ${feature.color} transform origin-left transition-transform duration-700 ${
                      isVisible ? 'scale-x-100' : 'scale-x-0'
                    }`}></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-2xl text-primary mb-1">50+</h4>
              <p className="text-gray-600 text-sm">Global Locations</p>
            </div>
            
            <div className="group">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition-colors duration-300">
                <Phone className="w-6 h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-2xl text-primary mb-1">24/7</h4>
              <p className="text-gray-600 text-sm">Customer Support</p>
            </div>
            
            <div className="group">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500 transition-colors duration-300">
                <Clock className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-2xl text-primary mb-1">2-5</h4>
              <p className="text-gray-600 text-sm">Days Delivery</p>
            </div>
            
            <div className="group">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                <CreditCard className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="font-bold text-2xl text-primary mb-1">100%</h4>
              <p className="text-gray-600 text-sm">Secure Payment</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Experience Our Service
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}