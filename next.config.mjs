/** @type {import('next').NextConfig} */
const isGitHubPages =
  process.env.GITHUB_PAGES === "true" ||
  process.env.GITHUB_ACTIONS === "true" ||
  process.env.NEXT_PUBLIC_BASE_PATH === "/YLS" ||
  process.env.NODE_ENV === "production";

const basePath = isGitHubPages ? "/YLS" : "";

const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  reactStrictMode: true,
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
