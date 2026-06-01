import type { Lang } from './types';
import type { AccordionItem } from './types';

export interface PageContent {
  title: string;
  description: string;
}

export interface AbonnementContent extends PageContent {
  intro: string;
  features: string[];
  cta: string;
}

export interface GuideContent extends PageContent {
  intro: string;
  tips: string[];
  items: AccordionItem[];
}

export interface FaqPageContent extends PageContent {
  intro: string;
  items: AccordionItem[];
}

export interface ContactContent extends PageContent {
  intro: string;
  coordinates: {
    whatsapp: string;
    email: string;
    support: string;
  };
  form: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    submit: string;
    whatsappIntro: string;
    subjects: string[];
  };
}

export interface BlogContent extends PageContent {
  intro: string;
  readMore: string;
  backToBlog: string;
  published: string;
  category: string;
}

const expandedFaq: Record<Lang, AccordionItem[]> = {
  fr: [
    {
      question: 'L\'IPTV ZerTech est-il stable pendant les grands événements sportifs ?',
      answer: 'Oui. Nos serveurs OTT VPS avec anti-freeze 2.2 sont dimensionnés pour absorber les pics d\'audience. Le taux de réabonnement de 95 % témoigne de notre fiabilité.',
    },
    {
      question: 'Comment activer mon abonnement après paiement ?',
      answer: 'L\'activation est instantanée. Vous recevez vos identifiants par WhatsApp en moins de 10 minutes. Notre équipe vous guide pas à pas pour l\'installation sur votre appareil.',
    },
    {
      question: 'Proposez-vous un remboursement ?',
      answer: 'Absolument. Garantie 45 jours satisfait ou remboursé totalement. Contactez-nous via WhatsApp et le remboursement est effectué sous 48 heures.',
    },
    {
      question: 'Combien d\'appareils puis-je connecter simultanément ?',
      answer: 'Cela dépend du pack : 1 appareil (PRO), 2 appareils (PRO+), 3 appareils (PRO PREMIUM).',
    },
    {
      question: 'Quelle vitesse Internet est recommandée ?',
      answer: 'Nous recommandons minimum 15 Mbps pour le HD, 25 Mbps pour le FHD et 50 Mbps pour le 4K UHD. Une connexion filaire Ethernet est préférable pour une stabilité optimale.',
    },
    {
      question: 'Puis-je utiliser un VPN avec ZerTech ?',
      answer: 'L\'utilisation d\'un VPN n\'est pas nécessaire. Nos serveurs sont optimisés pour une connexion directe et stable. Un VPN peut même dégrader les performances.',
    },
    {
      question: 'Le test gratuit de 24h est-il vraiment sans engagement ?',
      answer: 'Oui, le test gratuit de 24 heures ne nécessite aucun paiement. Vous recevez un accès complet pour évaluer la qualité du service avant tout achat.',
    },
    {
      question: 'Comment contacter le support technique ?',
      answer: 'Notre support est disponible 24h/24 et 7j/7 via WhatsApp au +212 664 140 211. Temps de réponse moyen : moins de 5 minutes.',
    },
  ],
  es: [
    {
      question: '¿Es estable el IPTV ZerTech durante grandes eventos deportivos?',
      answer: 'Sí. Nuestros servidores OTT VPS con anti-freeze 2.2 están dimensionados para absorber picos de audiencia. La tasa de renovación del 95% demuestra nuestra fiabilidad.',
    },
    {
      question: '¿Cómo activo mi suscripción tras el pago?',
      answer: 'La activación es instantánea. Recibe sus credenciales por WhatsApp en menos de 10 minutos.',
    },
    {
      question: '¿Ofrecen reembolso?',
      answer: 'Por supuesto. Garantía 45 días satisfecho o reembolso total. Reembolso en 48 horas vía WhatsApp.',
    },
    {
      question: '¿Cuántos dispositivos puedo conectar simultáneamente?',
      answer: 'Depende del pack: 1 dispositivo (PRO), 2 (PRO+), 3 (PRO PREMIUM).',
    },
    {
      question: '¿Qué velocidad de Internet se recomienda?',
      answer: 'Mínimo 15 Mbps para HD, 25 Mbps para FHD y 50 Mbps para 4K UHD. Se recomienda conexión Ethernet.',
    },
    {
      question: '¿Puedo usar una VPN con ZerTech?',
      answer: 'No es necesario. Un VPN puede degradar el rendimiento de streaming.',
    },
    {
      question: '¿La prueba gratuita de 24h es sin compromiso?',
      answer: 'Sí, sin pago ni compromiso. Acceso completo para evaluar el servicio.',
    },
    {
      question: '¿Cómo contactar al soporte técnico?',
      answer: 'Soporte 24/7 vía WhatsApp al +212 664 140 211. Respuesta media: menos de 5 minutos.',
    },
  ],
  ar: [
    {
      question: 'هل IPTV ZerTech مستقر أثناء الأحداث الرياضية الكبرى؟',
      answer: 'نعم. خوادم OTT VPS مع Anti-freeze 2.2 مصممة لاستيعاب ذروة المشاهدة. معدل التجديد 95%.',
    },
    {
      question: 'كيف أفعّل اشتراكي بعد الدفع؟',
      answer: 'التفعيل فوري. تستلم بيانات الدخول عبر WhatsApp في أقل من 10 دقائق.',
    },
    {
      question: 'هل تقدمون استرداداً؟',
      answer: 'بالتأكيد. ضمان 45 يوماً راضٍ أو استرداد كامل خلال 48 ساعة.',
    },
    {
      question: 'كم جهازاً يمكنني توصيله في آن واحد؟',
      answer: 'PRO: جهاز واحد، PRO+: جهازان، PRO PREMIUM: 3 أجهزة.',
    },
    {
      question: 'ما سرعة الإنترنت الموصى بها؟',
      answer: '15 Mbps للـ HD، 25 Mbps للـ FHD، 50 Mbps للـ 4K UHD. يُفضل Ethernet.',
    },
    {
      question: 'هل يمكنني استخدام VPN؟',
      answer: 'غير ضروري. VPN قد يقلل أداء البث.',
    },
    {
      question: 'هل التجربة المجانية 24 ساعة بدون التزام؟',
      answer: 'نعم، بدون دفع. وصول كامل لتقييم الخدمة.',
    },
    {
      question: 'كيف أتواصل مع الدعم الفني؟',
      answer: 'دعم 24/7 عبر WhatsApp: +212 664 140 211. متوسط الرد: أقل من 5 دقائق.',
    },
  ],
};

