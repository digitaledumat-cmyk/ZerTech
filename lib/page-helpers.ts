import type { Metadata } from 'next';
import { SITE_URL } from './routes';

const SITE_NAME = 'ZerTech';
const OG_IMAGE = `${SITE_URL}/icon.png`;

export function buildPageMetadata(
  title: string,
  description: string,
  path?: string,
): Metadata {
  const url = path ? `${SITE_URL}/${path}` : `${SITE_URL}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      locale: 'fr_FR',
      type: 'website',
      siteName: SITE_NAME,
      url,
      images: [{ url: OG_IMAGE, width: 512, height: 512, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
