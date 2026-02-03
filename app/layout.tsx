import type { Metadata } from 'next'
import { Montserrat, Roboto } from 'next/font/google'
import './globals.css'
import { StructuredData } from '@/components/StructuredData';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Kosi - Premium Furniture Store | Modern Home Decor',
    template: '%s | Kosi Furniture'
  },
  description: 'Transform your space with our curated collection of premium furniture and home decor. Modern, elegant, and affordable furniture for every room. Free shipping & easy returns.',
  keywords: ['furniture', 'home decor', 'premium furniture', 'modern furniture', 'living room', 'bedroom', 'dining room', 'office furniture', 'Bangladesh furniture'],
  authors: [{ name: 'Kosi Furniture' }],
  creator: 'Kosi Furniture',
  publisher: 'Kosi Furniture',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kosii.netlify.app'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/favicon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kosii.netlify.app', // Replace with your actual domain
    siteName: 'Kosi Furniture',
    title: 'Kosi - Premium Furniture Store | Modern Home Decor',
    description: 'Transform your space with our curated collection of premium furniture and home decor.',
    images: [
      {
        url: '/og-image.jpg', // add this image to your public folder
        width: 1200,
        height: 630,
        alt: 'Kosi Furniture - Premium Home Decor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kosi - Premium Furniture Store',
    description: 'Transform your space with our curated collection of premium furniture and home decor.',
    images: ['/og-image.jpg'], // add this image to your public folder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'google691dcfd7d854cb7b.html',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-secondary antialiased">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}