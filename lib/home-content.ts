import type { Lang } from './types';
import type { AccordionItem, PricingPack, Review } from './types';
import { seoTexts } from './home-seo-texts';

export interface HomeStat {
  value: string;
  label: string;
  detail: string;
}

export interface HomeBenefit {
  title: string;
  description: string;
}

export interface HomePricingPack extends PricingPack {
  description: string;
  longDescription: string;
  pricePeriod: string;
  featureIcon: 'check' | 'star';
  ribbon?: string;
  ribbonStyle?: 'hot' | 'elite';
  urgencyOffer?: string;
  urgencyDeadline?: string;
  includedLine?: string;
}

export interface HomeContent {
  meta: { title: string; description: string; keywords: string[] };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleHighlight: string;
    titleLine2: string;
    subtitle: string;
    seoParagraph: string;
    pills: string[];
    ctaWhatsApp: string;
    ctaPrimary: string;
    ctaSecondary: string;
    cta: string;
    imageAlt: string;
  };
  stats: {
    title: string;
    intro: string;
    items: HomeStat[];
    benefits: HomeBenefit[];
  };
  pricing: {
    title: string;
    intro: string;
    guarantee: string;
    popularBadge: string;
    cta: string;
    packs: HomePricingPack[];
  };
  trial: {
    title: string;
    subtitle: string;
    guideTitle: string;
    guideParagraphs: [string, string, string];
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
    reviewsCount: string;
    intro: string;
    items: Review[];
  };
  guide: {
    title: string;
    items: AccordionItem[];
  };
  faq: {
    title: string;
    items: AccordionItem[];
  };
  localSeo: {
    title: string;
    intro: string;
    blocks: { title: string; content: string }[];
  };
}

export const HOME_SEO_CITIES = [
  'Casablanca', 'Marrakech', 'Tanger', 'Agadir', 'Rabat', 'Fès',
  'Paris', 'Marseille', 'Lyon', 'Madrid', 'Barcelone',
] as const;

const packsBase = {
  pro: {
    id: 'pro',
    name: 'Pack PRO',
    price: '250',
    currency: 'DHS',
    features: {
      fr: [
        '+20 000 chaînes TV',
        '+25 000 films & séries',
        'Serveur Stable',
        'Résolution HD',
        'Anti-freeze',
        'Utilisation sur 1 appareil',
        'Support 24/7',
      ],
      es: [
        '+20 000 canales TV',
        '+25 000 películas y series',
        'Servidor Estable',
        'Resolución HD',
        'Anti-freeze',
        'Uso en 1 dispositivo',
        'Soporte 24/7',
      ],
      ar: [
        '+20,000 قناة تلفزيونية',
        '+25,000 فيلم ومسلسل',
        'خادم مستقر',
        'دقة HD',
        'Anti-freeze',
        'جهاز واحد',
        'دعم 24/7',
      ],
    },
  },
  proPlus: {
    id: 'pro-plus',
    name: 'Pack PRO+',
    price: '350',
    currency: 'DHS',
    features: {
      fr: [
        '+29 000 chaînes TV',
        '+129 000 films & séries',
        'Serveur OTT',
        'Résolution FHD',
        'Anti-freeze 2.0',
        'Utilisation sur 2 appareils',
        'Activation application incluse',
        'Support 24/7',
      ],
      es: [
        '+29 000 canales TV',
        '+129 000 películas y series',
        'Servidor OTT',
        'Resolución FHD',
        'Anti-freeze 2.0',
        'Uso en 2 dispositivos',
        'Activación de aplicación incluida',
        'Soporte 24/7',
      ],
      ar: [
        '+29,000 قناة تلفزيونية',
        '+129,000 فيلم ومسلسل',
        'خادم OTT',
        'دقة FHD',
        'Anti-freeze 2.0',
        'جهازان',
        'تفعيل التطبيق مشمول',
        'دعم 24/7',
      ],
    },
  },
  proPremium: {
    id: 'pro-premium',
    name: 'Pack PRO PREMIUM',
    price: '450',
    currency: 'DHS',
    features: {
      fr: [
        '+45 000 chaînes TV',
        '+180 000 films & séries',
        'Serveur OTT VPS',
        'Résolution 4K UHD',
        'Anti-freeze 2.2',
        'Utilisation sur 3 appareils',
        'Activation application PRO',
        'Support 24/7',
      ],
      es: [
        '+45 000 canales TV',
        '+180 000 películas y series',
        'Servidor OTT VPS',
        'Resolución 4K UHD',
        'Anti-freeze 2.2',
        'Uso en 3 dispositivos',
        'Activación aplicación PRO',
        'Soporte 24/7',
      ],
      ar: [
        '+45,000 قناة تلفزيونية',
        '+180,000 فيلم ومسلسل',
        'خادم OTT VPS',
        'دقة 4K UHD',
        'Anti-freeze 2.2',
        '3 أجهزة',
        'تفعيل تطبيق PRO',
        'دعم 24/7',
      ],
    },
  },
};

