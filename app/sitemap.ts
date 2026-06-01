import type { MetadataRoute } from 'next';
import { LANGS, ALL_PAGE_ROUTES, SITE_URL } from '@/lib/routes';
import { getBlogStaticParams } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of LANGS) {
    for (const route of ALL_PAGE_ROUTES) {
      entries.push({
        url: route ? `${SITE_URL}/${lang}/${route}` : `${SITE_URL}/${lang}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : route.includes('blog') ? 0.7 : 0.8,
      });
    }
  }

  for (const { lang, slug } of getBlogStaticParams()) {
    entries.push({
      url: `${SITE_URL}/${lang}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    });
  }

  return entries;
}
