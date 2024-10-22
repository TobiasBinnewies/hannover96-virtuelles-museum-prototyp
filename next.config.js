/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  experimental: {
    serverActions: true,
  },
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/` : 'http://localhost:3000/',
  },
}
