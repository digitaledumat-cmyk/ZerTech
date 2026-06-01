import type { Metadata } from 'next';

export function buildPageMetadata(
  title: string,
  description: string,
  path?: string,
): Metadata {
  const url = path ? `https://zertech.ma/${path}` : 'https://zertech.ma/';

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      locale: 'fr_FR',
      url,
    },
  };
}
