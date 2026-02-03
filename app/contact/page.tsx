'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container py-12">
          <h1 className="text-4xl font-bold text-primary mb-3">Contact Us</h1>
          <p className="text-xl text-gray-600">
            We&apos;d love to hear from you. Get in touch with our team.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Furniture Street<br />
                    Design District<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">Call Us</h3>
                  <p className="text-gray-600">
                    <a href="tel:+1234567890" className="hover:text-primary">
                      +1 (234) 567-890
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+1234567891" className="hover:text-primary">
                      +1 (234) 567-891
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">Email Us</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@kosi.com" className="hover:text-primary">
                      info@kosi.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:support@kosi.com" className="hover:text-primary">
                      support@kosi.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-primary mb-2">Business Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 9am - 6pm</p>
                    <p>Saturday: 10am - 4pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Status</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-xl overflow-hidden shadow-sm">
          <div className="aspect-video bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">Map integration would go here</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg text-primary mb-2">
                What are your shipping times?
              </h3>
              <p className="text-gray-600">
                Standard shipping takes 5-7 business days. Express shipping is available for 2-3 day delivery.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary mb-2">
                Do you offer assembly services?
              </h3>
              <p className="text-gray-600">
                Yes, we offer professional assembly services for an additional fee. You can select this option at checkout.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg text-primary mb-2">
                What is your return policy?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day return policy for most items. Items must be in original condition with all packaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