type PackLang = 'fr' | 'es' | 'ar';

const packMeta: Record<
  PackLang,
  Record<string, Omit<HomePricingPack, keyof typeof packsBase.pro | 'features' | 'price' | 'currency' | 'name' | 'id' | 'longDescription'>>
> = {
  fr: {
    pro: {
      description: 'Parfait pour découvrir l\'IPTV premium',
      pricePeriod: 'par an • 12 mois',
      featureIcon: 'check',
    },
    'pro-plus': {
      description: 'Notre best-seller — stabilité maximale',
      pricePeriod: 'par an • 12 mois',
      featureIcon: 'check',
      ribbon: 'VENTE CHAUDE !',
      ribbonStyle: 'hot',
      urgencyOffer: 'Activation IBO Player ou BOB Player GRATUITE',
      urgencyDeadline: 'Offre valable pour les 5 prochaines heures !',
      highlighted: true,
    },
    'pro-premium': {
      description: 'L\'expérience ultime en 4K UHD',
      pricePeriod: 'par an • 12 mois',
      featureIcon: 'star',
      ribbon: 'ELITE • PREMIUM',
      ribbonStyle: 'elite',
      urgencyOffer: 'Activation IBO Player ou BOB Player GRATUITE',
      urgencyDeadline: 'Offre valable pour les 5 prochaines heures !',
      includedLine: 'Tout le contenu PRO+ inclus',
    },
  },
  es: {
    pro: {
      description: 'Ideal para empezar con IPTV premium',
      pricePeriod: 'por año • 12 meses',
      featureIcon: 'check',
    },
    'pro-plus': {
      description: 'Nuestro best-seller — máxima estabilidad',
      pricePeriod: 'por año • 12 meses',
      featureIcon: 'check',
      ribbon: '¡OFERTA CALIENTE!',
      ribbonStyle: 'hot',
      urgencyOffer: 'Activación IBO Player o BOB Player GRATIS',
      urgencyDeadline: '¡Oferta válida durante las próximas 5 horas!',
      highlighted: true,
    },
    'pro-premium': {
      description: 'La experiencia definitiva en 4K UHD',
      pricePeriod: 'por año • 12 meses',
      featureIcon: 'star',
      ribbon: 'ELITE • PREMIUM',
      ribbonStyle: 'elite',
      urgencyOffer: 'Activación IBO Player o BOB Player GRATIS',
      urgencyDeadline: '¡Oferta válida durante las próximas 5 horas!',
      includedLine: 'Todo el contenido PRO+ incluido',
    },
  },
  ar: {
    pro: {
      description: 'مثالي لاكتشاف IPTV بريميوم',
      pricePeriod: 'سنوياً • 12 شهر',
      featureIcon: 'check',
    },
    'pro-plus': {
      description: 'الأكثر مبيعاً — أقصى استقرار',
      pricePeriod: 'سنوياً • 12 شهر',
      featureIcon: 'check',
      ribbon: 'عرض ساخن!',
      ribbonStyle: 'hot',
      urgencyOffer: 'تفعيل IBO Player أو BOB Player مجاناً',
      urgencyDeadline: 'العرض ساري للـ 5 ساعات القادمة!',
      highlighted: true,
    },
    'pro-premium': {
      description: 'التجربة النهائية بدقة 4K UHD',
      pricePeriod: 'سنوياً • 12 شهر',
      featureIcon: 'star',
      ribbon: 'ELITE • PREMIUM',
      ribbonStyle: 'elite',
      urgencyOffer: 'تفعيل IBO Player أو BOB Player مجاناً',
      urgencyDeadline: 'العرض ساري للـ 5 ساعات القادمة!',
      includedLine: 'جميع محتوى PRO+ مشمول',
    },
  },
};

function buildHomePacks(lang: PackLang): HomePricingPack[] {
  const meta = packMeta[lang];
  const long = seoTexts[lang].packLongDescriptions;
  return [
    {
      ...packsBase.pro,
      ...meta.pro,
      longDescription: long.pro,
      features: packsBase.pro.features[lang],
    },
    {
      ...packsBase.proPlus,
      ...meta['pro-plus'],
      longDescription: long.proPlus,
      features: packsBase.proPlus.features[lang],
    },
    {
      ...packsBase.proPremium,
      ...meta['pro-premium'],
      longDescription: long.proPremium,
      features: packsBase.proPremium.features[lang],
    },
  ];
}

