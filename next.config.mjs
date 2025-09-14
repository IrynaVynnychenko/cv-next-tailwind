/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'prod',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