const expandedGuide: Record<Lang, { intro: string; tips: string[]; items: AccordionItem[] }> = {
  fr: {
    intro: 'Suivez nos tutoriels pas à pas pour configurer ZerTech IPTV sur tous vos appareils. L\'activation prend moins de 10 minutes avec l\'assistance de notre équipe.',
    tips: [
      'Vérifiez votre connexion Internet (minimum 15 Mbps pour HD)',
      'Utilisez de préférence une connexion Ethernet pour Smart TV',
      'Conservez vos identifiants reçus par WhatsApp',
      'Contactez le support en cas de difficulté — réponse en 5 min',
    ],
    items: [
      {
        question: 'Smart TV (Samsung, LG, Sony)',
        answer: '1. Ouvrez le store d\'applications de votre TV.\n2. Recherchez et installez « IPTV Smarters Pro » ou « TiviMate ».\n3. Lancez l\'application et choisissez « Login with Xtream Codes API ».\n4. Entrez l\'URL du serveur, le nom d\'utilisateur et le mot de passe reçus par WhatsApp.\n5. Attendez le chargement des chaînes (1-2 min) et profitez du streaming HD/4K.',
      },
      {
        question: 'Android (Smartphone, Tablette & Box TV)',
        answer: '1. Téléchargez IPTV Smarters Pro ou TiviMate depuis le Google Play Store.\n2. Ouvrez l\'app et sélectionnez « Add User » via Xtream Codes.\n3. Saisissez vos identifiants ZerTech.\n4. Activez l\'EPG (guide des programmes) dans les paramètres.\n5. Pour Android Box : utilisez une télécommande ou une souris sans fil.',
      },
      {
        question: 'Amazon Firestick / Fire TV',
        answer: '1. Allez dans Paramètres > Ma Fire TV > Options pour les développeurs.\n2. Activez « Sources d\'applications inconnues ».\n3. Installez l\'application « Downloader » depuis l\'Amazon Store.\n4. Via Downloader, installez IPTV Smarters Pro (APK officiel).\n5. Connectez-vous avec vos identifiants ZerTech. L\'anti-freeze est activé par défaut.',
      },
      {
        question: 'iOS (iPhone & iPad)',
        answer: '1. Téléchargez « GSE Smart IPTV » ou « IPTV Smarters Pro » depuis l\'App Store.\n2. Ouvrez l\'application et ajoutez une playlist via Xtream Codes API.\n3. Entrez l\'URL du serveur, login et mot de passe fournis par ZerTech.\n4. Patientez pendant la synchronisation des chaînes.\n5. Personnalisez l\'interface dans les réglages de l\'app.',
      },
    ],
  },
  es: {
    intro: 'Siga nuestros tutoriales paso a paso para configurar ZerTech IPTV en todos sus dispositivos. La activación toma menos de 10 minutos con asistencia de nuestro equipo.',
    tips: [
      'Verifique su conexión a Internet (mínimo 15 Mbps para HD)',
      'Use preferiblemente conexión Ethernet para Smart TV',
      'Conserve sus credenciales recibidas por WhatsApp',
      'Contacte soporte en caso de dificultad — respuesta en 5 min',
    ],
    items: [
      {
        question: 'Smart TV (Samsung, LG, Sony)',
        answer: '1. Abra la tienda de aplicaciones de su TV.\n2. Busque e instale « IPTV Smarters Pro » o « TiviMate ».\n3. Elija « Login with Xtream Codes API ».\n4. Introduzca URL del servidor, usuario y contraseña recibidos por WhatsApp.\n5. Espere la carga de canales (1-2 min) y disfrute del streaming HD/4K.',
      },
      {
        question: 'Android (Smartphone, Tablet y Box TV)',
        answer: '1. Descargue IPTV Smarters Pro o TiviMate desde Google Play Store.\n2. Seleccione « Add User » vía Xtream Codes.\n3. Introduzca sus credenciales ZerTech.\n4. Active el EPG en ajustes.\n5. Para Android Box: use mando a distancia o ratón inalámbrico.',
      },
      {
        question: 'Amazon Firestick / Fire TV',
        answer: '1. Ajustes > Mi Fire TV > Opciones para desarrolladores.\n2. Active « Fuentes de aplicaciones desconocidas ».\n3. Instale « Downloader » desde Amazon Store.\n4. Instale IPTV Smarters Pro vía Downloader.\n5. Conéctese con credenciales ZerTech. Anti-freeze activado por defecto.',
      },
      {
        question: 'iOS (iPhone y iPad)',
        answer: '1. Descargue « GSE Smart IPTV » o « IPTV Smarters Pro » desde App Store.\n2. Añada playlist vía Xtream Codes API.\n3. Introduzca URL, login y contraseña ZerTech.\n4. Espere sincronización de canales.\n5. Personalice la interfaz en ajustes.',
      },
    ],
  },
  ar: {
    intro: 'اتبع دروسنا خطوة بخطوة لإعداد ZerTech IPTV على جميع أجهزتك. التفعيل يستغرق أقل من 10 دقائق بمساعدة فريقنا.',
    tips: [
      'تحقق من اتصال الإنترنت (15 Mbps كحد أدنى للـ HD)',
      'يُفضل Ethernet لـ Smart TV',
      'احتفظ ببيانات الدخول المستلمة عبر WhatsApp',
      'تواصل مع الدعم — رد خلال 5 دقائق',
    ],
    items: [
      {
        question: 'Smart TV (Samsung, LG, Sony)',
        answer: '1. افتح متجر التطبيقات.\n2. ثبّت « IPTV Smarters Pro » أو « TiviMate ».\n3. اختر « Login with Xtream Codes API ».\n4. أدخل URL الخادم واسم المستخدم وكلمة المرور.\n5. انتظر تحميل القنوات (1-2 دقيقة).',
      },
      {
        question: 'Android (هاتف، لوحي وBox TV)',
        answer: '1. حمّل IPTV Smarters Pro من Play Store.\n2. اختر « Add User » عبر Xtream Codes.\n3. أدخل بيانات ZerTech.\n4. فعّل EPG.\n5. لـ Android Box: استخدم ريموت أو فأرة.',
      },
      {
        question: 'Amazon Firestick / Fire TV',
        answer: '1. الإعدادات > خيارات المطور.\n2. فعّل « مصادر غير معروفة ».\n3. ثبّت Downloader.\n4. ثبّت IPTV Smarters Pro.\n5. اتصل ببيانات ZerTech.',
      },
      {
        question: 'iOS (iPhone و iPad)',
        answer: '1. حمّل GSE Smart IPTV من App Store.\n2. أضف playlist عبر Xtream Codes API.\n3. أدخل بيانات ZerTech.\n4. انتظر المزامنة.\n5. خصص الواجهة.',
      },
    ],
  },
};