function enrichHomeContent(lang: Lang, base: HomeContent): HomeContent {
  const seo = seoTexts[lang];
  return {
    ...base,
    meta: {
      title: base.meta.title,
      description: seo.metaDescription,
      keywords: seo.keywords,
    },
    hero: {
      ...base.hero,
      seoParagraph: seo.heroSeoParagraph,
    },
    stats: {
      title: base.stats.title,
      intro: seo.statsIntro,
      items: base.stats.items.map((item, i) => ({
        ...item,
        detail: seo.statDetails[i] ?? '',
      })),
      benefits: seo.benefits,
    },
    pricing: {
      ...base.pricing,
      intro: seo.pricingIntro,
      packs: base.pricing.packs,
    },
    trial: {
      ...base.trial,
      guideTitle: seo.trialGuide.guideTitle,
      guideParagraphs: seo.trialGuide.guideParagraphs,
    },
    reviews: {
      ...base.reviews,
      intro: seo.reviewsIntro,
      items: base.reviews.items.map((item, i) => ({
        ...item,
        text: seo.reviews[i] ?? item.text,
      })),
    },
    faq: {
      title: base.faq.title,
      items: seo.faqItems,
    },
    localSeo: {
      title: base.localSeo.title,
      intro: seo.localSeoIntro,
      blocks: seo.localSeoBlocks,
    },
  };
}

