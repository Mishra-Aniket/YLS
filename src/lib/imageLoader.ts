export function getAssetPath(path: string): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:')
  ) {
    return path;
  }

  const isGitHubPages =
    process.env.NEXT_PUBLIC_BASE_PATH === '/YLS' ||
    process.env.GITHUB_PAGES === 'true' ||
    (typeof window !== 'undefined' &&
      window.location.pathname.startsWith('/YLS'));

  const basePath = isGitHubPages ? '/YLS' : '';
  const cleanSrc = path.startsWith('/') ? path : `/${path}`;

  if (cleanSrc.startsWith('/YLS/')) {
    return cleanSrc;
  }

  return `${basePath}${cleanSrc}`;
}

export default function imageLoader({
  src,
}: {
  src: string;
  width?: number;
  quality?: number;
}) {
  return getAssetPath(src);
}
