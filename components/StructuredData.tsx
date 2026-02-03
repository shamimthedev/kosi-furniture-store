export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    name: 'Kosi Furniture',
    description: 'Premium furniture store offering modern home decor and furniture',
    url: 'https://your-domain.netlify.app', // Replace with your actual domain
    telephone: '+880-XXXX-XXXXXX',
    email: 'hello@kosi-furniture.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Design Street',
      addressLocality: 'Furniture District',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US'
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
    sameAs: [
      'https://facebook.com/kosi',
      'https://instagram.com/kosi',
      'https://twitter.com/kosi'
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}