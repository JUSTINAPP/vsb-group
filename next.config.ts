import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/takeaway', destination: '/eat-drink', permanent: true },
      { source: '/vouchers', destination: '/', permanent: true },
      { source: '/menu', destination: '/eat-drink', permanent: true },
      {
        source: '/homepage-7room',
        destination: '/',
        permanent: true,
      },
      {
        source: '/author/samuel',
        destination: '/whats-on',
        permanent: true,
      },
      {
        source: '/author/:name',
        destination: '/whats-on',
        permanent: true,
      },
      {
        source: '/wp-admin',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/feed',
        destination: '/whats-on',
        permanent: true,
      },
      {
        source: '/birthdays-anniversary',
        destination: '/functions/birthdays-anniversary',
        permanent: true,
      },
      {
        source: '/corporate',
        destination: '/functions/corporate',
        permanent: true,
      },
      {
        source: '/engagements',
        destination: '/functions/engagements',
        permanent: true,
      },
      {
        source: '/wake',
        destination: '/functions/wake',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
