import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Allow local images from public folder (default)
    // Add external domains here if needed, e.g.:
    // domains: ['example.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable image optimization
    minimumCacheTTL: 60000,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable compression and optimization
  compress: true,
  poweredByHeader: false,
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
      {
        source: '/banners/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/past-events/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },
}

export default nextConfig