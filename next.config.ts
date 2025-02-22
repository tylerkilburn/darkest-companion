import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === "production"
const repoName = "/your-repository-name/"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Disable default image optimization
  },
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  assetPrefix: isProd ? repoName : "",
  basePath: isProd ? repoName : "",
}

export default nextConfig
