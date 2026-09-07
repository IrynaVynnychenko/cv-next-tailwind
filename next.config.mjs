/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '',
  transpilePackages: ['three', 'pixi.js'],
  images: {
    unoptimized: true
  },
  // Separate build output from the dev cache so a `next build` run
  // (e.g. in CI or a second terminal) never corrupts a live `next dev`
  // server's webpack chunks by rewriting the same .next directory.
  distDir: process.env.NODE_ENV === 'production' ? '.next-build' : '.next'
};

export default nextConfig;
