import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kosi Furniture - Premium Furniture Store',
    short_name: 'Kosi Furniture',
    description: 'Transform your space with premium furniture and home decor',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2B303A',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}