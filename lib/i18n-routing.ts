import type { Lang } from './types';

const SUPPORTED_LANGS: Lang[] = ['fr', 'es', 'ar'];

/** Construit l'URL localisée en conservant le chemin courant (usage client Navbar). */
export function getLangSwitcherPath(pathname: string, targetLang: Lang): string {
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length > 0 && SUPPORTED_LANGS.includes(segments[0] as Lang)) {
    segments[0] = targetLang;
  } else {
    segments.unshift(targetLang);
  }

  return `/${segments.join('/')}`;
}

/** Préfixe href pour un lien interne : /{lang} ou /{lang}/{route} */
export function buildLocalizedHref(lang: Lang, route: string): string {
  return route ? `/${lang}/${route}` : `/${lang}`;
}
