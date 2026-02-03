import Image from 'next/image'
import { Award, Users, Heart, TrendingUp, CheckCircle2, Target } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { label: 'Happy Customers', value: '10,000+', icon: Users },
  { label: 'Years in Business', value: '15+', icon: Award },
  { label: 'Products Sold', value: '50,000+', icon: TrendingUp },
  { label: 'Team Members', value: '100+', icon: Heart }
]

const values = [
  {
    icon: CheckCircle2,
    title: 'Quality First',
    description: 'We never compromise on the quality of our products. Every piece is carefully selected and inspected.'
  },
  {
    icon: Heart,
    title: 'Customer Focused',
    description: 'Your satisfaction is our priority. We go above and beyond to ensure you love your purchase.'
  },
  {
    icon: Target,
    title: 'Sustainable Practices',
    description: 'We are committed to eco-friendly sourcing and sustainable manufacturing processes.'
  }
]

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: '/images/product-3.png',
    bio: 'With 20 years in interior design, Sarah founded Kosi to make premium furniture accessible to everyone.'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Design',
    image: '/images/product-4.png',
    bio: 'Michael leads our design team, bringing innovative and timeless pieces to our collection.'
  },
  {
    name: 'Emma Davis',
    role: 'Sustainability Director',
    image: '/images/product-6.png',
    bio: 'Emma ensures all our practices align with our commitment to environmental responsibility.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-primary mb-6">
              About Kosi
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe everyone deserves a beautiful home. Since 2009, we&apos;ve been crafting 
              premium furniture that combines timeless design with modern comfort.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-y bg-white">
        <div className="container py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2009 by interior designer Sarah Johnson, Kosi began as a small 
                boutique furniture store with a simple mission: to make high-quality, 
                beautifully designed furniture accessible to everyone.
              </p>
              <p>
                What started in a modest showroom has grown into a beloved brand trusted 
                by thousands of customers nationwide. We&apos;ve stayed true to our founding 
                principles while expanding our collection to include everything from 
                classic pieces to cutting-edge contemporary designs.
              </p>
              <p>
                Today, we&apos;re proud to work with talented artisans and sustainable 
                manufacturers from around the world, bringing you furniture that&apos;s not 
                just beautiful, but built to last for generations.
              </p>
            </div>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/product-3.png"
              alt="Our Story"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gray-50 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">
            The passionate people behind Kosi
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative h-80 rounded-xl overflow-hidden mb-6 shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
              <p className="text-secondary font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary text-white py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 opacity-90">
            Explore our collection and discover the perfect pieces for your home
          </p>
          <Link
            href="/shop"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}
