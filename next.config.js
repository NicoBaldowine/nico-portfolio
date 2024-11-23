/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['your-domain-if-any.com']
  }
}

module.exports = nextConfig 