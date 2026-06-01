import type { Lang, Translations } from './types';

const sharedPacks = {
  pro: {
    id: 'pro',
    price: '250',
    features: {
      fr: ['+20 000 chaînes', '+25 000 VOD', 'Serveur Stable', 'HD', 'Anti-freeze', '1 appareil', 'Support 24/7'],
      es: ['+20 000 canales', '+25 000 VOD', 'Servidor Estable', 'HD', 'Anti-freeze', '1 dispositivo', 'Soporte 24/7'],
      ar: ['+20,000 قناة', '+25,000 VOD', 'خادم مستقر', 'HD', 'Anti-freeze', 'جهاز واحد', 'دعم 24/7'],
    },
  },
  proPlus: {
    id: 'pro-plus',
    price: '350',
    features: {
      fr: ['+29 000 chaînes', '+129 000 VOD', 'Serveur OTT', 'FHD', 'Anti-freeze 2.0', '2 appareils', 'Activation application', 'Support 24/7'],
      es: ['+29 000 canales', '+129 000 VOD', 'Servidor OTT', 'FHD', 'Anti-freeze 2.0', '2 dispositivos', 'Activación aplicación', 'Soporte 24/7'],
      ar: ['+29,000 قناة', '+129,000 VOD', 'خادم OTT', 'FHD', 'Anti-freeze 2.0', 'جهازان', 'تفعيل التطبيق', 'دعم 24/7'],
    },
  },
  proPremium: {
    id: 'pro-premium',
    price: '450',
    features: {
      fr: ['+45 000 chaînes', '+180 000 VOD', 'Serveur OTT VPS', '4K UHD', 'Anti-freeze 2.2', '3 appareils', 'Activation PRO', 'Support 24/7'],
      es: ['+45 000 canales', '+180 000 VOD', 'Servidor OTT VPS', '4K UHD', 'Anti-freeze 2.2', '3 dispositivos', 'Activación PRO', 'Soporte 24/7'],
      ar: ['+45,000 قناة', '+180,000 VOD', 'خادم OTT VPS', '4K UHD', 'Anti-freeze 2.2', '3 أجهزة', 'تفعيل PRO', 'دعم 24/7'],
    },
  },
};

