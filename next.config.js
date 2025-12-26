/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Required for Docker deployment
  images: {
    domains: ['images.unsplash.com', 'github.com'],
  },
}

module.exports = nextConfig
