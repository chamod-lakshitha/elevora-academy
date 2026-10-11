import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL : process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'https://example.com')).replace(/\/$/, '');
  const lastModified = new Date();
  return [
    { url: baseUrl + '/', lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: baseUrl + '/classes', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    { url: baseUrl + '/about', lastModified, changeFrequency: 'monthly', priority: 0.7 },
  ];
}