const translations: Record<Lang, Translations> = {
  fr: {
    meta: {
      title: 'ZerTech | Meilleur Abonnement IPTV Premium au Maroc & Europe en 4K UHD',
      description:
        'Abonnement IPTV premium au Maroc et en Europe. +45 000 chaînes, 4K UHD, anti-freeze, test gratuit 24h. Casablanca, Rabat, Paris, Madrid.',
    },
    hero: {
      title: 'ZerTech | Meilleur Abonnement IPTV Premium au Maroc & Europe en 4K UHD',
      subtitle:
        'Streaming cristallin, zéro coupure. Profitez du meilleur IPTV premium avec serveurs haute disponibilité au Maroc et en Europe.',
      cta: 'Essai Gratuit 24h',
      imageAlt: 'Illustration futuriste IPTV premium ZerTech 4K UHD',
    },
    benefits: {
      title: 'Pourquoi choisir ZerTech ?',
      items: [
        'Stabilité absolue',
        'Anti-freeze intelligent',
        'Serveurs sécurisés',
        'Support instantané',
      ],
    },
    stats: {
      subscribers: 'Clients Abonnés',
      online: 'Clients en Ligne Actuellement',
      renewal: 'Taux de réabonnement',
    },
    pricing: {
      title: 'Nos Packs Premium',
      guarantee: 'Garantie 45 jours satisfait ou remboursé totalement',
      popular: 'Populaire',
      packs: [
        {
          id: sharedPacks.pro.id,
          name: 'Pack PRO',
          price: sharedPacks.pro.price,
          currency: 'DHS',
          features: sharedPacks.pro.features.fr,
        },
        {
          id: sharedPacks.proPlus.id,
          name: 'Pack PRO+',
          price: sharedPacks.proPlus.price,
          currency: 'DHS',
          features: sharedPacks.proPlus.features.fr,
          highlighted: true,
        },
        {
          id: sharedPacks.proPremium.id,
          name: 'Pack PRO PREMIUM',
          price: sharedPacks.proPremium.price,
          currency: 'DHS',
          features: sharedPacks.proPremium.features.fr,
        },
      ],
      cta: 'Choisir ce pack',
    },
    trial: {
      title: 'Test Gratuit 24h',
      subtitle: 'Remplissez le formulaire et recevez votre accès via WhatsApp en quelques minutes.',
      firstName: 'Prénom',
      lastName: 'Nom',
      phone: 'Numéro de téléphone',
      pack: 'Abonnement souhaité',
      packPlaceholder: 'Sélectionnez un pack',
      submit: 'Demander via WhatsApp',
      whatsappIntro: 'Bonjour ZerTech, je souhaite un test gratuit 24h.',
    },
    reviews: {
      title: 'Avis Clients',
      score: '634 avis',
      reviewsCount: '634 avis de 5 étoiles',
      items: [
        {
          name: 'Karim B.',
          city: 'Casablanca',
          country: 'Maroc',
          text: 'Service impeccable, aucune coupure pendant la CAN. Le support WhatsApp répond en moins de 5 minutes.',
          rating: 5,
        },
        {
          name: 'Youssef M.',
          city: 'Rabat',
          country: 'Maroc',
          text: 'Meilleur IPTV au Maroc. Image 4K fluide sur ma Smart TV Samsung. Je recommande le Pack PRO+.',
          rating: 5,
        },
        {
          name: 'Carlos R.',
          city: 'Madrid',
          country: 'Espagne',
          text: 'Excelente calidad de imagen en FHD. Todas las ligas españolas y canales internacionales sin cortes.',
          rating: 5,
        },
        {
          name: 'Ana G.',
          city: 'Barcelone',
          country: 'Espagne',
          text: 'Activación rápida y soporte 24/7 en español. Muy contenta con el Pack PRO PREMIUM.',
          rating: 5,
        },
        {
          name: 'Thomas L.',
          city: 'Paris',
          country: 'France',
          text: 'IPTV stable même en soirée. L\'anti-freeze fonctionne parfaitement sur Firestick.',
          rating: 5,
        },
        {
          name: 'Sophie D.',
          city: 'Lyon',
          country: 'France',
          text: 'Remboursement effectué sous 48h comme promis. Service sérieux et professionnel.',
          rating: 5,
        },
      ],
    },
    localSeo: {
      title: 'Notre zone de couverture IPTV Haute Disponibilité',
      content:
        'ZerTech déploie une infrastructure IPTV premium à haute disponibilité couvrant l\'ensemble du Maroc — Casablanca, Marrakech, Tanger, Agadir, Rabat, Fès, Oujda et Meknès — ainsi que l\'Europe francophone et ibérique. Que vous soyez à Paris, Marseille ou Lyon en France, ou à Madrid, Barcelone et Valence en Espagne, nos serveurs optimisés garantissent un streaming 4K UHD sans coupure. Notre réseau de serveurs sécurisés avec anti-freeze intelligent assure une latence minimale et une qualité d\'image cristalline, 24 heures sur 24, 7 jours sur 7.',
    },
    installation: {
      title: 'Guide d\'installation',
      items: [
        {
          question: 'Smart TV (Samsung, LG, Sony)',
          answer:
            'Installez l\'application IPTV Smarters Pro ou TiviMate depuis le store de votre TV. Entrez les identifiants reçus par WhatsApp. Sélectionnez le serveur recommandé et profitez du streaming HD/4K.',
        },
        {
          question: 'Android (Smartphone & Box)',
          answer:
            'Téléchargez IPTV Smarters Pro ou TiviMate depuis le Play Store. Ajoutez votre abonnement via login/mot de passe ou lien M3U. Activez l\'EPG pour le guide des programmes.',
        },
        {
          question: 'Amazon Firestick',
          answer:
            'Activez les sources inconnues dans les paramètres. Installez Downloader, puis IPTV Smarters Pro. Connectez-vous avec vos identifiants ZerTech. L\'anti-freeze est activé par défaut.',
        },
        {
          question: 'iOS (iPhone & iPad)',
          answer:
            'Téléchargez GSE Smart IPTV ou IPTV Smarters Pro depuis l\'App Store. Ajoutez votre playlist via Xtream Codes API avec les identifiants fournis par notre équipe.',
        },
      ],
    },
    faq: {
      title: 'Questions Fréquentes',
      items: [
        {
          question: 'L\'IPTV ZerTech est-il stable pendant les grands événements sportifs ?',
          answer:
            'Oui. Nos serveurs OTT VPS avec anti-freeze 2.2 sont dimensionnés pour absorber les pics d\'audience. Le taux de réabonnement de 95 % témoigne de notre fiabilité.',
        },
        {
          question: 'Comment activer mon abonnement après paiement ?',
          answer:
            'L\'activation est instantanée. Vous recevez vos identifiants par WhatsApp en moins de 10 minutes. Notre équipe vous guide pas à pas pour l\'installation sur votre appareil.',
        },
        {
          question: 'Proposez-vous un remboursement ?',
          answer:
            'Absolument. Garantie 45 jours satisfait ou remboursé totalement. Contactez-nous via WhatsApp et le remboursement est effectué sous 48 heures.',
        },
        {
          question: 'Combien d\'appareils puis-je connecter simultanément ?',
          answer:
            'Cela dépend du pack : 1 appareil (PRO), 2 appareils (PRO+), 3 appareils (PRO PREMIUM). Chaque connexion bénéficie du même niveau de qualité et d\'anti-freeze.',
        },
      ],
    },
    nav: {
      trial: 'Essai Gratuit',
      pricing: 'Tarifs',
      guide: 'Installation',
      faq: 'FAQ',
      contact: 'Contact',
    },
  },

  es: {
    meta: {
      title: 'ZerTech | Mejor Suscripción IPTV Premium en Marruecos y Europa en 4K UHD',
      description:
        'Suscripción IPTV premium en Marruecos y Europa. +45 000 canales, 4K UHD, anti-freeze, prueba gratis 24h. Madrid, Barcelona, Casablanca.',
    },
    hero: {
      title: 'ZerTech | Mejor Suscripción IPTV Premium en Marruecos y Europa en 4K UHD',
      subtitle:
        'Streaming cristalino, cero cortes. Disfruta del mejor IPTV premium con servidores de alta disponibilidad en Marruecos y Europa.',
      cta: 'Prueba Gratis 24h',
      imageAlt: 'Ilustración futurista IPTV premium ZerTech 4K UHD',
    },
    benefits: {
      title: '¿Por qué elegir ZerTech?',
      items: [
        'Estabilidad absoluta',
        'Anti-freeze inteligente',
        'Servidores seguros',
        'Soporte instantáneo',
      ],
    },
    stats: {
      subscribers: 'Clientes Suscritos',
      online: 'Clientes En Línea Ahora',
      renewal: 'Tasa de renovación',
    },
    pricing: {
      title: 'Nuestros Packs Premium',
      guarantee: 'Garantía 45 días satisfecho o reembolso total',
      popular: 'Popular',
      packs: [
        {
          id: sharedPacks.pro.id,
          name: 'Pack PRO',
          price: sharedPacks.pro.price,
          currency: 'DHS',
          features: sharedPacks.pro.features.es,
        },
        {
          id: sharedPacks.proPlus.id,
          name: 'Pack PRO+',
          price: sharedPacks.proPlus.price,
          currency: 'DHS',
          features: sharedPacks.proPlus.features.es,
          highlighted: true,
        },
        {
          id: sharedPacks.proPremium.id,
          name: 'Pack PRO PREMIUM',
          price: sharedPacks.proPremium.price,
          currency: 'DHS',
          features: sharedPacks.proPremium.features.es,
        },
      ],
      cta: 'Elegir este pack',
    },
    trial: {
      title: 'Prueba Gratis 24h',
      subtitle: 'Complete el formulario y reciba su acceso por WhatsApp en minutos.',
      firstName: 'Nombre',
      lastName: 'Apellido',
      phone: 'Número de teléfono',
      pack: 'Suscripción deseada',
      packPlaceholder: 'Seleccione un pack',
      submit: 'Solicitar por WhatsApp',
      whatsappIntro: 'Hola ZerTech, deseo una prueba gratis de 24h.',
    },
    reviews: {
      title: 'Opiniones de Clientes',
      score: '634 opiniones',
      reviewsCount: '634 opiniones de 5 estrellas',
      items: [
        {
          name: 'Karim B.',
          city: 'Casablanca',
          country: 'Marruecos',
          text: 'Servicio impecable, sin cortes durante la CAN. El soporte WhatsApp responde en menos de 5 minutos.',
          rating: 5,
        },
        {
          name: 'Youssef M.',
          city: 'Rabat',
          country: 'Marruecos',
          text: 'Mejor IPTV en Marruecos. Imagen 4K fluida en mi Smart TV Samsung. Recomiendo el Pack PRO+.',
          rating: 5,
        },
        {
          name: 'Carlos R.',
          city: 'Madrid',
          country: 'España',
          text: 'Excelente calidad de imagen en FHD. Todas las ligas españolas y canales internacionales sin cortes.',
          rating: 5,
        },
        {
          name: 'Ana G.',
          city: 'Barcelona',
          country: 'España',
          text: 'Activación rápida y soporte 24/7 en español. Muy contenta con el Pack PRO PREMIUM.',
          rating: 5,
        },
        {
          name: 'Thomas L.',
          city: 'París',
          country: 'Francia',
          text: 'IPTV estable incluso por la noche. El anti-freeze funciona perfectamente en Firestick.',
          rating: 5,
        },
        {
          name: 'Sophie D.',
          city: 'Lyon',
          country: 'Francia',
          text: 'Reembolso efectuado en 48h como prometido. Servicio serio y profesional.',
          rating: 5,
        },
      ],
    },
    localSeo: {
      title: 'Nuestra zona de cobertura IPTV de Alta Disponibilidad',
      content:
        'ZerTech despliega una infraestructura IPTV premium de alta disponibilidad que cubre todo Marruecos — Casablanca, Marrakech, Tánger, Agadir, Rabat, Fez, Oujda y Meknes — así como Europa francófona e ibérica. Ya sea en París, Marsella o Lyon en Francia, o en Madrid, Barcelona y Valencia en España, nuestros servidores optimizados garantizan streaming 4K UHD sin interrupciones. Nuestra red de servidores seguros con anti-freeze inteligente asegura latencia mínima e imagen cristalina, 24 horas al día, 7 días a la semana.',
    },
    installation: {
      title: 'Guía de instalación',
      items: [
        {
          question: 'Smart TV (Samsung, LG, Sony)',
          answer:
            'Instale la aplicación IPTV Smarters Pro o TiviMate desde la tienda de su TV. Introduzca las credenciales recibidas por WhatsApp. Seleccione el servidor recomendado y disfrute del streaming HD/4K.',
        },
        {
          question: 'Android (Smartphone y Box)',
          answer:
            'Descargue IPTV Smarters Pro o TiviMate desde Play Store. Añada su suscripción vía login/contraseña o enlace M3U. Active el EPG para la guía de programas.',
        },
        {
          question: 'Amazon Firestick',
          answer:
            'Active fuentes desconocidas en ajustes. Instale Downloader, luego IPTV Smarters Pro. Conéctese con sus credenciales ZerTech. El anti-freeze está activado por defecto.',
        },
        {
          question: 'iOS (iPhone y iPad)',
          answer:
            'Descargue GSE Smart IPTV o IPTV Smarters Pro desde App Store. Añada su playlist vía Xtream Codes API con las credenciales proporcionadas por nuestro equipo.',
        },
      ],
    },
    faq: {
      title: 'Preguntas Frecuentes',
      items: [
        {
          question: '¿Es estable el IPTV ZerTech durante grandes eventos deportivos?',
          answer:
            'Sí. Nuestros servidores OTT VPS con anti-freeze 2.2 están dimensionados para absorber picos de audiencia. La tasa de renovación del 95% demuestra nuestra fiabilidad.',
        },
        {
          question: '¿Cómo activo mi suscripción tras el pago?',
          answer:
            'La activación es instantánea. Recibe sus credenciales por WhatsApp en menos de 10 minutos. Nuestro equipo le guía paso a paso para la instalación en su dispositivo.',
        },
        {
          question: '¿Ofrecen reembolso?',
          answer:
            'Por supuesto. Garantía 45 días satisfecho o reembolso total. Contáctenos por WhatsApp y el reembolso se efectúa en 48 horas.',
        },
        {
          question: '¿Cuántos dispositivos puedo conectar simultáneamente?',
          answer:
            'Depende del pack: 1 dispositivo (PRO), 2 dispositivos (PRO+), 3 dispositivos (PRO PREMIUM). Cada conexión disfruta del mismo nivel de calidad y anti-freeze.',
        },
      ],
    },
    nav: {
      trial: 'Prueba Gratis',
      pricing: 'Precios',
      guide: 'Instalación',
      faq: 'FAQ',
      contact: 'Contacto',
    },
  },

  ar: {
    meta: {
      title: 'ZerTech | أفضل اشتراك IPTV بريميوم في المغرب وأوروبا بدقة 4K UHD',
      description:
        'اشتراك IPTV بريميوم في المغرب وأوروبا. +45,000 قناة، 4K UHD، anti-freeze، تجربة مجانية 24 ساعة. الدار البيضاء، الرباط، باريس، مدريد.',
    },
    hero: {
      title: 'ZerTech | أفضل اشتراك IPTV بريميوم في المغرب وأوروبا بدقة 4K UHD',
      subtitle:
        'بث بلوري بدون انقطاع. استمتع بأفضل IPTV بريميوم مع خوادم عالية التوفر في المغرب وأوروبا.',
      cta: 'تجربة مجانية 24 ساعة',
      imageAlt: 'رسم توضيحي مستقبلي IPTV بريميوم ZerTech 4K UHD',
    },
    benefits: {
      title: 'لماذا تختار ZerTech؟',
      items: [
        'استقرار مطلق',
        'Anti-freeze ذكي',
        'خوادم آمنة',
        'دعم فوري',
      ],
    },
    stats: {
      subscribers: 'عملاء مشتركون',
      online: 'عملاء متصلون حالياً',
      renewal: 'معدل التجديد',
    },
    pricing: {
      title: 'باقاتنا البريميوم',
      guarantee: 'ضمان 45 يوماً راضٍ أو استرداد كامل',
      popular: 'الأكثر شعبية',
      packs: [
        {
          id: sharedPacks.pro.id,
          name: 'Pack PRO',
          price: sharedPacks.pro.price,
          currency: 'DHS',
          features: sharedPacks.pro.features.ar,
        },
        {
          id: sharedPacks.proPlus.id,
          name: 'Pack PRO+',
          price: sharedPacks.proPlus.price,
          currency: 'DHS',
          features: sharedPacks.proPlus.features.ar,
          highlighted: true,
        },
        {
          id: sharedPacks.proPremium.id,
          name: 'Pack PRO PREMIUM',
          price: sharedPacks.proPremium.price,
          currency: 'DHS',
          features: sharedPacks.proPremium.features.ar,
        },
      ],
      cta: 'اختر هذه الباقة',
    },
    trial: {
      title: 'تجربة مجانية 24 ساعة',
      subtitle: 'املأ النموذج واستلم وصولك عبر WhatsApp في دقائق.',
      firstName: 'الاسم الأول',
      lastName: 'اسم العائلة',
      phone: 'رقم الهاتف',
      pack: 'الاشتراك المطلوب',
      packPlaceholder: 'اختر باقة',
      submit: 'طلب عبر WhatsApp',
      whatsappIntro: 'مرحباً ZerTech، أرغب في تجربة مجانية لمدة 24 ساعة.',
    },
    reviews: {
      title: 'آراء العملاء',
      score: '634 تقييم',
      reviewsCount: '634 تقييم بـ 5 نجوم',
      items: [
        {
          name: 'Karim B.',
          city: 'الدار البيضاء',
          country: 'المغرب',
          text: 'خدمة ممتازة، بدون انقطاع أثناء كأس أمم إفريقيا. الدعم عبر WhatsApp يرد في أقل من 5 دقائق.',
          rating: 5,
        },
        {
          name: 'Youssef M.',
          city: 'الرباط',
          country: 'المغرب',
          text: 'أفضل IPTV في المغرب. صورة 4K سلسة على Smart TV Samsung. أنصح بـ Pack PRO+.',
          rating: 5,
        },
        {
          name: 'Carlos R.',
          city: 'مدريد',
          country: 'إسبانيا',
          text: 'جودة صورة ممتازة بدقة FHD. جميع الدوريات الإسبانية والقنوات الدولية بدون انقطاع.',
          rating: 5,
        },
        {
          name: 'Ana G.',
          city: 'برشلونة',
          country: 'إسبانيا',
          text: 'تفعيل سريع ودعم 24/7 بالإسبانية. سعيدة جداً بـ Pack PRO PREMIUM.',
          rating: 5,
        },
        {
          name: 'Thomas L.',
          city: 'باريس',
          country: 'فرنسا',
          text: 'IPTV مستقر حتى في المساء. Anti-freeze يعمل بشكل مثالي على Firestick.',
          rating: 5,
        },
        {
          name: 'Sophie D.',
          city: 'ليون',
          country: 'فرنسا',
          text: 'استرداد المبلغ خلال 48 ساعة كما وُعد. خدمة جادة ومهنية.',
          rating: 5,
        },
      ],
    },
    localSeo: {
      title: 'منطقة تغطيتنا IPTV عالية التوفر',
      content:
        'تُوفّر ZerTech بنية IPTV بريميوم عالية التوفر تغطي المغرب بالكامل — الدار البيضاء، مراكش، طنجة، أكادير، الرباط، فاس، وجدة ومكناس — بالإضافة إلى أوروبا الناطقة بالفرنسية والإسبانية. سواء كنت في باريس أو مرسيليا أو ليون في فرنسا، أو في مدريد أو برشلونة أو فالنسia في إسبانيا، تضمن خوادمنا المحسّنة بث 4K UHD بدون انقطاع. شبكة خوادمنا الآمنة مع Anti-freeze الذكي تضمن أقل زمن استجابة وجودة صورة بلورية، 24 ساعة في اليوم، 7 أيام في الأسبوع.',
    },
    installation: {
      title: 'دليل التثبيت',
      items: [
        {
          question: 'Smart TV (Samsung, LG, Sony)',
          answer:
            'ثبّت تطبيق IPTV Smarters Pro أو TiviMate من متجر التلفاز. أدخل بيانات الدخول المستلمة عبر WhatsApp. اختر الخادم الموصى به واستمتع بالبث HD/4K.',
        },
        {
          question: 'Android (هاتف وBox)',
          answer:
            'حمّل IPTV Smarters Pro أو TiviMate من Play Store. أضف اشتراكك عبر login/كلمة المرور أو رابط M3U. فعّل EPG لدليل البرامج.',
        },
        {
          question: 'Amazon Firestick',
          answer:
            'فعّل المصادر غير المعروفة في الإعدادات. ثبّت Downloader ثم IPTV Smarters Pro. اتصل ببيانات ZerTech. Anti-freeze مفعّل افتراضياً.',
        },
        {
          question: 'iOS (iPhone و iPad)',
          answer:
            'حمّل GSE Smart IPTV أو IPTV Smarters Pro من App Store. أضف قائمة التشغيل عبر Xtream Codes API بالبيانات المقدمة من فريقنا.',
        },
      ],
    },
    faq: {
      title: 'الأسئلة الشائعة',
      items: [
        {
          question: 'هل IPTV ZerTech مستقر أثناء الأحداث الرياضية الكبرى؟',
          answer:
            'نعم. خوادم OTT VPS مع Anti-freeze 2.2 مصممة لاستيعاب ذروة المشاهدة. معدل التجديد 95% يثبت موثوقيتنا.',
        },
        {
          question: 'كيف أفعّل اشتراكي بعد الدفع؟',
          answer:
            'التفعيل فوري. تستلم بيانات الدخول عبر WhatsApp في أقل من 10 دقائق. يرشدك فريقنا خطوة بخطوة لتثبيت التطبيق على جهازك.',
        },
        {
          question: 'هل تقدمون استرداداً؟',
          answer:
            'بالتأكيد. ضمان 45 يوماً راضٍ أو استرداد كامل. تواصل معنا عبر WhatsApp ويُسترد المبلغ خلال 48 ساعة.',
        },
        {
          question: 'كم جهازاً يمكنني توصيله في آن واحد؟',
          answer:
            'يعتمد على الباقة: جهاز واحد (PRO)، جهازان (PRO+)، 3 أجهزة (PRO PREMIUM). كل اتصال يستفيد من نفس مستوى الجودة وAnti-freeze.',
        },
      ],
    },
    nav: {
      trial: 'تجربة مجانية',
      pricing: 'الأسعار',
      guide: 'التثبيت',
      faq: 'FAQ',
      contact: 'اتصل بنا',
    },
  },
};

export const DEFAULT_COUNTRY = { code: '+212', label: '🇲🇦 +212' };

export function getSiteTranslations(): Translations {
  return translations.fr;
}

export const LOCAL_SEO_CITIES = [
  'Casablanca', 'Marrakech', 'Tanger', 'Agadir', 'Rabat', 'Fès', 'Oujda', 'Meknès',
  'Paris', 'Marseille', 'Lyon', 'Madrid', 'Barcelone', 'Valence',
];

export const WHATSAPP_NUMBER = '212664140211';

export const COUNTRY_CODES: Record<Lang, { code: string; label: string }> = {
  fr: { code: '+212', label: '🇲🇦 +212' },
  es: { code: '+34', label: '🇪🇸 +34' },
  ar: { code: '+212', label: '🇲🇦 +212' },
};

export const EXTRA_COUNTRY_CODES = [
  { code: '+212', label: '🇲🇦 Maroc +212' },
  { code: '+33', label: '🇫🇷 France +33' },
  { code: '+34', label: '🇪🇸 Espagne +34' },
  { code: '+32', label: '🇧🇪 Belgique +32' },
  { code: '+41', label: '🇨🇭 Suisse +41' },
  { code: '+1', label: '🇺🇸 USA/CA +1' },
];
