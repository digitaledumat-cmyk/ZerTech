import type { Lang } from './types';

/**
 * Chaque article = une entrée par langue.
 * Pour ajouter un article : dupliquer le slug avec fr, es et ar dans le tableau ci-dessous.
 */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string[];
  date: string;
  lang: Lang;
  image: string;
}

export const blogPosts: BlogPost[] = [
  // ── Meilleur abonnement IPTV Maroc 2026 ──────────────────────────────────
  {
    id: 'blog-001-fr',
    slug: 'meilleur-abonnement-iptv-maroc-2026',
    lang: 'fr',
    date: '2026-05-15',
    image: '/images/blog/meilleur-abonnement-iptv-maroc-2026.svg',
    title: 'Meilleur abonnement IPTV au Maroc en 2026 : guide complet',
    description:
      'Comparatif des critères essentiels pour choisir un IPTV premium fiable au Maroc : stabilité, 4K UHD, anti-freeze et support.',
    content: [
      'Le marché IPTV au Maroc connaît une croissance exponentielle en 2026. Face à la multitude d\'offres, il est crucial de distinguer les services premium fiables des solutions instables.',
      'ZerTech se distingue par son infrastructure serveur OTT VPS dédiée, garantissant une disponibilité supérieure à 99,9 % même lors des événements sportifs majeurs comme la CAN ou la Ligue des Champions.',
      'Les critères essentiels pour évaluer un abonnement IPTV incluent : le nombre de chaînes et VOD, la qualité vidéo (HD, FHD, 4K UHD), la technologie anti-freeze, le nombre d\'appareils simultanés et la qualité du support client.',
      'Avec plus de 14 500 clients abonnés et un taux de réabonnement de 95 %, ZerTech confirme sa position de leader IPTV premium au Maroc et en Europe.',
    ],
  },
  {
    id: 'blog-001-es',
    slug: 'meilleur-abonnement-iptv-maroc-2026',
    lang: 'es',
    date: '2026-05-15',
    image: '/images/blog/meilleur-abonnement-iptv-maroc-2026.svg',
    title: 'Mejor suscripción IPTV en Marruecos en 2026: guía completa',
    description:
      'Comparativa de criterios esenciales para elegir un IPTV premium fiable en Marruecos.',
    content: [
      'El mercado IPTV en Marruecos experimenta un crecimiento exponencial en 2026. Es crucial distinguir los servicios premium fiables.',
      'ZerTech se distingue por su infraestructura de servidores OTT VPS dedicada, garantizando disponibilidad superior al 99,9%.',
      'Los criterios esenciales incluyen: número de canales y VOD, calidad de video, anti-freeze, dispositivos simultáneos y soporte.',
      'Con más de 14 500 clientes y 95% de renovación, ZerTech confirma su liderazgo IPTV premium.',
    ],
  },
  {
    id: 'blog-001-ar',
    slug: 'meilleur-abonnement-iptv-maroc-2026',
    lang: 'ar',
    date: '2026-05-15',
    image: '/images/blog/meilleur-abonnement-iptv-maroc-2026.svg',
    title: 'أفضل اشتراك IPTV في المغرب 2026: دليل شامل',
    description: 'مقارنة المعايير الأساسية لاختيار IPTV بريميوم موثوق في المغرب.',
    content: [
      'يشهد سوق IPTV في المغرب نمواً كبيراً في 2026. من الضروري التمييز بين الخدمات البريميوم الموثوقة.',
      'تميز ZerTech ببنية خوادم OTT VPS مخصصة، توفر توفراً يتجاوز 99.9%.',
      'المعايير الأساسية: عدد القنوات وVOD، جودة الفيديو، Anti-freeze، الأجهزة المتزامنة والدعم.',
      'مع أكثر من 14 500 عميل و95% تجديد، ZerTech تؤكد ريادتها.',
    ],
  },

  // ── Installation Smart TV ──────────────────────────────────────────────────
  {
    id: 'blog-002-fr',
    slug: 'installer-iptv-smart-tv-samsung-lg',
    lang: 'fr',
    date: '2026-04-28',
    image: '/images/blog/installer-iptv-smart-tv-samsung-lg.svg',
    title: 'Comment installer IPTV sur Smart TV Samsung et LG',
    description:
      'Tutoriel détaillé pour configurer IPTV Smarters Pro sur votre Smart TV en moins de 10 minutes.',
    content: [
      'L\'installation d\'IPTV sur Smart TV Samsung ou LG est simple et ne nécessite aucune compétence technique avancée.',
      'Commencez par ouvrir le Samsung Smart Hub ou le LG Content Store et recherchez « IPTV Smarters Pro ».',
      'Une fois installée, lancez l\'application et sélectionnez « Login with Xtream Codes API ».',
      'Entrez les identifiants fournis par ZerTech via WhatsApp : URL du serveur, nom d\'utilisateur et mot de passe.',
      'Patientez 1 à 2 minutes le temps du chargement des chaînes. Activez l\'EPG pour accéder au guide des programmes.',
    ],
  },
  {
    id: 'blog-002-es',
    slug: 'installer-iptv-smart-tv-samsung-lg',
    lang: 'es',
    date: '2026-04-28',
    image: '/images/blog/installer-iptv-smart-tv-samsung-lg.svg',
    title: 'Cómo instalar IPTV en Smart TV Samsung y LG',
    description:
      'Tutorial detallado para configurar IPTV Smarters Pro en su Smart TV en menos de 10 minutos.',
    content: [
      'La instalación de IPTV en Smart TV Samsung o LG es simple.',
      'Abra Samsung Smart Hub o LG Content Store y busque « IPTV Smarters Pro ».',
      'Seleccione « Login with Xtream Codes API ».',
      'Introduzca las credenciales ZerTech vía WhatsApp.',
      'Espere 1-2 minutos y active el EPG.',
    ],
  },
  {
    id: 'blog-002-ar',
    slug: 'installer-iptv-smart-tv-samsung-lg',
    lang: 'ar',
    date: '2026-04-28',
    image: '/images/blog/installer-iptv-smart-tv-samsung-lg.svg',
    title: 'كيفية تثبيت IPTV على Smart TV Samsung و LG',
    description: 'دليل مفصل لإعداد IPTV Smarters Pro على Smart TV في أقل من 10 دقائق.',
    content: [
      'تثبيت IPTV على Smart TV Samsung أو LG بسيط.',
      'افتح Samsung Smart Hub أو LG Content Store وابحث عن « IPTV Smarters Pro ».',
      'اختر « Login with Xtream Codes API ».',
      'أدخل بيانات ZerTech عبر WhatsApp.',
      'انتظر 1-2 دقيقة وفعّل EPG.',
    ],
  },

  // ── Anti-Freeze 4K UHD ───────────────────────────────────────────────────
  {
    id: 'blog-003-fr',
    slug: 'iptv-4k-uhd-anti-freeze-explication',
    lang: 'fr',
    date: '2026-03-10',
    image: '/images/blog/iptv-4k-uhd-anti-freeze-explication.svg',
    title: 'IPTV 4K UHD et Anti-Freeze : comment ça fonctionne ?',
    description:
      'Découvrez la technologie anti-freeze ZerTech qui garantit un streaming fluide sans buffering, même en 4K UHD.',
    content: [
      'Le buffering est le principal problème rencontré par les utilisateurs IPTV. La technologie anti-freeze de ZerTech résout ce problème de manière intelligente.',
      'Notre système analyse en temps réel la qualité de votre connexion et ajuste automatiquement le débit vidéo pour maintenir une lecture fluide.',
      'La version 2.2, disponible sur le Pack PRO PREMIUM, utilise des serveurs VPS dédiés avec cache intelligent pour réduire la latence à moins de 50 ms.',
      'Résultat : une expérience 4K UHD cristalline, même pendant les matchs à forte audience.',
    ],
  },
  {
    id: 'blog-003-es',
    slug: 'iptv-4k-uhd-anti-freeze-explication',
    lang: 'es',
    date: '2026-03-10',
    image: '/images/blog/iptv-4k-uhd-anti-freeze-explication.svg',
    title: 'IPTV 4K UHD y Anti-Freeze: ¿cómo funciona?',
    description:
      'Descubra la tecnología anti-freeze ZerTech que garantiza streaming fluido sin buffering.',
    content: [
      'El buffering es el principal problema de los usuarios IPTV. Anti-freeze de ZerTech lo resuelve inteligentemente.',
      'El sistema analiza en tiempo real la calidad de conexión y ajusta el bitrate automáticamente.',
      'La versión 2.2 en Pack PRO PREMIUM usa servidores VPS con caché inteligente.',
      'Resultado: experiencia 4K UHD cristalina incluso en partidos de alta audiencia.',
    ],
  },
  {
    id: 'blog-003-ar',
    slug: 'iptv-4k-uhd-anti-freeze-explication',
    lang: 'ar',
    date: '2026-03-10',
    image: '/images/blog/iptv-4k-uhd-anti-freeze-explication.svg',
    title: 'IPTV 4K UHD و Anti-Freeze: كيف يعمل؟',
    description: 'اكتشف تقنية Anti-freeze من ZerTech التي تضمن بثاً سلساً بدون buffering.',
    content: [
      'Buffering هو المشكلة الرئيسية. Anti-freeze من ZerTech يحلها بذكاء.',
      'يحلل النظام جودة الاتصال في الوقت الفعلي ويعدل bitrate تلقائياً.',
      'الإصدار 2.2 في Pack PRO PREMIUM يستخدم خوادم VPS مع cache ذكي.',
      'النتيجة: تجربة 4K UHD بلورية حتى في المباريات عالية المشاهدة.',
    ],
  },
];

/** Récupère un article par slug. */
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug && post.lang === 'fr');
}

/** Liste les articles disponibles. */
export function getBlogPosts(): BlogPost[] {
  return blogPosts
    .filter((post) => post.lang === 'fr')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** Params statiques pour generateStaticParams. */
export function getBlogStaticParams(): { slug: string }[] {
  return getUniqueBlogSlugs().map((slug) => ({ slug }));
}

/** Slugs uniques (utile pour le sitemap). */
export function getUniqueBlogSlugs(): string[] {
  return [...new Set(blogPosts.map((post) => post.slug))];
}

/** Estimation du temps de lecture en minutes. */
export function getReadTime(post: BlogPost): number {
  const words = post.content.join(' ').split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
