export const ORGANIZATION_LOGO_URL = 'https://zertech.ma/icon.png';

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ZerTech',
    alternateName: 'ZerTech — Abonnement IPTV Maroc Premium',
    url: 'https://zertech.ma',
    logo: ORGANIZATION_LOGO_URL,
    image: ORGANIZATION_LOGO_URL,
    description:
      'ZerTech — meilleur abonnement IPTV Maroc Premium 4K, serveur IPTV stable et test gratuit 24h.',
    telephone: '+212664140211',
    areaServed: ['MA', 'FR', 'ES', 'BE'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+212664140211',
      contactType: 'customer service',
      availableLanguage: ['French'],
    },
    sameAs: ['https://zertech.ma'],
  };
}