export function getAbonnementContent(lang: Lang): AbonnementContent {
  const content: Record<Lang, AbonnementContent> = {
    fr: {
      title: 'Abonnement IPTV Premium',
      description: 'Découvrez nos packs IPTV premium 4K UHD pour le Maroc et l\'Europe. Stabilité absolue, anti-freeze intelligent et support 24/7.',
      intro: 'ZerTech propose la meilleure expérience IPTV premium avec plus de 45 000 chaînes, 180 000 VOD et une infrastructure serveur haute disponibilité. Choisissez le pack adapté à vos besoins et profitez d\'un streaming cristallin sans coupure.',
      features: [
        'Activation instantanée via WhatsApp',
        'Serveurs OTT VPS haute performance',
        'Anti-freeze intelligent 2.0 / 2.2',
        'Qualité HD, FHD et 4K UHD',
        'Garantie 45 jours satisfait ou remboursé',
        'Support technique 24h/24, 7j/7',
      ],
      cta: 'Demander un test gratuit 24h',
    },
    es: {
      title: 'Suscripción IPTV Premium',
      description: 'Descubra nuestros packs IPTV premium 4K UHD para Marruecos y Europa. Estabilidad absoluta, anti-freeze inteligente y soporte 24/7.',
      intro: 'ZerTech ofrece la mejor experiencia IPTV premium con más de 45 000 canales, 180 000 VOD e infraestructura de servidores de alta disponibilidad.',
      features: [
        'Activación instantánea vía WhatsApp',
        'Servidores OTT VPS de alto rendimiento',
        'Anti-freeze inteligente 2.0 / 2.2',
        'Calidad HD, FHD y 4K UHD',
        'Garantía 45 días satisfecho o reembolso',
        'Soporte técnico 24/7',
      ],
      cta: 'Solicitar prueba gratis 24h',
    },
    ar: {
      title: 'اشتراك IPTV بريميوم',
      description: 'اكتشف باقات IPTV بريميوم 4K UHD للمغرب وأوروبا. استقرار مطلق، Anti-freeze ذكي ودعم 24/7.',
      intro: 'ZerTech تقدم أفضل تجربة IPTV بريميوم مع أكثر من 45,000 قناة و180,000 VOD وبنية خوادم عالية التوفر.',
      features: [
        'تفعيل فوري عبر WhatsApp',
        'خوادم OTT VPS عالية الأداء',
        'Anti-freeze ذكي 2.0 / 2.2',
        'جودة HD و FHD و 4K UHD',
        'ضمان 45 يوماً راضٍ أو استرداد',
        'دعم فني 24/7',
      ],
      cta: 'طلب تجربة مجانية 24 ساعة',
    },
  };
  return content[lang];
}