const homeContent: Record<Lang, HomeContent> = {
  fr: {
    meta: {
      title: 'ZerTech | Abonnement IPTV Premium Haute Stabilité au Maroc & Europe en 4K UHD',
      description: '',
      keywords: [],
    },
    hero: {
      eyebrow: 'LE FUTUR DU DIVERTISSEMENT • MAROC & EUROPE',
      titleLine1: 'Meilleur IPTV Maroc —',
      titleHighlight: 'Abonnement IPTV Premium 4K',
      titleLine2: 'Serveur IPTV Stable & IPTV sans Coupure',
      subtitle:
        'Streaming cristallin sans coupure. Infrastructure OTT sécurisée à haute disponibilité au Maroc et en Europe — activation en moins de 15 minutes.',
      seoParagraph: '',
      pills: ['25 000+ chaînes', 'Films & séries', '4K Ultra HD', 'Sans buffering'],
      ctaWhatsApp: 'Essai 24h gratuit',
      ctaPrimary: 'Commencer',
      ctaSecondary: 'Voir les forfaits',
      cta: 'Essai Gratuit 24h',
      imageAlt: 'Meilleur Abonnement IPTV Maroc Premium 4K - ZerTech',
    },
    stats: {
      title: 'ZerTech en chiffres',
      intro: '',
      items: [
        { value: '+4 500', label: 'Clients Abonnés', detail: '' },
        { value: '980', label: 'Clients en Ligne Actuellement', detail: '' },
        { value: '95%', label: 'Taux de Réabonnement', detail: '' },
      ],
      benefits: [],
    },
    pricing: {
      title: 'Nos Packs Premium',
      intro: '',
      guarantee:
        'Tous nos abonnements sont sous garantie 45 jours satisfait ou remboursé totalement',
      popularBadge: 'Le plus populaire',
      cta: 'Choisir ce pack',
      packs: buildHomePacks('fr'),
    },
    trial: {
      title: 'Test Gratuit 24h',
      subtitle:
        'Remplissez le formulaire ci-dessous — votre demande sera envoyée directement à notre équipe via WhatsApp pour une activation en moins de 15 minutes.',
      guideTitle: '',
      guideParagraphs: ['', '', ''] as [string, string, string],
      firstName: 'Prénom',
      lastName: 'Nom',
      phone: 'Numéro de téléphone',
      pack: 'Choix du Pack',
      packPlaceholder: 'Sélectionnez un pack',
      submit: 'Envoyer la demande',
      whatsappIntro: 'Bonjour ZerTech, je souhaite bénéficier d\'un test gratuit 24h.',
    },
    reviews: {
      title: 'Avis Clients',
      reviewsCount: '634 avis · 5 étoiles',
      intro: '',
      items: [
        {
          name: 'Karim B.',
          city: 'Casablanca',
          country: 'Maroc',
          text: 'J\'utilise ZerTech depuis 8 mois à Casablanca. Stabilité parfaite pendant la CAN et les matchs de la Botola — image 4K fluide sans aucun freeze. Le support WhatsApp répond en moins de 5 minutes, même à 23h. Meilleur IPTV que j\'ai testé au Maroc, je renouvelle sans hésiter.',
          rating: 5,
        },
        {
          name: 'Thomas L.',
          city: 'Paris',
          country: 'France',
          text: 'Installé sur ma Smart TV Samsung à Paris en 10 minutes chrono. Anti-freeze remarquable même aux heures de pointe — Ligue 1, Premier League et beIN en FHD/4K sans coupure. Service professionnel, activation rapide et équipe réactive. Je recommande ZerTech à tous mes amis en France.',
          rating: 5,
        },
        {
          name: 'Carlos R.',
          city: 'Madrid',
          country: 'Espagne',
          text: 'Excelente calidad FHD y 4K desde Madrid. Todas las ligas españolas, Champions y Fórmula 1 sin un solo corte. La activación llegó por WhatsApp en 12 minutos y el soporte técnico en español está disponible 24/7. Llevo 6 meses suscrito al Pack PRO+ y la experiencia es impecable.',
          rating: 5,
        },
      ],
    },
    guide: {
      title: 'Guide d\'installation rapide',
      items: [
        {
          question: 'Smart TV (Samsung, LG, Sony)',
          answer:
            'Étape 1 : Ouvrez le store de votre TV et installez IPTV Smarters Pro ou TiviMate. Étape 2 : Sélectionnez « Xtream Codes API ». Étape 3 : Saisissez l\'URL serveur, le login et le mot de passe reçus par WhatsApp. Étape 4 : Profitez du HD/4K en moins de 5 minutes — l\'anti-freeze ZerTech s\'active automatiquement.',
        },
        {
          question: 'Android & Amazon Firestick',
          answer:
            'Étape 1 : Téléchargez IPTV Smarters Pro depuis le Play Store ou via Downloader sur Firestick (code : 912949). Étape 2 : Entrez vos identifiants Xtream Codes ZerTech. Étape 3 : Activez le lecteur externo si nécessaire. Compatible Android TV, box et Fire TV Stick 4K — streaming stable garanti.',
        },
        {
          question: 'iOS & Apple TV',
          answer:
            'Étape 1 : Installez GSE Smart IPTV ou IPTV Smarters Pro depuis l\'App Store. Étape 2 : Ajoutez un profil Xtream Codes avec vos identifiants ZerTech. Étape 3 : Lancez le flux sur iPhone, iPad ou Apple TV 4K. Picture-in-Picture et AirPlay supportés pour une expérience premium.',
        },
      ],
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        {
          question: 'Le flux IPTV est-il fluide en 4K UHD ?',
          answer:
            'Oui. ZerTech utilise des serveurs OTT VPS avec anti-freeze 2.2 et CDN optimisé pour absorber les pics d\'audience. Nos clients bénéficient d\'un streaming 4K UHD sans buffering, même pendant les grands événements sportifs. Taux de réabonnement de 95 % — la fluidité est notre priorité absolue.',
        },
        {
          question: 'Comment fonctionne le support technique ?',
          answer:
            'Notre équipe est disponible 24h/24 et 7j/7 via WhatsApp au +212 664 140 211. Activation en moins de 15 minutes, assistance à l\'installation pas à pas, dépannage en direct et conseils personnalisés selon votre appareil (Smart TV, Firestick, iOS). Réponse moyenne en moins de 5 minutes.',
        },
        {
          question: 'Comment s\'applique la garantie de remboursement ?',
          answer:
            'Tous nos abonnements bénéficient d\'une garantie 45 jours satisfait ou remboursé totalement. Si le service ne vous convient pas, contactez-nous via WhatsApp avec votre numéro de commande — remboursement intégral effectué sous 48 heures, sans condition ni frais cachés.',
        },
      ],
    },
    localSeo: {
      title: 'Pourquoi notre abonnement IPTV Maroc est la référence en 2026',
      intro:
        'Trouver le meilleur IPTV Maroc avec une stabilité absolue n\'a jamais été aussi simple. ZerTech conçoit chaque abonnement IPTV Maroc pour offrir une expérience IPTV Premium 4K fluide, un serveur IPTV stable et un streaming IPTV sans coupure — du Maroc à l\'Europe, sans compromis.',
      blocks: [
        {
          title: 'Flux IPTV Premium 4K et Full HD',
          content:
            'Profitez de flux IPTV Premium 4K et Full HD sur tous vos écrans. Notre plateforme s\'adapte à votre débit pour garantir une image nette et immersive, même aux heures de pointe.',
        },
        {
          title: 'Serveur IPTV stable & anti-freeze',
          content:
            'Chaque serveur IPTV stable ZerTech embarque une technologie anti-freeze avancée. Résultat : un IPTV sans coupure pendant les grands matchs, séries et événements en direct.',
        },
        {
          title: 'Le meilleur rapport qualité-prix',
          content:
            'Le meilleur rapport qualité-prix pour votre abonnement IPTV : packs transparents, sans frais cachés, avec une qualité comparable aux services premium internationaux.',
        },
        {
          title: 'Test IPTV gratuit 24h',
          content:
            'Avant de vous engager, profitez d\'un test IPTV gratuit 24h. Activation rapide par WhatsApp pour valider la stabilité chez vous, au Maroc ou en Europe.',
        },
        {
          title: 'IPTV Maroc : couverture locale optimisée',
          content:
            'Notre service IPTV Maroc est optimisé pour Casablanca, Rabat, Marrakech, Tanger et Agadir — latence réduite et serveurs proches pour une expérience locale impeccable.',
        },
        {
          title: 'Diaspora : France, Espagne & Belgique',
          content:
            'Votre abonnement IPTV Maroc vous suit en Europe. Que vous résidiez en France, Espagne ou Belgique, accédez aux mêmes chaînes marocaines et internationales en IPTV Premium 4K.',
        },
        {
          title: 'Meilleur IPTV Maroc : notre engagement',
          content:
            'Être le meilleur IPTV Maroc, c\'est garantir un support 24/7, une activation en moins de 15 minutes et un taux de réabonnement de 95 %. ZerTech place la fiabilité avant tout.',
        },
        {
          title: 'IPTV sans coupure, garanti',
          content:
            'L\'IPTV sans coupure n\'est pas une promesse marketing : c\'est le cœur de notre infrastructure OTT VPS, conçue pour absorber les pics d\'audience sans ralentissement ni freeze.',
        },
      ],
    },
  },

  es: {
    meta: {
      title: 'ZerTech | Suscripción IPTV Premium de Alta Estabilidad en 4K UHD',
      description: '',
      keywords: [],
    },
    hero: {
      eyebrow: 'EL FUTURO DEL ENTRETENIMIENTO • MARRUECOS Y EUROPA',
      titleLine1: 'Mejor IPTV Marruecos —',
      titleHighlight: 'Suscripción IPTV Premium 4K',
      titleLine2: 'Servidor IPTV Estable & IPTV sin Cortes',
      subtitle:
        'Streaming cristalino sin cortes. Infraestructura OTT segura de alta disponibilidad en Marruecos y Europa — activación en menos de 15 minutos.',
      seoParagraph: '',
      pills: ['25 000+ canales', 'Películas y series', '4K Ultra HD', 'Sin buffering'],
      ctaWhatsApp: 'Prueba 24h gratis',
      ctaPrimary: 'Empezar',
      ctaSecondary: 'Ver planes',
      cta: 'Prueba Gratis 24h',
      imageAlt: 'El mejor abono IPTV Marruecos Premium 4K - ZerTech',
    },
    stats: {
      title: 'ZerTech en cifras',
      intro: '',
      items: [
        { value: '+4 500', label: 'Clientes Suscritos', detail: '' },
        { value: '980', label: 'Clientes En Línea Actualmente', detail: '' },
        { value: '95%', label: 'Tasa de Renovación', detail: '' },
      ],
      benefits: [],
    },
    pricing: {
      title: 'Nuestros Packs Premium',
      intro: '',
      guarantee:
        'Todas nuestras suscripciones incluyen garantía de 45 días satisfecho o reembolsado totalmente',
      popularBadge: 'El más popular',
      cta: 'Elegir este pack',
      packs: buildHomePacks('es'),
    },
    trial: {
      title: 'Prueba Gratis 24h',
      subtitle:
        'Complete el formulario — su solicitud se enviará directamente a nuestro equipo vía WhatsApp para una activación en menos de 15 minutos.',
      guideTitle: '',
      guideParagraphs: ['', '', ''] as [string, string, string],
      firstName: 'Nombre',
      lastName: 'Apellido',
      phone: 'Número de teléfono',
      pack: 'Elección del Pack',
      packPlaceholder: 'Seleccione un pack',
      submit: 'Enviar la solicitud',
      whatsappIntro: 'Hola ZerTech, deseo beneficiarme de una prueba gratis de 24h.',
    },
    reviews: {
      title: 'Opiniones de Clientes',
      reviewsCount: '634 opiniones · 5 estrellas',
      intro: '',
      items: [
        {
          name: 'Karim B.',
          city: 'Casablanca',
          country: 'Marruecos',
          text: 'Llevo 8 meses con ZerTech en Casablanca. Estabilidad perfecta durante la CAN y la Botola — imagen 4K fluida sin ningún corte. El soporte WhatsApp responde en menos de 5 minutos. El mejor IPTV que he probado en Marruecos.',
          rating: 5,
        },
        {
          name: 'Thomas L.',
          city: 'París',
          country: 'Francia',
          text: 'Instalado en mi Smart TV Samsung en París en 10 minutos. Anti-freeze notable incluso en horas punta — Ligue 1, Premier League y beIN en FHD/4K sin interrupciones. Servicio profesional y equipo muy reactivo.',
          rating: 5,
        },
        {
          name: 'Carlos R.',
          city: 'Madrid',
          country: 'España',
          text: 'Excelente calidad FHD y 4K desde Madrid. Todas las ligas españolas, Champions y Fórmula 1 sin un solo corte. Activación por WhatsApp en 12 minutos y soporte técnico en español 24/7. Llevo 6 meses con el Pack PRO+ — experiencia impecable.',
          rating: 5,
        },
      ],
    },
    guide: {
      title: 'Guía de instalación rápida',
      items: [
        {
          question: 'Smart TV (Samsung, LG, Sony)',
          answer:
            'Paso 1: Abra la tienda de su TV e instale IPTV Smarters Pro o TiviMate. Paso 2: Seleccione «Xtream Codes API». Paso 3: Introduzca URL, login y contraseña recibidos por WhatsApp. Paso 4: Disfrute de HD/4K en menos de 5 minutos.',
        },
        {
          question: 'Android y Amazon Firestick',
          answer:
            'Paso 1: Descargue IPTV Smarters Pro desde Play Store o Downloader en Firestick. Paso 2: Introduzca credenciales Xtream Codes ZerTech. Paso 3: Compatible con Android TV, box y Fire TV Stick 4K.',
        },
        {
          question: 'iOS y Apple TV',
          answer:
            'Paso 1: Instale GSE Smart IPTV o IPTV Smarters Pro desde App Store. Paso 2: Añada perfil Xtream Codes con sus credenciales ZerTech. Paso 3: Compatible con iPhone, iPad y Apple TV 4K.',
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        {
          question: '¿Es fluido el streaming IPTV en 4K UHD?',
          answer:
            'Sí. ZerTech utiliza servidores OTT VPS con anti-freeze 2.2 y CDN optimizado. Streaming 4K UHD sin buffering, incluso durante grandes eventos deportivos. Tasa de renovación del 95%.',
        },
        {
          question: '¿Cómo funciona el soporte técnico?',
          answer:
            'Equipo disponible 24/7 vía WhatsApp al +212 664 140 211. Activación en menos de 15 minutos, asistencia paso a paso y respuesta media en menos de 5 minutos.',
        },
        {
          question: '¿Cómo se aplica la garantía de reembolso?',
          answer:
            'Garantía de 45 días satisfecho o reembolsado totalmente. Contacte vía WhatsApp — reembolso íntegro en 48 horas, sin condiciones ni costes ocultos.',
        },
      ],
    },
    localSeo: {
      title: 'Por qué nuestra suscripción IPTV Marruecos es la referencia en 2026',
      intro:
        'Encontrar el mejor IPTV Marruecos con estabilidad absoluta nunca fue tan sencillo. ZerTech diseña cada suscripción IPTV Marruecos para ofrecer IPTV Premium 4K fluido, un servidor IPTV estable y streaming IPTV sin cortes — de Marruecos a Europa, sin compromisos.',
      blocks: [
        {
          title: 'Flujos IPTV Premium 4K y Full HD',
          content:
            'Disfrute de flujos IPTV Premium 4K y Full HD en todas sus pantallas. Nuestra plataforma se adapta a su conexión para garantizar una imagen nítida, incluso en horas punta.',
        },
        {
          title: 'Servidor IPTV estable & anti-freeze',
          content:
            'Cada servidor IPTV estable ZerTech integra tecnología anti-freeze avanzada. Resultado: IPTV sin cortes durante grandes partidos, series y eventos en directo.',
        },
        {
          title: 'La mejor relación calidad-precio',
          content:
            'La mejor relación calidad-precio para su suscripción IPTV: packs transparentes, sin costes ocultos, con calidad comparable a servicios premium internacionales.',
        },
        {
          title: 'Prueba IPTV gratis 24h',
          content:
            'Antes de comprometerse, aproveche una prueba IPTV gratis 24h. Activación rápida por WhatsApp para validar la estabilidad en Marruecos o Europa.',
        },
        {
          title: 'IPTV Marruecos: cobertura local optimizada',
          content:
            'Nuestro servicio IPTV Marruecos está optimizado para Casablanca, Rabat, Marrakech, Tánger y Agadir — latencia reducida y servidores cercanos para una experiencia local impecable.',
        },
        {
          title: 'Diáspora: Francia, España y Bélgica',
          content:
            'Su suscripción IPTV Marruecos le acompaña en Europa. Resida en Francia, España o Bélgica y acceda a los mismos canales marroquíes e internacionales en IPTV Premium 4K.',
        },
        {
          title: 'Mejor IPTV Marruecos: nuestro compromiso',
          content:
            'Ser el mejor IPTV Marruecos es garantizar soporte 24/7, activación en menos de 15 minutos y una tasa de renovación del 95 %. ZerTech prioriza la fiabilidad.',
        },
        {
          title: 'IPTV sin cortes, garantizado',
          content:
            'El IPTV sin cortes no es una promesa de marketing: es el núcleo de nuestra infraestructura OTT VPS, diseñada para absorber picos de audiencia sin ralentizaciones.',
        },
      ],
    },
  },

  ar: {
    meta: {
      title: 'ZerTech | اشتراك IPTV ممتاز وعالي الثبات في المغرب وأوروبا بدقة 4K UHD',
      description: '',
      keywords: [],
    },
    hero: {
      eyebrow: 'مستقبل الترفيه • المغرب وأوروبا',
      titleLine1: 'أفضل IPTV المغرب —',
      titleHighlight: 'اشتراك IPTV Premium 4K',
      titleLine2: 'خادم IPTV مستقر و IPTV بدون انقطاع',
      subtitle:
        'بث بلوري بدون انقطاع. بنية OTT آمنة عالية التوفر في المغرب وأوروبا — تفعيل في أقل من 15 دقيقة.',
      seoParagraph: '',
      pills: ['+25,000 قناة', 'أفلام ومسلسلات', '4K Ultra HD', 'بدون تقطيع'],
      ctaWhatsApp: 'تجربة 24 ساعة مجانية',
      ctaPrimary: 'ابدأ الآن',
      ctaSecondary: 'عرض الباقات',
      cta: 'تجربة مجانية 24 ساعة',
      imageAlt: 'أفضل اشتراك IPTV في المغرب بجودة 4K - زيرتيك',
    },
    stats: {
      title: 'ZerTech بالأرقام',
      intro: '',
      items: [
        { value: '+4 500', label: 'عملاء مشتركون', detail: '' },
        { value: '980', label: 'عملاء متصلون حالياً', detail: '' },
        { value: '95%', label: 'معدل التجديد', detail: '' },
      ],
      benefits: [],
    },
    pricing: {
      title: 'باقاتنا البريميوم',
      intro: '',
      guarantee: 'جميع اشتراكاتنا مشمولة بضمان 45 يوماً راضٍ أو استرداد كامل',
      popularBadge: 'الأكثر شعبية',
      cta: 'اختر هذه الباقة',
      packs: buildHomePacks('ar'),
    },
    trial: {
      title: 'تجربة مجانية 24 ساعة',
      subtitle:
        'املأ النموذج — سيتم إرسال طلبك مباشرة إلى فريقنا عبر WhatsApp للتفعيل في أقل من 15 دقيقة.',
      guideTitle: '',
      guideParagraphs: ['', '', ''] as [string, string, string],
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      phone: 'رقم الهاتف',
      pack: 'اختيار الباقة',
      packPlaceholder: 'اختر باقة',
      submit: 'إرسال الطلب',
      whatsappIntro: 'مرحباً ZerTech، أرغب في تجربة مجانية لمدة 24 ساعة.',
    },
    reviews: {
      title: 'آراء العملاء',
      reviewsCount: '634 تقييم · 5 نجوم',
      intro: '',
      items: [
        {
          name: 'Karim B.',
          city: 'الدار البيضاء',
          country: 'المغرب',
          text: 'أستخدم ZerTech منذ 8 أشهر في الدار البيضاء. استقرار مثالي أثناء كأس أمم إفريقيا والبطولة — صورة 4K سلسة بدون أي انقطاع. دعم WhatsApp يرد في أقل من 5 دقائق. أفضل IPTV جربته في المغرب.',
          rating: 5,
        },
        {
          name: 'Thomas L.',
          city: 'باريس',
          country: 'فرنسا',
          text: 'تم التثبيت على Smart TV Samsung في باريس خلال 10 دقائق. Anti-freeze ممتاز حتى في أوقات الذروة — Ligue 1 و Premier League و beIN بدقة FHD/4K بدون انقطاع. خدمة احترافية وفريق متجاوب.',
          rating: 5,
        },
        {
          name: 'Carlos R.',
          city: 'مدريد',
          country: 'إسبانيا',
          text: 'جودة FHD و4K ممتازة من مدريد. جميع الدوريات الإسبانية و Champions و Formula 1 بدون أي انقطاع. التفعيل عبر WhatsApp في 12 دقيقة ودعم فني بالإسبانية 24/7. مشترك في Pack PRO+ منذ 6 أشهر — تجربة لا تشوبها شائبة.',
          rating: 5,
        },
      ],
    },
    guide: {
      title: 'دليل التثبيت السريع',
      items: [
        {
          question: 'Smart TV (Samsung, LG, Sony)',
          answer:
            'الخطوة 1: افتح متجر التلفاز وثبّت IPTV Smarters Pro أو TiviMate. الخطوة 2: اختر Xtream Codes API. الخطوة 3: أدخل URL وبيانات الدخول المستلمة عبر WhatsApp. الخطوة 4: استمتع بـ HD/4K في أقل من 5 دقائق.',
        },
        {
          question: 'Android و Amazon Firestick',
          answer:
            'الخطوة 1: حمّل IPTV Smarters Pro من Play Store أو Downloader على Firestick. الخطوة 2: أدخل بيانات Xtream Codes ZerTech. الخطوة 3: متوافق مع Android TV و Fire TV Stick 4K.',
        },
        {
          question: 'iOS و Apple TV',
          answer:
            'الخطوة 1: ثبّت GSE Smart IPTV أو IPTV Smarters Pro من App Store. الخطوة 2: أضف ملف Xtream Codes ببيانات ZerTech. الخطوة 3: متوافق مع iPhone و iPad و Apple TV 4K.',
        },
      ],
    },
    faq: {
      title: 'الأسئلة الشائعة',
      items: [
        {
          question: 'هل البث IPTV سلس بدقة 4K UHD؟',
          answer:
            'نعم. تستخدم ZerTech خوادم OTT VPS مع Anti-freeze 2.2 و CDN محسّن. بث 4K UHD بدون تجميد حتى أثناء الأحداث الرياضية الكبرى. معدل تجديد 95%.',
        },
        {
          question: 'كيف يعمل الدعم الفني؟',
          answer:
            'فريقنا متاح 24/7 عبر WhatsApp على +212 664 140 211. تفعيل في أقل من 15 دقيقة، مساعدة خطوة بخطوة ومتوسط استجابة أقل من 5 دقائق.',
        },
        {
          question: 'كيف تُطبَّق ضمان الاسترداد؟',
          answer:
            'ضمان 45 يوماً راضٍ أو استرداد كامل. تواصل عبر WhatsApp — استرداد كامل خلال 48 ساعة، بدون شروط أو رسوم خفية.',
        },
      ],
    },
    localSeo: {
      title: 'لماذا اشتراك IPTV المغرب لدينا هو المرجع في 2026',
      intro:
        'العثور على أفضل IPTV المغرب بثبات مطلق لم يكن بهذه السهولة. تصمم ZerTech كل اشتراك IPTV المغرب لتقديم IPTV Premium 4K سلس، وخادم IPTV مستقر، وبث IPTV بدون انقطاع — من المغرب إلى أوروبا، دون مساومة.',
      blocks: [
        {
          title: 'بث IPTV Premium 4K و Full HD',
          content:
            'استمتع ببث IPTV Premium 4K و Full HD على جميع شاشاتك. تتكيف منصتنا مع سرعة اتصالك لضمان صورة واضحة حتى في أوقات الذروة.',
        },
        {
          title: 'خادم IPTV مستقر وتقنية anti-freeze',
          content:
            'كل خادم IPTV مستقر من ZerTech يدمج تقنية anti-freeze متقدمة. النتيجة: IPTV بدون انقطاع أثناء المباريات الكبرى والمسلسلات والأحداث المباشرة.',
        },
        {
          title: 'أفضل قيمة مقابل السعر',
          content:
            'أفضل قيمة مقابل السعر لاشتراك IPTV الخاص بك: باقات شفافة، بدون رسوم خفية، بجودة تنافس أفضل الخدمات العالمية.',
        },
        {
          title: 'تجربة IPTV مجانية 24 ساعة',
          content:
            'قبل الالتزام، استفد من تجربة IPTV مجانية 24 ساعة. تفعيل سريع عبر WhatsApp للتحقق من الاستقرار في المغرب أو أوروبا.',
        },
        {
          title: 'IPTV المغرب: تغطية محلية محسّنة',
          content:
            'خدمة IPTV المغرب لدينا محسّنة للدار البيضاء والرباط ومراكش وطنجة وأكادير — زمن استجابة منخفض وخوادم قريبة لتجربة محلية مثالية.',
        },
        {
          title: 'الجالية: فرنسا وإسبانيا وبلجيكا',
          content:
            'اشتراك IPTV المغرب يرافقك في أوروبا. سواء في فرنسا أو إسبانيا أو بلجيكا، الوصول إلى نفس القنوات المغربية والدولية بـ IPTV Premium 4K.',
        },
        {
          title: 'أفضل IPTV المغرب: التزامنا',
          content:
            'أن نكون أفضل IPTV المغرب يعني ضمان دعم 24/7، وتفعيل في أقل من 15 دقيقة، ومعدل تجديد 95%. ZerTech تضع الموثوقية في المقدمة.',
        },
        {
          title: 'IPTV بدون انقطاع، مضمون',
          content:
            'IPTV بدون انقطاع ليس وعداً تسويقياً: إنه جوهر بنيتنا OTT VPS، المصممة لاستيعاب ذروات المشاهدة دون بطء أو تجميد.',
        },
      ],
    },
  },
};

