export function getAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const basePath = process.env.NODE_ENV === "production" ? "/YLS" : "";
  const cleanSrc = path.startsWith("/") ? path : `/${path}`;
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
