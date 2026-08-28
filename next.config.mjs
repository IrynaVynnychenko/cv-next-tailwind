/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '',
  transpilePackages: ['three', 'pixi.js'],
  images: {
    unoptimized: true
  }
};

export default nextConfig;
