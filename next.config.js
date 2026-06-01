/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'artistlens.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  output: 'export',
}

module.exports = nextConfig
