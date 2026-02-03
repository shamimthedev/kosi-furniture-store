import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, Tag, ArrowLeft, Facebook, Twitter, Linkedin, Share2 } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: '10 Tips for Creating a Minimalist Living Space',
    excerpt: 'Discover how to transform your home into a serene, clutter-free sanctuary with our expert minimalist design tips.',
    image: '/images/product-3.png',
    author: 'Sarah Johnson',
    date: '2024-02-01',
    category: 'Interior Design',
    readTime: '5 min read',
    content: `
      <p>Creating a minimalist living space is more than just getting rid of excess stuff – it's about intentionally designing a space that reflects your values and supports your lifestyle. Here's how to get started on your minimalist journey.</p>

      <h2>1. Start with a Clear Vision</h2>
      <p>Before you begin decluttering, take time to envision what you want your space to feel like. Do you want calm and serene? Bright and airy? Having a clear vision will guide all your decisions.</p>

      <h2>2. Declutter Ruthlessly</h2>
      <p>The foundation of minimalism is removing what doesn't serve you. Go through each room and ask yourself: Does this item add value to my life? If not, it's time to let it go.</p>

      <h2>3. Choose Quality Over Quantity</h2>
      <p>Instead of filling your space with cheap, disposable items, invest in fewer, high-quality pieces that will last. This applies to furniture, decor, and even everyday items.</p>

      <h2>4. Embrace Negative Space</h2>
      <p>In minimalist design, empty space is just as important as filled space. Don't feel pressured to fill every corner – let your room breathe.</p>

      <h2>5. Stick to a Neutral Color Palette</h2>
      <p>Whites, grays, and earth tones create a calm, cohesive look that's characteristic of minimalist design. Add pops of color sparingly through art or plants.</p>

      <h2>6. Maximize Natural Light</h2>
      <p>Remove heavy curtains and let in as much natural light as possible. Clean windows regularly and consider adding mirrors to reflect light throughout the space.</p>

      <h2>7. Invest in Smart Storage</h2>
      <p>Minimalism doesn't mean having nothing – it means everything has its place. Invest in sleek, hidden storage solutions to keep surfaces clear.</p>

      <h2>8. Keep Surfaces Clear</h2>
      <p>Countertops, tables, and shelves should be mostly empty. This creates visual calm and makes cleaning easier.</p>

      <h2>9. Bring Nature Inside</h2>
      <p>A few carefully chosen plants add life to a minimalist space without creating clutter. Stick to simple, sculptural varieties.</p>

      <h2>10. Maintain Your Space</h2>
      <p>Minimalism is a practice, not a destination. Regularly reassess your belongings and commit to the "one in, one out" rule to maintain your serene space.</p>

      <h2>Final Thoughts</h2>
      <p>Creating a minimalist living space is a journey that looks different for everyone. The key is to focus on what truly matters to you and let go of the rest. Start small, be patient with yourself, and enjoy the process of creating a home that truly reflects who you are.</p>
    `
  },
  {
    id: 2,
    title: 'The Ultimate Guide to Choosing the Perfect Sofa',
    excerpt: 'Everything you need to know about selecting a sofa that combines comfort, style, and durability for your home.',
    image: '/images/product-4.png',
    author: 'Michael Chen',
    date: '2024-01-28',
    category: 'Buying Guide',
    readTime: '7 min read',
    content: '<p>Your sofa is likely the centerpiece of your living room and one of the most-used pieces of furniture in your home. Choosing the right one requires careful consideration of several factors...</p>'
  }
]

export default function BlogDetailsPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id)
  const post = blogPosts.find(p => p.id === postId) || blogPosts[0]
  
  const relatedPosts = blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container py-4">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-96 bg-gray-900">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container py-12">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4 text-white/80">
                <span className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Tag className="w-4 h-4" />
                  {post.category}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">{post.title}</h1>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full" />
                <div>
                  <p className="font-semibold">By {post.author}</p>
                  <p className="text-sm text-white/70">Interior Design Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm mb-8">
              {/* Excerpt */}
              <p className="text-xl text-gray-600 leading-relaxed mb-8 pb-8 border-b">
                {post.excerpt}
              </p>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-primary prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4
                  prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
                  prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                  prose-ul:my-6 prose-li:text-gray-600
                  prose-strong:text-primary prose-strong:font-semibold
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Share */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Share This Article
              </h3>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Facebook className="w-5 h-5" />
                  Facebook
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                  Twitter
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </button>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-2xl p-8 shadow-sm mt-8">
              <h3 className="font-bold text-2xl mb-6">Comments (3)</h3>
              
              {/* Comment Form */}
              <div className="mb-8 pb-8 border-b">
                <h4 className="font-semibold mb-4">Leave a Comment</h4>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <textarea
                    rows={4}
                    placeholder="Your Comment"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                    Post Comment
                  </button>
                </form>
              </div>

              {/* Sample Comments */}
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex gap-4 pb-6 border-b last:border-0">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h5 className="font-bold">Commenter {i}</h5>
                        <span className="text-sm text-gray-500">2 days ago</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Great article! These tips are really helpful. I've been trying to declutter
                        my space and this gives me a clear direction. Thank you for sharing!
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Author Bio */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full" />
                <div>
                  <h3 className="font-bold text-lg">{post.author}</h3>
                  <p className="text-sm text-gray-600">Interior Design Expert</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Passionate about creating beautiful, functional spaces. With over 10 years of
                experience in interior design, I love sharing tips to help you transform your home.
              </p>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-xl mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map(related => (
                    <Link
                      key={related.id}
                      href={`/blog/${related.id}`}
                      className="flex gap-4 pb-4 border-b last:border-0 hover:bg-gray-50 -mx-2 px-2 py-2 rounded-lg transition-colors"
                    >
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image src={related.image} alt={related.title} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm line-clamp-2 mb-1">{related.title}</h4>
                        <p className="text-xs text-gray-500">{related.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-4">Categories</h3>
              <div className="space-y-2">
                {['Interior Design', 'Buying Guide', 'Sustainability', 'Space Planning', 'Design Tips'].map(cat => (
                  <Link
                    key={cat}
                    href={`/blog?category=${cat}`}
                    className="block px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-primary text-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-xl mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-sm opacity-90 mb-4">
                Get the latest design tips and trends delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full px-4 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
