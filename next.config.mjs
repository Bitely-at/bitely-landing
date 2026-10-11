/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML in out/, served by GitHub Pages at the bitely.at root.
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
