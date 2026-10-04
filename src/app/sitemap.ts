import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://yeslogisticsservice.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/about-us',
    '/services',
    '/case-studies',
    '/gallery',
    '/blog',
    '/contact-us',
    '/quote',
    '/privacy-policy',
    '/terms',
  ];

  return pages.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/services' ? 0.9 : 0.7,
  }));
}
