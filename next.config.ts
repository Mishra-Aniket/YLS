import type { NextConfig } from "next";

const isGitHubPages =
  process.env.NODE_ENV === "production" ||
  process.env.GITHUB_ACTIONS === "true" ||
  process.env.GITHUB_PAGES === "true";

const basePath = isGitHubPages ? "/YLS" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "transhub.theme-village.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
