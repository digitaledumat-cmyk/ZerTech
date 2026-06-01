import type { MetadataRoute } from 'next';
import { ALL_PAGE_ROUTES, SITE_URL } from '@/lib/routes';
import { getBlogStaticParams } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = ALL_PAGE_ROUTES.map((route) => ({
    url: route ? `${SITE_URL}/${route}` : `${SITE_URL}/`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('blog') ? 0.7 : 0.8,
  }));

  for (const { slug } of getBlogStaticParams()) {
    entries.push({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  }

  return entries;
}
