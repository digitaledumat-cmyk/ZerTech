export type Lang = 'fr' | 'es' | 'ar';

export interface PricingFeature {
  text: string;
}

export interface PricingPack {
  id: string;
  name: string;
  price: string;
  currency: string;
  features: string[];
  highlighted?: boolean;
}

export interface Review {
  name: string;
  city: string;
  country: string;
  text: string;
  rating: number;
}

export interface AccordionItem {
  question: string;
  answer: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    imageAlt: string;
  };
  benefits: {
    title: string;
    items: string[];
  };
  stats: {
    subscribers: string;
    online: string;
    renewal: string;
  };
  pricing: {
    title: string;
    guarantee: string;
    popular: string;
    packs: PricingPack[];
    cta: string;
  };
  trial: {
    title: string;
    subtitle: string;
    firstName: string;
    lastName: string;
    phone: string;
    pack: string;
    packPlaceholder: string;
    submit: string;
    whatsappIntro: string;
  };
  reviews: {
    title: string;
    score: string;
    reviewsCount: string;
    items: Review[];
  };
  localSeo: {
    title: string;
    content: string;
  };
  installation: {
    title: string;
    items: AccordionItem[];
  };
  faq: {
    title: string;
    items: AccordionItem[];
  };
  nav: {
    trial: string;
    pricing: string;
    guide: string;
    faq: string;
    contact: string;
  };
}