export function getHomeContent(lang: Lang): HomeContent {
  return enrichHomeContent(lang, homeContent[lang]);
}

export function buildHomeJsonLd(lang: Lang) {
  const content = getHomeContent(lang);
  const keywordString = content.meta.keywords.join(', ');

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: content.meta.title,
      description: content.meta.description,
      keywords: keywordString,
      url: `https://zertech.ma/${lang}`,
      inLanguage: lang,
      about: {
        '@type': 'Thing',
        name: 'IPTV Maroc Premium',
        description:
          'Abonnement IPTV Maroc, meilleur IPTV Maroc, IPTV Premium 4K, serveur IPTV stable, IPTV sans coupure, test IPTV gratuit 24h',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'ZerTech IPTV Premium — Abonnement IPTV Maroc',
      description: content.meta.description,
      keywords: keywordString,
      url: `https://zertech.ma/${lang}`,
      provider: {
        '@type': 'Organization',
        name: 'ZerTech',
        url: 'https://zertech.ma',
        logo: 'https://zertech.ma/icon.png',
        telephone: '+212664140211',
        address: { '@type': 'PostalAddress', addressCountry: 'MA' },
        areaServed: HOME_SEO_CITIES.map((city) => ({ '@type': 'City', name: city })),
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: '634',
          bestRating: '5',
        },
      },
      serviceType: 'Abonnement IPTV Premium',
      offers: content.pricing.packs.map((pack) => ({
        '@type': 'Offer',
        name: pack.name,
        price: pack.price,
        priceCurrency: 'MAD',
        description: `${pack.longDescription} ${pack.features.join(', ')}`,
      })),
      review: content.reviews.items.map((review) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: review.name },
        reviewRating: { '@type': 'Rating', ratingValue: review.rating, bestRating: 5 },
        reviewBody: review.text,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: content.faq.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ];
}
