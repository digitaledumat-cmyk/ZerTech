export interface NavLink {
  label: string;
  route: string;
}

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

export interface NavConfig {
  brand: string;
  navbar: NavLink[];
  footer: {
    navigation: { title: string; links: NavLink[] };
    legal: { title: string; links: NavLink[] };
    support: { title: string; links: NavLink[] };
  };
  ui: {
    tagline: string;
    menuAria: string;
    copyright: string;
    whatsapp: string;
    whatsappHref: string;
    email: string;
    supportHours: string;
  };
}

export interface NavbarProps {
  nav: NavConfig;
}

export interface FooterProps {
  nav: NavConfig;
}
