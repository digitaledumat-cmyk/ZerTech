import type { Lang } from './types';

export interface NavLink {
  label: string;
  route: string;
}

/** Clés synchronisées avec ROUTES (lib/routes.ts) et LEGAL_CONTENT (lib/legal-content.ts) */
export type NavLabelKey =
  | 'home'
  | 'abonnement'
  | 'guide'
  | 'faq'
  | 'blog'
  | 'contact'
  | 'planSite'
  | 'mentionsLegales'
  | 'conditions'
  | 'aup'
  | 'rgpd'
  | 'dmca'
  | 'privacy'
  | 'refund';

export interface LangSwitcherOption {
  code: string;
  label: string;
}

export interface NavTranslations {
  lang: Lang;
  brand: string;
  navbar: NavLink[];
  langSwitcher: LangSwitcherOption[];
  footer: {
    navigation: { title: string; links: NavLink[] };
    legal: { title: string; links: NavLink[] };
    support: { title: string; links: NavLink[] };
  };
  ui: {
    tagline: string;
    menuAria: string;
    sitemapXml: string;
    copyright: string;
    whatsapp: string;
    whatsappHref: string;
    email: string;
    supportHours: string;
  };
}

export interface NavbarProps {
  translations: NavTranslations;
}

export interface FooterProps {
  translations: NavTranslations;
}

export interface LangLayoutParams {
  lang: string;
}
