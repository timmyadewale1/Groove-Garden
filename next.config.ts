import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Allow local images from public folder (default)
    // Add external domains here if needed, e.g.:
    // domains: ['example.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Allow videos to be served from public folder
  async headers() {
    return [
      {
        source: '/past-events-videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig