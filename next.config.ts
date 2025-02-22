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
  //assetPrefix: isProd ? repoName : "",
  basePath: process.env.PAGES_BASE_PATH,
}

export default nextConfig
