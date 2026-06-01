import type { Lang } from './types';
import { ROUTES, LEGAL_ROUTES } from './routes';
import type { NavLabelKey, NavLink, NavTranslations } from './nav-types';

export type { NavLink, NavLabelKey, NavTranslations, LangSwitcherOption, NavbarProps, FooterProps } from './nav-types';
export { getLangSwitcherPath, buildLocalizedHref } from './i18n-routing';

// ─── Labels multilingues ─────────────────────────────────────────────────────

const LABELS: Record<Lang, Record<NavLabelKey, string>> = {
  fr: {
    home: 'Accueil',
    abonnement: 'Abonnement IPTV',
    guide: 'Guide d\'installation',
    faq: 'FAQ',
    blog: 'Blog',
    contact: 'Contact',
    planSite: 'Plan du site',
    mentionsLegales: 'Mentions légales',
    conditions: 'Conditions d\'utilisation',
    aup: 'Politique d\'utilisation acceptable',
    rgpd: 'Conformité RGPD',
    dmca: 'Politique DMCA',
    privacy: 'Politique de confidentialité',
    refund: 'Remboursement et retour',
  },
  es: {
    home: 'Inicio',
    abonnement: 'Suscripción IPTV',
    guide: 'Guía de instalación',
    faq: 'FAQ',
    blog: 'Blog',
    contact: 'Contacto',
    planSite: 'Mapa del sitio',
    mentionsLegales: 'Aviso legal',
    conditions: 'Condiciones de uso',
    aup: 'Política de uso aceptable',
    rgpd: 'Conformidad RGPD',
    dmca: 'Política DMCA',
    privacy: 'Política de privacidad',
    refund: 'Reembolso y devolución',
  },
  ar: {
    home: 'الرئيسية',
    abonnement: 'اشتراك IPTV',
    guide: 'دليل التثبيت',
    faq: 'FAQ',
    blog: 'المدونة',
    contact: 'اتصل بنا',
    planSite: 'خريطة الموقع',
    mentionsLegales: 'إشعار قانوني',
    conditions: 'شروط الاستخدام',
    aup: 'سياسة الاستخدام المقبول',
    rgpd: 'الامتثال RGPD',
    dmca: 'سياسة DMCA',
    privacy: 'سياسة الخصوصية',
    refund: 'الاسترداد والإرجاع',
  },
};

const SECTION_TITLES: Record<Lang, { navigation: string; legal: string; support: string }> = {
  fr: { navigation: 'Navigation', legal: 'Légal', support: 'Support' },
  es: { navigation: 'Navegación', legal: 'Legal', support: 'Soporte' },
  ar: { navigation: 'التنقل', legal: 'قانوني', support: 'الدعم' },
};

/** Mapping route légale → clé label (synchronisé avec LEGAL_ROUTES) */
const LEGAL_ROUTE_LABEL_KEYS: Record<(typeof LEGAL_ROUTES)[number], NavLabelKey> = {
  [ROUTES.mentionsLegales]: 'mentionsLegales',
  [ROUTES.conditions]: 'conditions',
  [ROUTES.aup]: 'aup',
  [ROUTES.rgpd]: 'rgpd',
  [ROUTES.dmca]: 'dmca',
  [ROUTES.privacy]: 'privacy',
  [ROUTES.refund]: 'refund',
};

const WHATSAPP_NUMBER = '212664140211';

/** Labels natifs du sélecteur de langue, contextualisés par langue active */
const LANG_SWITCHER: Record<Lang, { code: string; label: string }[]> = {
  fr: [
    { code: 'fr', label: 'Français' },
    { code: 'es', label: 'Español' },
    { code: 'ar', label: 'العربية' },
  ],
  es: [
    { code: 'fr', label: 'Francés' },
    { code: 'es', label: 'Español' },
    { code: 'ar', label: 'Árabe' },
  ],
  ar: [
    { code: 'fr', label: 'الفرنسية' },
    { code: 'es', label: 'الإسبانية' },
    { code: 'ar', label: 'العربية' },
  ],
};

/** Messages WhatsApp pré-remplis par langue */
const WHATSAPP_MESSAGES: Record<Lang, string> = {
  fr: 'Bonjour ZerTech, je souhaite obtenir des informations sur votre abonnement IPTV premium.',
  es: 'Hola ZerTech, deseo obtener información sobre su suscripción IPTV premium.',
  ar: 'مرحباً ZerTech، أرغب في الحصول على معلومات حول اشتراك IPTV بريميوم.',
};

