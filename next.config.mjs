/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '',
  transpilePackages: ['three'],
  images: {
    unoptimized: true
  }
};

export default nextConfig;
