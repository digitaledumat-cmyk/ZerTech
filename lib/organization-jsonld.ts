import type { Lang } from './types';

export const ORGANIZATION_LOGO_URL = 'https://zertech.ma/icon.png';

const ORGANIZATION_NAMES: Record<Lang, string> = {
  fr: 'ZerTech — Abonnement IPTV Maroc Premium',
  es: 'ZerTech — Suscripción IPTV Marruecos Premium',
  ar: 'ZerTech — اشتراك IPTV المغرب Premium',
};

export function buildOrganizationJsonLd(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZerTech',
    alternateName: ORGANIZATION_NAMES[lang],
    url: 'https://zertech.ma',
    logo: ORGANIZATION_LOGO_URL,
    image: ORGANIZATION_LOGO_URL,
    description:
      lang === 'fr'
        ? 'ZerTech — meilleur abonnement IPTV Maroc Premium 4K, serveur IPTV stable et test gratuit 24h.'
        : lang === 'es'
          ? 'ZerTech — mejor suscripción IPTV Marruecos Premium 4K, servidor IPTV estable y prueba gratis 24h.'
          : 'ZerTech — أفضل اشتراك IPTV في المغرب بجودة 4K Premium، خادم IPTV مستقر وتجربة مجانية 24 ساعة.',
    telephone: '+212664140211',
    areaServed: ['MA', 'FR', 'ES', 'BE'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+212664140211',
      contactType: 'customer service',
      availableLanguage: ['French', 'Spanish', 'Arabic'],
    },
    sameAs: ['https://zertech.ma'],
  };
}
