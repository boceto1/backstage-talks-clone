/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true
  },
  assetPrefix: './',
  output: 'export',
}

module.exports = nextConfig
