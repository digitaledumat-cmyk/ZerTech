import type { Lang } from './types';

export const LANGS: Lang[] = ['fr', 'es', 'ar'];

export const SITE_URL = 'https://zertech.ma';

export const ROUTES = {
  home: '',
  abonnement: 'abonnement-iptv',
  guide: 'guide-installation',
  faq: 'faq',
  blog: 'blog',
  contact: 'contact',
  planSite: 'plan-site',
  mentionsLegales: 'mentions-legales',
  conditions: 'conditions-utilisation',
  aup: 'politique-utilisation-acceptable',
  rgpd: 'conformite-rgpd',
  dmca: 'politique-dmca',
  privacy: 'politique-confidentialite',
  refund: 'remboursement-et-retour',
} as const;

export type RouteSlug = (typeof ROUTES)[keyof typeof ROUTES];

export const SECONDARY_ROUTES = [
  ROUTES.abonnement,
  ROUTES.guide,
  ROUTES.faq,
  ROUTES.blog,
  ROUTES.contact,
  ROUTES.planSite,
] as const;

export const LEGAL_ROUTES = [
  ROUTES.mentionsLegales,
  ROUTES.conditions,
  ROUTES.aup,
  ROUTES.rgpd,
  ROUTES.dmca,
  ROUTES.privacy,
  ROUTES.refund,
] as const;

export const ALL_PAGE_ROUTES = [
  ROUTES.home,
  ...SECONDARY_ROUTES,
  ...LEGAL_ROUTES,
] as const;

export function buildPath(lang: Lang, slug: RouteSlug): string {
  return slug ? `/${lang}/${slug}` : `/${lang}`;
}

export function buildFullUrl(lang: Lang, slug: RouteSlug): string {
  return `${SITE_URL}${buildPath(lang, slug)}`;
}
