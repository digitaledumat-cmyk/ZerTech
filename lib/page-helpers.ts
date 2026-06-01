import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { isValidLang, getTranslations } from './translations';
import type { Lang } from './types';
import { LANGS } from './routes';

export async function resolveLang(
  params: Promise<{ lang: string }>,
): Promise<Lang> {
  const { lang } = await params;
  if (!isValidLang(lang)) notFound();
  return lang;
}

export function buildPageMetadata(
  lang: Lang,
  title: string,
  description: string,
  path?: string,
): Metadata {
  const alternates = Object.fromEntries(
    LANGS.map((l) => [l, path ? `/${l}/${path}` : `/${l}`]),
  );

  return {
    title,
    description,
    alternates: { languages: alternates },
    openGraph: {
      title,
      description,
      locale: lang === 'fr' ? 'fr_FR' : lang === 'es' ? 'es_ES' : 'ar_MA',
    },
  };
}

export function getBaseTranslations(lang: Lang) {
  return getTranslations(lang);
}
