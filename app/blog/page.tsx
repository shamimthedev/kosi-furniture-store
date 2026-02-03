import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: '10 Tips for Creating a Minimalist Living Space',
    excerpt: 'Discover how to transform your home into a serene, clutter-free sanctuary with our expert minimalist design tips.',
    image: '/images/product-3.png',
    author: 'Sarah Johnson',
    date: '2024-02-01',
    category: 'Interior Design',
    readTime: '5 min read'
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Choosing the Perfect Sofa',
    excerpt: 'Everything you need to know about selecting a sofa that combines comfort, style, and durability for your home.',
    image: '/images/product-4.png',
    author: 'Michael Chen',
    date: '2024-01-28',
    category: 'Buying Guide',
    readTime: '7 min read'
  },
  {
    id: 3,
    title: 'Sustainable Furniture: Why It Matters',
    excerpt: 'Learn about eco-friendly furniture options and how choosing sustainable pieces can make a difference.',
    image: '/images/product-6.png',
    author: 'Emma Davis',
    date: '2024-01-25',
    category: 'Sustainability',
    readTime: '6 min read'
  },
  {
    id: 4,
    title: 'Small Space Solutions: Maximize Your Studio Apartment',
    excerpt: 'Smart furniture choices and design tricks to make the most of limited square footage without sacrificing style.',
    image: '/images/product-3.png',
    author: 'Alex Rivera',
    date: '2024-01-20',
    category: 'Space Planning',
    readTime: '8 min read'
  },
  {
    id: 5,
    title: 'Color Psychology in Home Design',
    excerpt: 'How different colors affect mood and atmosphere in your living spaces, and how to use them effectively.',
    image: '/images/product-4.png',
    author: 'Lisa Thompson',
    date: '2024-01-15',
    category: 'Design Tips',
    readTime: '5 min read'
  },
  {
    id: 6,
    title: 'Mixing Modern and Vintage Furniture',
    excerpt: 'Create a unique, personalized space by successfully blending contemporary and classic furniture pieces.',
    image: '/images/product-6.png',
    author: 'James Wilson',
    date: '2024-01-10',
    category: 'Styling',
    readTime: '6 min read'
  }
]

const categories = ['All', 'Interior Design', 'Buying Guide', 'Sustainability', 'Space Planning', 'Design Tips', 'Styling']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container py-12">
          <h1 className="text-4xl font-bold text-primary mb-3">Blog</h1>
          <p className="text-xl text-gray-600">
            Inspiration, tips, and guides for your perfect home
          </p>
        </div>
      </div>

      <div className="container py-12">
        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full border border-gray-300 hover:border-primary hover:text-primary transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12 bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-64 md:h-full">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover"
              />
              <span className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                <span className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {blogPosts[0].category}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-sm">{blogPosts[0].author}</p>
                    <p className="text-sm text-gray-500">{blogPosts[0].readTime}</p>
                  </div>
                </div>
                <Link 
                  href={`/blog/${blogPosts[0].id}`}
                  className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map(post => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
              <div className="relative h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-primary font-semibold text-sm hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  )
}
