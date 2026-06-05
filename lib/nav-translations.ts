import { ROUTES, LEGAL_ROUTES } from './routes';
import type { NavLabelKey, NavLink, NavConfig } from './nav-types';

export type { NavLink, NavLabelKey, NavConfig, NavbarProps, FooterProps } from './nav-types';

const LABELS: Record<NavLabelKey, string> = {
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
};

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
const WHATSAPP_MESSAGE =
  'Bonjour ZerTech, je souhaite obtenir des informations sur votre abonnement IPTV premium.';

function label(key: NavLabelKey): string {
  return LABELS[key];
}

function navLink(key: NavLabelKey, route: string): NavLink {
  return { label: label(key), route };
}

function getLegalLinks(): NavLink[] {
  return LEGAL_ROUTES.map((route) => ({
    route,
    label: label(LEGAL_ROUTE_LABEL_KEYS[route]),
  }));
}

function getNavbarLinksInternal(): NavLink[] {
  return [
    navLink('home', ''),
    navLink('abonnement', ROUTES.abonnement),
    navLink('guide', ROUTES.guide),
    navLink('faq', ROUTES.faq),
    navLink('blog', ROUTES.blog),
    navLink('contact', ROUTES.contact),
  ];
}

export function getNavConfig(): NavConfig {
  const navbar = getNavbarLinksInternal();

  return {
    brand: 'ZerTech',
    navbar,
    footer: {
      navigation: {
        title: 'Navigation',
        links: [...navbar, navLink('planSite', ROUTES.planSite)],
      },
      legal: {
        title: 'Légal',
        links: getLegalLinks(),
      },
      support: {
        title: 'Support',
        links: [
          navLink('faq', ROUTES.faq),
          navLink('contact', ROUTES.contact),
          navLink('planSite', ROUTES.planSite),
        ],
      },
    },
    ui: {
      tagline: 'IPTV Premium au Maroc & Europe — Streaming 4K UHD sans coupure.',
      menuAria: 'Menu',
      copyright: `© ${new Date().getFullYear()} ZerTech. Tous droits réservés.`,
      whatsapp: '+212 664-140 211',
      whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
      email: 'contact@zertech.ma',
      supportHours: 'Support 24h/24, 7j/7 via WhatsApp',
    },
  };
}

export function getPlanSiteContent() {
  const nav = getNavConfig();
  return {
    title: label('planSite'),
    description:
      'Plan du site ZerTech : accédez rapidement à toutes nos pages — abonnement IPTV, guide d\'installation, FAQ, blog, contact et informations légales pour zertech.ma.',
    sections: [nav.footer.navigation, nav.footer.support, nav.footer.legal],
  };
}

export { LEGAL_ROUTE_LABEL_KEYS };
