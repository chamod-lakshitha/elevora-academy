import type { MetadataRoute } from 'next';
import { courses } from '@/lib/data';
import { courseSlug, SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!SITE_URL) return [];

  const lastModified = new Date();
  return [
    { url: SITE_URL + '/', lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: SITE_URL + '/classes', lastModified, changeFrequency: 'weekly', priority: 0.9 },
    ...courses.map((course) => ({
      url: SITE_URL + '/classes/' + courseSlug(course.title),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: SITE_URL + '/about', lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