function buildWhatsAppHref(lang: Lang): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGES[lang])}`;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function label(lang: Lang, key: NavLabelKey): string {
  return LABELS[lang][key];
}

function navLink(lang: Lang, key: NavLabelKey, route: string): NavLink {
  return { label: label(lang, key), route };
}

function getLegalLinks(lang: Lang): NavLink[] {
  return LEGAL_ROUTES.map((route) => ({
    route,
    label: label(lang, LEGAL_ROUTE_LABEL_KEYS[route]),
  }));
}

function getNavbarLinksInternal(lang: Lang): NavLink[] {
  return [
    navLink(lang, 'home', ''),
    navLink(lang, 'abonnement', ROUTES.abonnement),
    navLink(lang, 'guide', ROUTES.guide),
    navLink(lang, 'faq', ROUTES.faq),
    navLink(lang, 'blog', ROUTES.blog),
    navLink(lang, 'contact', ROUTES.contact),
  ];
}

// ─── API publique ────────────────────────────────────────────────────────────

/** Point d'entrée unique — injecté par app/[lang]/layout.tsx */
export function getNavTranslations(lang: Lang): NavTranslations {
  const sections = SECTION_TITLES[lang];
  const navbar = getNavbarLinksInternal(lang);

  return {
    lang,
    brand: 'ZerTech',
    navbar,
    langSwitcher: LANG_SWITCHER[lang],
    footer: {
      navigation: {
        title: sections.navigation,
        links: [...navbar, navLink(lang, 'planSite', ROUTES.planSite)],
      },
      legal: {
        title: sections.legal,
        links: getLegalLinks(lang),
      },
      support: {
        title: sections.support,
        links: [
          navLink(lang, 'faq', ROUTES.faq),
          navLink(lang, 'contact', ROUTES.contact),
          navLink(lang, 'planSite', ROUTES.planSite),
        ],
      },
    },
    ui: {
      tagline:
        lang === 'fr'
          ? 'IPTV Premium au Maroc & Europe — Streaming 4K UHD sans coupure.'
          : lang === 'es'
            ? 'IPTV Premium en Marruecos y Europa — Streaming 4K UHD sin cortes.'
            : 'IPTV بريميوم في المغرب وأوروبا — بث 4K UHD بدون انقطاع.',
      menuAria: lang === 'fr' ? 'Menu' : lang === 'es' ? 'Menú' : 'القائمة',
      sitemapXml: 'Sitemap XML',
      copyright: `© ${new Date().getFullYear()} ZerTech. ${
        lang === 'fr'
          ? 'Tous droits réservés.'
          : lang === 'es'
            ? 'Todos los derechos reservados.'
            : 'جميع الحقوق محفوظة.'
      }`,
      whatsapp: '+212 664-140 211',
      whatsappHref: buildWhatsAppHref(lang),
      email: 'contact@zertech.ma',
      supportHours:
        lang === 'fr'
          ? 'Support 24h/24, 7j/7 via WhatsApp'
          : lang === 'es'
            ? 'Soporte 24/7 vía WhatsApp'
            : 'دعم 24/7 عبر WhatsApp',
    },
  };
}

// ─── Rétrocompatibilité ──────────────────────────────────────────────────────

export function getNavbarLinks(lang: Lang): NavLink[] {
  return getNavTranslations(lang).navbar;
}

export function getFooterSections(lang: Lang) {
  const t = getNavTranslations(lang);
  return {
    tagline: t.ui.tagline,
    navigation: t.footer.navigation,
    legal: t.footer.legal,
    support: t.footer.support,
    copyright: t.ui.copyright,
    whatsappDisplay: t.ui.whatsapp,
  };
}

export function getFooterTranslations(lang: Lang) {
  const t = getNavTranslations(lang);
  return {
    tagline: t.ui.tagline,
    sections: {
      product: t.footer.navigation,
      support: t.footer.support,
      legal: t.footer.legal,
      contact: {
        title: t.footer.support.title,
        whatsapp: t.ui.whatsapp,
        email: t.ui.email,
        hours: t.ui.supportHours,
      },
    },
    copyright: t.ui.copyright,
    sitemap: label(lang, 'planSite'),
  };
}

export function getPlanSiteTranslations(lang: Lang) {
  const t = getNavTranslations(lang);
  return {
    title: label(lang, 'planSite'),
    description:
      lang === 'fr'
        ? 'Accédez à l\'ensemble des pages ZerTech organisées par catégorie.'
        : lang === 'es'
          ? 'Acceda a todas las páginas de ZerTech organizadas por categoría.'
          : 'الوصول إلى جميع صفحات ZerTech مرتبة حسب الفئة.',
    xmlSitemap: t.ui.sitemapXml,
    sections: [
      t.footer.navigation,
      t.footer.support,
      t.footer.legal,
    ],
  };
}

export { LEGAL_ROUTE_LABEL_KEYS };
