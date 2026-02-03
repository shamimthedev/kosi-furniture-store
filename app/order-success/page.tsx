'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { CheckCircle, Truck, Package, Home, ShoppingBag, Mail, Phone } from "lucide-react"
import { useCartStore } from "@/lib/store/cart-store"
import { CartItem, ShippingAddress, PaymentMethod } from "@/types/index"

interface OrderData {
  orderNumber: string
  items: CartItem[]
  shippingAddress: ShippingAddress
  paymentMethod: PaymentMethod
  total: number
  estimatedDelivery: Date
}

export default function OrderSuccessPage() {
  const { clearCart } = useCartStore()
  const [orderDetails, setOrderDetails] = useState<OrderData | null>(null)

  useEffect(() => {
    // Clear the cart when success page loads
    clearCart()
    
    // Get order data from sessionStorage
    const storedOrder = sessionStorage.getItem('lastOrder')
    if (storedOrder) {
      const orderData: OrderData = JSON.parse(storedOrder)
      setOrderDetails(orderData)
      
      // Clean up sessionStorage
      sessionStorage.removeItem('lastOrder')
    } else {
      // Fallback for direct access to success page
      const orderNumber = `KOSI-${Math.floor(100000 + Math.random() * 900000)}`
      const deliveryDate = new Date()
      deliveryDate.setDate(deliveryDate.getDate() + 3)
      
      setOrderDetails({
        orderNumber,
        items: [],
        shippingAddress: {
          firstName: 'Customer',
          lastName: '',
          email: 'customer@example.com',
          phone: '+8801XXXXXXXXX',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          country: 'Bangladesh'
        },
        paymentMethod: { type: 'cod' },
        total: 0,
        estimatedDelivery: deliveryDate
      })
    }
  }, [clearCart])

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-20">
        <div className="container py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="font-primary text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loading Order Details...
            </h1>
          </div>
        </div>
      </div>
    )
  }

  const formattedDeliveryDate = orderDetails.estimatedDelivery.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-20">
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="font-primary text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Order Confirmed!
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Thank you for your purchase
            </p>
            <p className="text-gray-500">
              Your order has been successfully placed and is being processed.
            </p>
          </div>

          {/* Order Details Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-green-200 overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Order #{orderDetails.orderNumber}</h2>
                  <p className="text-green-100">
                    We&apos;ve sent a confirmation email with all the details.
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                    <Truck className="w-5 h-5" />
                    <span className="font-semibold">Processing</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Delivery Information */}
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <Package className="w-5 h-5 text-green-600" />
                    Delivery Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Delivery</span>
                      <span className="font-semibold text-gray-900">{formattedDeliveryDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping Method</span>
                      <span className="font-semibold text-gray-900">Standard Delivery</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping Cost</span>
                      <span className="font-semibold text-green-600">FREE</span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-green-600" />
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email</span>
                      <span className="font-semibold text-gray-900">{orderDetails.shippingAddress.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone</span>
                      <span className="font-semibold text-gray-900">{orderDetails.shippingAddress.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Customer Support</span>
                      <span className="font-semibold text-green-600">24/7 Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Check Your Email</h3>
              <p className="text-sm text-gray-600">
                We&apos;ve sent order confirmation and tracking details to your email address.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Track Your Order</h3>
              <p className="text-sm text-gray-600">
                Use your order number to track delivery status in real-time.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600">
                Our customer support team is available 24/7 to assist you.
              </p>
            </div>
          </div>

          {/* Support Information */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
              We&apos;re Here to Help
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Customer Support</h3>
                <p className="text-gray-600 mb-2">+880 1XXX-XXXXXX</p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Email Support</h3>
                <p className="text-gray-600 mb-2">support@kosi-furniture.com</p>
                <p className="text-sm text-gray-500">Typically replies within 1 hour</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <Home className="w-5 h-5" />
                Continue Shopping
              </Link>
              <Link
                href="/track-order"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Truck className="w-5 h-5" />
                Track Your Order
              </Link>
            </div>
            
            {/* Quick Links */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/products" className="text-gray-600 hover:text-primary transition-colors duration-200">
                Browse Products
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary transition-colors duration-200">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors duration-200">
                Contact Support
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-primary transition-colors duration-200">
                FAQ
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Quality Guaranteed</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Free Shipping</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Easy Returns</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}