export function getGuideContent(lang: Lang): GuideContent {
  const g = expandedGuide[lang];
  const titles: Record<Lang, PageContent> = {
    fr: { title: 'Guide d\'installation complet', description: 'Tutoriels pas à pas pour installer ZerTech IPTV sur Smart TV, Android, Firestick et iOS.' },
    es: { title: 'Guía de instalación completa', description: 'Tutoriales paso a paso para instalar ZerTech IPTV en Smart TV, Android, Firestick e iOS.' },
    ar: { title: 'دليل التثبيت الكامل', description: 'دروس خطوة بخطوة لتثبيت ZerTech IPTV على Smart TV و Android و Firestick و iOS.' },
  };
  return { ...titles[lang], ...g };
}

export function getFaqPageContent(lang: Lang): FaqPageContent {
  const titles: Record<Lang, { title: string; description: string; intro: string }> = {
    fr: {
      title: 'Centre d\'aide & FAQ',
      description: 'Toutes les réponses sur la stabilité, l\'activation, le remboursement et le support ZerTech IPTV.',
      intro: 'Consultez notre FAQ complète ou contactez notre support WhatsApp disponible 24h/24 pour une assistance personnalisée.',
    },
    es: {
      title: 'Centro de ayuda & FAQ',
      description: 'Todas las respuestas sobre estabilidad, activación, reembolso y soporte ZerTech IPTV.',
      intro: 'Consulte nuestra FAQ completa o contacte nuestro soporte WhatsApp 24/7.',
    },
    ar: {
      title: 'مركز المساعدة & FAQ',
      description: 'جميع الإجابات حول الاستقرار والتفعيل والاسترداد ودعم ZerTech IPTV.',
      intro: 'راجع FAQ الكامل أو تواصل مع دعم WhatsApp 24/7.',
    },
  };
  return { ...titles[lang], items: expandedFaq[lang] };
}

