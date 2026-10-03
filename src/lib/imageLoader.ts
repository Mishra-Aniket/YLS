export function getAssetPath(path: string): string {
  if (!path) return "";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }

  // Detect GitHub Pages / production environment
  const isGitHubPages =
    process.env.NODE_ENV === "production" ||
    process.env.NEXT_PUBLIC_BASE_PATH === "/YLS" ||
    process.env.GITHUB_ACTIONS === "true" ||
    (typeof window !== "undefined" &&
      window.location.pathname.startsWith("/YLS"));

  const basePath = isGitHubPages ? "/YLS" : "";
  const cleanSrc = path.startsWith("/") ? path : `/${path}`;

  // If path already starts with /YLS, avoid double prefixing
  if (cleanSrc.startsWith("/YLS/")) {
    return cleanSrc;
  }

  return `${basePath}${cleanSrc}`;
}

export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width?: number;
  quality?: number;
}) {
  return getAssetPath(src);
}