export function getContactContent(lang: Lang): ContactContent {
  const content: Record<Lang, ContactContent> = {
    fr: {
      title: 'Contactez-nous',
      description: 'Support ZerTech 24h/24 via WhatsApp, email et formulaire de contact.',
      intro: 'Notre équipe est disponible 24h/24 et 7j/7 pour répondre à toutes vos questions sur l\'abonnement, l\'installation et le support technique.',
      coordinates: {
        whatsapp: '+212 664 140 211',
        email: 'contact@zertech.ma',
        support: 'Support 24h/24, 7j/7',
      },
      form: {
        name: 'Nom complet',
        email: 'Adresse email',
        phone: 'Numéro de téléphone',
        subject: 'Sujet',
        message: 'Votre message',
        submit: 'Envoyer via WhatsApp',
        whatsappIntro: 'Bonjour ZerTech,',
        subjects: ['Demande d\'information', 'Support technique', 'Abonnement & paiement', 'Remboursement', 'Autre'],
      },
    },
    es: {
      title: 'Contáctenos',
      description: 'Soporte ZerTech 24/7 vía WhatsApp, email y formulario de contacto.',
      intro: 'Nuestro equipo está disponible 24/7 para responder todas sus preguntas.',
      coordinates: {
        whatsapp: '+212 664 140 211',
        email: 'contact@zertech.ma',
        support: 'Soporte 24/7',
      },
      form: {
        name: 'Nombre completo',
        email: 'Correo electrónico',
        phone: 'Número de teléfono',
        subject: 'Asunto',
        message: 'Su mensaje',
        submit: 'Enviar por WhatsApp',
        whatsappIntro: 'Hola ZerTech,',
        subjects: ['Información', 'Soporte técnico', 'Suscripción & pago', 'Reembolso', 'Otro'],
      },
    },
    ar: {
      title: 'اتصل بنا',
      description: 'دعم ZerTech 24/7 عبر WhatsApp والبريد الإلكتروني ونموذج الاتصال.',
      intro: 'فريقنا متاح 24/7 للإجابة على جميع أسئلتك.',
      coordinates: {
        whatsapp: '+212 664 140 211',
        email: 'contact@zertech.ma',
        support: 'دعم 24/7',
      },
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        subject: 'الموضوع',
        message: 'رسالتك',
        submit: 'إرسال عبر WhatsApp',
        whatsappIntro: 'مرحباً ZerTech،',
        subjects: ['طلب معلومات', 'دعم فني', 'اشتراك ودفع', 'استرداد', 'أخرى'],
      },
    },
  };
  return content[lang];
}

export function getBlogContent(lang: Lang): BlogContent {
  const content: Record<Lang, BlogContent> = {
    fr: {
      title: 'Blog ZerTech',
      description: 'Articles SEO sur l\'IPTV premium, l\'installation, les comparatifs et les actualités streaming au Maroc et en Europe.',
      intro: 'Guides, tutoriels et analyses pour tirer le meilleur parti de votre abonnement IPTV ZerTech.',
      readMore: 'Lire l\'article',
      backToBlog: 'Retour au blog',
      published: 'Publié le',
      category: 'Catégorie',
    },
    es: {
      title: 'Blog ZerTech',
      description: 'Artículos SEO sobre IPTV premium, instalación, comparativas y actualidades streaming en Marruecos y Europa.',
      intro: 'Guías, tutoriales y análisis para aprovechar al máximo su suscripción IPTV ZerTech.',
      readMore: 'Leer artículo',
      backToBlog: 'Volver al blog',
      published: 'Publicado el',
      category: 'Categoría',
    },
    ar: {
      title: 'مدونة ZerTech',
      description: 'مقالات SEO حول IPTV بريميوم والتثبيت والمقارنات وأخبار البث في المغرب وأوروبا.',
      intro: 'أدلة ودروس وتحليلات للاستفادة القصوى من اشتراك ZerTech IPTV.',
      readMore: 'قراءة المقال',
      backToBlog: 'العودة للمدونة',
      published: 'نُشر في',
      category: 'الفئة',
    },
  };
  return content[lang];
}
