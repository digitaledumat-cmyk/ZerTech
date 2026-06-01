import type { Lang } from './types';
import { ROUTES } from './routes';

/**
 * Architecture des contenus juridiques centralisés.
 * Structure : LEGAL_CONTENT[lang][route] → LegalPageContent
 *
 * Routes disponibles :
 * - mentions-legales, conditions-utilisation, politique-utilisation-acceptable
 * - conformite-rgpd, politique-dmca, politique-confidentialite, remboursement-et-retour
 */

export interface LegalSection {
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface LegalPageContent {
  slug: string;
  meta: { title: string; description: string };
  lastUpdated: string;
  sections: LegalSection[];
}

type LegalSlug =
  | typeof ROUTES.mentionsLegales
  | typeof ROUTES.conditions
  | typeof ROUTES.aup
  | typeof ROUTES.rgpd
  | typeof ROUTES.dmca
  | typeof ROUTES.privacy
  | typeof ROUTES.refund;

const LAST_UPDATED = '2026-06-01';

function buildLegalPages(lang: Lang): Record<LegalSlug, LegalPageContent> {
  const pages: Record<Lang, Record<LegalSlug, LegalPageContent>> = {
    fr: {
      [ROUTES.mentionsLegales]: {
        slug: ROUTES.mentionsLegales,
        meta: {
          title: 'Mentions légales | ZerTech',
          description: 'Informations légales sur l\'éditeur du site ZerTech, hébergement et propriété intellectuelle.',
        },
        lastUpdated: LAST_UPDATED,
        sections: [
          {
            title: 'Éditeur du site',
            paragraphs: [
              'Le site zertech.ma est édité par ZerTech, société spécialisée dans la fourniture de services IPTV premium pour le Maroc et l\'Europe.',
              'Siège social : Maroc. Contact : contact@zertech.ma — WhatsApp : +212 664 140 211.',
            ],
          },
          {
            title: 'Directeur de la publication',
            paragraphs: ['Le directeur de la publication est le représentant légal de ZerTech.'],
          },
          {
            title: 'Hébergement',
            paragraphs: [
              'Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.',
              'Site web : vercel.com',
            ],
          },
          {
            title: 'Propriété intellectuelle',
            paragraphs: [
              'L\'ensemble du contenu du site (textes, images, logos, graphismes) est la propriété exclusive de ZerTech ou de ses partenaires. Toute reproduction, même partielle, est strictement interdite sans autorisation écrite préalable.',
            ],
          },
          {
            title: 'Limitation de responsabilité',
            paragraphs: [
              'ZerTech s\'efforce de fournir des informations exactes et à jour. Toutefois, ZerTech ne saurait garantir l\'exactitude, la complétude ou l\'actualité des informations diffusées sur le site.',
            ],
          },
        ],
      },
      [ROUTES.conditions]: {
        slug: ROUTES.conditions,
        meta: {
          title: 'Conditions d\'utilisation | ZerTech',
          description: 'Conditions générales d\'utilisation du service IPTV ZerTech.',
        },
        lastUpdated: LAST_UPDATED,
        sections: [
          {
            title: 'Objet',
            paragraphs: [
              'Les présentes conditions d\'utilisation régissent l\'accès et l\'utilisation du service IPTV premium proposé par ZerTech via le site zertech.ma.',
              'En souscrivant à un abonnement, l\'utilisateur accepte sans réserve les présentes conditions.',
            ],
          },
          {
            title: 'Description du service',
            paragraphs: [
              'ZerTech fournit un accès à un service de streaming IPTV comprenant des chaînes télévisées et du contenu VOD, accessible via des applications compatibles sur divers appareils.',
            ],
          },
          {
            title: 'Inscription et compte',
            paragraphs: [
              'L\'utilisateur s\'engage à fournir des informations exactes lors de la souscription. Les identifiants de connexion sont personnels et ne doivent pas être partagés au-delà du nombre d\'appareils autorisés par le pack souscrit.',
            ],
          },
          {
            title: 'Paiement',
            paragraphs: [
              'Les tarifs en vigueur sont indiqués sur le site en dirhams marocains (DHS). Le paiement confirme l\'activation de l\'abonnement pour la durée choisie.',
            ],
          },
          {
            title: 'Durée et résiliation',
            paragraphs: [
              'L\'abonnement est conclu pour la durée sélectionnée. L\'utilisateur peut demander la résiliation conformément à notre politique de remboursement (garantie 45 jours).',
            ],
          },
          {
            title: 'Droit applicable',
            paragraphs: [
              'Les présentes conditions sont régies par le droit marocain. Tout litige sera soumis aux tribunaux compétents du Maroc.',
            ],
          },
        ],
      },
      [ROUTES.aup]: {
        slug: ROUTES.aup,
        meta: {
          title: 'Politique d\'utilisation acceptable | ZerTech',
          description: 'Règles d\'utilisation acceptable du service IPTV ZerTech.',
        },
        lastUpdated: LAST_UPDATED,
        sections: [
          {
            title: 'Usage autorisé',
            paragraphs: [
              'Le service ZerTech IPTV est destiné à un usage personnel et privé uniquement, dans le respect du nombre d\'appareils autorisés par votre pack.',
            ],
          },
          {
            title: 'Usages interdits',
            paragraphs: ['Il est strictement interdit de :'],
            list: [
              'Revendre, redistribuer ou partager vos identifiants au-delà des appareils autorisés',
              'Utiliser le service à des fins commerciales sans autorisation',
              'Tenter de contourner les mesures de sécurité ou d\'accéder aux serveurs de manière non autorisée',
              'Utiliser des outils automatisés pour extraire ou copier le contenu',
              'Surcharger intentionnellement les serveurs par un usage abusif',
            ],
          },
          {
            title: 'Sanctions',
            paragraphs: [
              'Tout manquement à cette politique peut entraîner la suspension immédiate du compte sans remboursement, sans préjudice de poursuites judiciaires.',
            ],
          },
        ],
      },
      [ROUTES.rgpd]: {
        slug: ROUTES.rgpd,
        meta: {
          title: 'Conformité RGPD | ZerTech',
          description: 'Politique de conformité au Règlement Général sur la Protection des Données (RGPD).',
        },
        lastUpdated: LAST_UPDATED,
        sections: [
          {
            title: 'Responsable du traitement',
            paragraphs: [
              'ZerTech, contact@zertech.ma, est responsable du traitement des données personnelles collectées via zertech.ma.',
            ],
          },
          {
            title: 'Données collectées',
            paragraphs: ['Nous collectons les données suivantes :'],
            list: [
              'Nom, prénom et numéro de téléphone (formulaires de contact et test gratuit)',
              'Adresse email (formulaire de contact)',
              'Données de navigation (cookies techniques, adresse IP)',
            ],
          },
          {
            title: 'Finalités du traitement',
            paragraphs: [
              'Vos données sont traitées pour : la gestion de votre abonnement, le support client, l\'amélioration de nos services et le respect de nos obligations légales.',
            ],
          },
          {
            title: 'Vos droits',
            paragraphs: [
              'Conformément au RGPD, vous disposez des droits d\'accès, de rectification, d\'effacement, de limitation, de portabilité et d\'opposition. Exercez vos droits à : contact@zertech.ma.',
            ],
          },
          {
            title: 'Conservation',
            paragraphs: [
              'Les données sont conservées pendant la durée de la relation commerciale et jusqu\'à 3 ans après la fin de celle-ci, sauf obligation légale contraire.',
            ],
          },
        ],
      },
      [ROUTES.dmca]: {
        slug: ROUTES.dmca,
        meta: {
          title: 'Politique DMCA | ZerTech',
          description: 'Politique de notification et retrait DMCA de ZerTech.',
        },
        lastUpdated: LAST_UPDATED,
        sections: [
          {
            title: 'Engagement',
            paragraphs: [
              'ZerTech respecte les droits de propriété intellectuelle et répond aux notifications valides de violation de copyright conformément au Digital Millennium Copyright Act (DMCA).',
            ],
          },
          {
            title: 'Agent désigné',
            paragraphs: [
              'Pour toute notification DMCA, contactez notre agent désigné :',
              'Email : abuse@zertech.ma',
              'Objet du message : « Notification DMCA »',
            ],
          },
          {
            title: 'Contenu de la notification',
            paragraphs: ['Votre notification doit inclure :'],
            list: [
              'Identification de l\'œuvre protégée prétendument violée',
              'Identification du contenu litigieux et sa localisation',
              'Vos coordonnées (nom, adresse, téléphone, email)',
              'Une déclaration de bonne foi',
              'Une déclaration sous peine de parjure',
              'Votre signature physique ou électronique',
            ],
          },
          {
            title: 'Contre-notification',
            paragraphs: [
              'Si vous estimez qu\'un contenu a été retiré par erreur, vous pouvez soumettre une contre-notification à abuse@zertech.ma conformément à la procédure DMCA.',
            ],
          },
        ],
      },
      [ROUTES.privacy]: {
        slug: ROUTES.privacy,
        meta: {
          title: 'Politique de confidentialité | ZerTech',
          description: 'Comment ZerTech collecte, utilise et protège vos données personnelles.',
        },
        lastUpdated: LAST_UPDATED,
        sections: [
          {
            title: 'Introduction',
            paragraphs: [
              'ZerTech s\'engage à protéger la vie privée de ses utilisateurs. Cette politique décrit nos pratiques en matière de collecte et de traitement des données.',
            ],
          },
          {
            title: 'Collecte des données',
            paragraphs: [
              'Nous collectons uniquement les données nécessaires à la fourniture de notre service : informations de contact, données d\'abonnement et données techniques de navigation.',
            ],
          },
          {
            title: 'Partage des données',
            paragraphs: [
              'ZerTech ne vend ni ne loue vos données personnelles. Elles peuvent être partagées uniquement avec nos prestataires techniques (hébergement, paiement) dans le cadre strict de la fourniture du service.',
            ],
          },
          {
            title: 'Sécurité',
            paragraphs: [
              'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou destruction.',
            ],
          },
          {
            title: 'Cookies',
            paragraphs: [
              'Le site utilise des cookies techniques essentiels au fonctionnement. Aucun cookie publicitaire tiers n\'est déployé sans votre consentement.',
            ],
          },
          {
            title: 'Contact',
            paragraphs: [
              'Pour toute question relative à la confidentialité : contact@zertech.ma ou WhatsApp +212 664 140 211.',
            ],
          },
        ],
      },
      [ROUTES.refund]: {
        slug: ROUTES.refund,
        meta: {
          title: 'Remboursement et retour | ZerTech',
          description: 'Politique de remboursement ZerTech avec garantie 45 jours satisfait ou remboursé.',
        },
        lastUpdated: LAST_UPDATED,
        sections: [
          {
            title: 'Garantie 45 jours',
            paragraphs: [
              'ZerTech offre une garantie « Satisfait ou remboursé » de 45 jours à compter de la date d\'activation de votre abonnement. Si le service ne répond pas à vos attentes, vous pouvez demander un remboursement intégral.',
            ],
          },
          {
            title: 'Conditions d\'éligibilité',
            paragraphs: ['Le remboursement est accordé si :'],
            list: [
              'La demande est effectuée dans les 45 jours suivant l\'activation',
              'Le service a été utilisé conformément à notre politique d\'utilisation acceptable',
              'Aucune violation des conditions d\'utilisation n\'a été constatée',
            ],
          },
          {
            title: 'Procédure de demande',
            paragraphs: [
              'Contactez notre support via WhatsApp (+212 664 140 211) ou par email (contact@zertech.ma) en indiquant votre nom, numéro de téléphone et motif de la demande.',
              'Notre équipe traite chaque demande sous 48 heures ouvrées.',
            ],
          },
          {
            title: 'Modalités de remboursement',
            paragraphs: [
              'Le remboursement est effectué via le même moyen de paiement utilisé lors de l\'achat, dans un délai maximum de 48 heures après validation de la demande.',
            ],
          },
          {
            title: 'Exclusions',
            paragraphs: [
              'Le test gratuit de 24 heures ne donne lieu à aucun remboursement (aucun paiement n\'étant effectué). Les abonnements résiliés pour violation de la politique d\'utilisation acceptable ne sont pas éligibles.',
            ],
          },
        ],
      },
    },
    es: {
      [ROUTES.mentionsLegales]: {
        slug: ROUTES.mentionsLegales,
        meta: { title: 'Aviso legal | ZerTech', description: 'Información legal sobre el editor del sitio ZerTech.' },
        lastUpdated: LAST_UPDATED,
        sections: [
          { title: 'Editor del sitio', paragraphs: ['El sitio zertech.ma es editado por ZerTech. Contacto: contact@zertech.ma — WhatsApp: +212 664 140 211.'] },
          { title: 'Director de publicación', paragraphs: ['El director de publicación es el representante legal de ZerTech.'] },
          { title: 'Alojamiento', paragraphs: ['Alojado por Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, EE.UU.'] },
          { title: 'Propiedad intelectual', paragraphs: ['Todo el contenido del sitio es propiedad exclusiva de ZerTech. Queda prohibida su reproducción sin autorización.'] },
          { title: 'Limitación de responsabilidad', paragraphs: ['ZerTech no garantiza la exactitud completa de la información publicada en el sitio.'] },
        ],
      },
      [ROUTES.conditions]: {
        slug: ROUTES.conditions,
        meta: { title: 'Condiciones de uso | ZerTech', description: 'Condiciones generales de uso del servicio IPTV ZerTech.' },
        lastUpdated: LAST_UPDATED,
        sections: [
          { title: 'Objeto', paragraphs: ['Estas condiciones regulan el acceso y uso del servicio IPTV premium de ZerTech. Al suscribirse, el usuario acepta estas condiciones.'] },
          { title: 'Descripción del servicio', paragraphs: ['ZerTech proporciona acceso a streaming IPTV con canales de TV y contenido VOD.'] },
          { title: 'Registro y cuenta', paragraphs: ['El usuario debe proporcionar información exacta. Las credenciales son personales y no deben compartirse más allá de los dispositivos autorizados.'] },
          { title: 'Pago', paragraphs: ['Los precios se indican en dirhams marroquíes (DHS). El pago confirma la activación del abonnement.'] },
          { title: 'Duración y resolución', paragraphs: ['El usuario puede solicitar resolución conforme a nuestra política de reembolso (garantía 45 días).'] },
          { title: 'Legislación aplicable', paragraphs: ['Estas condiciones se rigen por la legislación marroquí.'] },
        ],
      },
      [ROUTES.aup]: {
        slug: ROUTES.aup,
        meta: { title: 'Política de uso aceptable | ZerTech', description: 'Reglas de uso aceptable del servicio IPTV ZerTech.' },
        lastUpdated: LAST_UPDATED,
        sections: [
          { title: 'Uso autorizado', paragraphs: ['El servicio ZerTech IPTV es para uso personal y privado únicamente.'] },
          { title: 'Usos prohibidos', paragraphs: ['Está estrictamente prohibido:'], list: ['Revender o redistribuir credenciales', 'Uso comercial sin autorización', 'Eludir medidas de seguridad', 'Usar herramientas automatizadas para extraer contenido', 'Sobrecargar servidores intencionalmente'] },
          { title: 'Sanciones', paragraphs: ['El incumplimiento puede resultar en suspensión inmediata sin reembolso.'] },
        ],
      },
      [ROUTES.rgpd]: {
        slug: ROUTES.rgpd,
        meta: { title: 'Conformidad RGPD | ZerTech', description: 'Política de conformidad con el RGPD.' },
        lastUpdated: LAST_UPDATED,
        sections: [
          { title: 'Responsable del tratamiento', paragraphs: ['ZerTech, contact@zertech.ma, es responsable del tratamiento de datos.'] },
          { title: 'Datos recopilados', paragraphs: ['Recopilamos:'], list: ['Nombre, teléfono (formularios)', 'Email (contacto)', 'Datos de navegación (cookies, IP)'] },
          { title: 'Finalidades', paragraphs: ['Gestión de suscripción, soporte, mejora del servicio y obligaciones legales.'] },
          { title: 'Sus derechos', paragraphs: ['Derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición en contact@zertech.ma.'] },
          { title: 'Conservación', paragraphs: ['Datos conservados durante la relación comercial y hasta 3 años después.'] },
        ],
      },
      [ROUTES.dmca]: {
        slug: ROUTES.dmca,
        meta: { title: 'Política DMCA | ZerTech', description: 'Política de notificación y retirada DMCA.' },
        lastUpdated: LAST_UPDATED,
        sections: [
          { title: 'Compromiso', paragraphs: ['ZerTech respeta los derechos de propiedad intelectual y responde a notificaciones DMCA válidas.'] },
          { title: 'Agente designado', paragraphs: ['Email: abuse@zertech.ma', 'Asunto: « Notificación DMCA »'] },
          { title: 'Contenido de la notificación', paragraphs: ['Debe incluir:'], list: ['Identificación de la obra protegida', 'Identificación del contenido litigioso', 'Sus datos de contacto', 'Declaración de buena fe', 'Declaración bajo pena de perjurio', 'Firma física o electrónica'] },
          { title: 'Contra-notificación', paragraphs: ['Envíe contra-notificación a abuse@zertech.ma conforme al procedimiento DMCA.'] },
        ],
      },
      [ROUTES.privacy]: {
        slug: ROUTES.privacy,
        meta: { title: 'Política de privacidad | ZerTech', description: 'Cómo ZerTech recopila y protege sus datos.' },
        lastUpdated: LAST_UPDATED,
        sections: [
          { title: 'Introducción', paragraphs: ['ZerTech se compromete a proteger la privacidad de sus usuarios.'] },
          { title: 'Recopilación', paragraphs: ['Solo recopilamos datos necesarios: contacto, suscripción y navegación.'] },
          { title: 'Compartición', paragraphs: ['ZerTech no vende sus datos. Solo se comparten con proveedores técnicos.'] },
          { title: 'Seguridad', paragraphs: ['Medidas técnicas y organizativas para proteger sus datos.'] },
          { title: 'Cookies', paragraphs: ['Cookies técnicas esenciales. Sin cookies publicitarias sin consentimiento.'] },
          { title: 'Contacto', paragraphs: ['contact@zertech.ma o WhatsApp +212 664 140 211.'] },
        ],
      },
      [ROUTES.refund]: {
        slug: ROUTES.refund,
        meta: { title: 'Reembolso y devolución | ZerTech', description: 'Política de reembolso con garantía de 45 días.' },
        lastUpdated: LAST_UPDATED,
        sections: [
          { title: 'Garantía de 45 días', paragraphs: ['ZerTech ofrece garantía « Satisfecho o reembolsado » de 45 días desde la activación. Reembolso íntegro si el servicio no cumple sus expectativas.'] },
          { title: 'Condiciones de elegibilidad', paragraphs: ['Reembolso si:'], list: ['Solicitud dentro de 45 días de activación', 'Uso conforme a la política de uso aceptable', 'Sin violación de condiciones'] },
          { title: 'Procedimiento', paragraphs: ['Contacte vía WhatsApp (+212 664 140 211) o email (contact@zertech.ma) con nombre, teléfono y motivo. Tramitación en 48 horas.'] },
          { title: 'Modalidades', paragraphs: ['Reembolso por el mismo medio de pago en máximo 48 horas tras validación.'] },
          { title: 'Exclusiones', paragraphs: ['La prueba gratis de 24h no da derecho a reembolso. Suscripciones canceladas por violación no son elegibles.'] },
        ],
      },
    },
    ar: {
      [ROUTES.mentionsLegales]: {
        slug: ROUTES.mentionsLegales,
        meta: { title: 'إشعار قانوني | ZerTech', description: 'معلومات قانونية عن ناشر موقع ZerTech.' },
        lastUpdated: LAST_UPDATED,
        sections: [
          { title: 'ناشر الموقع', paragraphs: ['موقع zertech.ma منشور من ZerTech. اتصل: contact@zertech.ma — WhatsApp: +212 664 140 211.'] },
          { title: 'مدير النشر', paragraphs: ['مدير النشر هو الممثل القانوني لـ ZerTech.'] },
          { title: 'الاستضافة', paragraphs: ['مستضاف على Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.'] },
          { title: 'الملكية الفكرية', paragraphs: ['جميع محتويات الموقع ملك حصري لـ ZerTech. يُمنع النسخ بدون إذن.'] },
          { title: 'تحديد المسؤولية', paragraphs: ['ZerTech لا تضمن دقة كاملة للمعلومات المنشورة.'] },
        ],
      },
      [ROUTES.conditions]: {
        slug: ROUTES.conditions,
        meta: { title: 'شروط الاستخدام | ZerTech', description: 'الشروط العامة لاستخدام خدمة ZerTech IPTV.' },
        lastUpdated: LAST_UPDATED,
        sections: [
          { title: 'الموضوع', paragraphs: ['تنظم هذه الشروط الوصول واستخدام خدمة IPTV بريميوم من ZerTech. بالاشتراك، يقبل المستخدم هذه الشروط.'] },
          { title: 'وصف الخدمة', paragraphs: ['ZerTech توفر الوصول إلى بث IPTV مع قنوات تلفزيونية ومحتوى VOD.'] },
          { title: 'التسجيل والحساب', paragraphs: ['يجب على المستخدم تقديم معلومات دقيقة. بيانات الدخول شخصية.'] },
          { title: 'الدفع', paragraphs: ['الأسعار بالدرهم المغربي (DHS). الدفع يؤكد تفعيل الاشتراك.'] },
          { title: 'المدة والإنهاء', paragraphs: ['يمكن للمستخدم طلب الإنهاء وفق سياسة الاسترداد (ضمان 45 يوماً).'] },
          { title: 'القانون المعمول به', paragraphs: ['تخضع هذه الشروط للقانون المغربي.'] },
        ],
      },
      [ROUTES.aup]: {
        slug: ROUTES.aup,
        meta: { title: 'سياسة الاستخدام المقبول | ZerTech', description: 'قواعد الاستخدام المقبول لخدمة ZerTech IPTV.' },
        lastUpdated: LAST_UPDATED,
        sections: [
          { title: 'الاستخدام المسموح', paragraphs: ['خدمة ZerTech IPTV للاستخدام الشخصي والخاص فقط.'] },
          { title: 'الاستخدامات المحظورة', paragraphs: ['يُحظر:'], list: ['إعادة بيع أو توزيع بيانات الدخول', 'استخدام تجاري بدون إذن', 'تجاوز إجراءات الأمان', 'أدوات آلية لاستخراج المحتوى', 'إرهاق الخوادم عمداً'] },
          { title: 'العقوبات', paragraphs: ['المخالفة قد تؤدي إلى تعليق فوري بدون استرداد.'] },
        ],
      },
      [ROUTES.rgpd]: {
        slug: ROUTES.rgpd,
        meta: { title: 'الامتثال RGPD | ZerTech', description: 'سياسة الامتثال للائحة حماية البيانات.' },
        lastUpdated: LAST_UPDATED,
        sections: [
          { title: 'مسؤول المعالجة', paragraphs: ['ZerTech، contact@zertech.ma، مسؤولة عن معالجة البيانات.'] },
          { title: 'البيانات المجمعة', paragraphs: ['نجمع:'], list: ['الاسم والهاتف (نماذج)', 'البريد الإلكتروني', 'بيانات التصفح (cookies، IP)'] },
          { title: 'الأغراض', paragraphs: ['إدارة الاشتراك، الدعم، تحسين الخدمة والالتزامات القانونية.'] },
          { title: 'حقوقك', paragraphs: ['حقوق الوصول والتصحيح والحذف والتقييد والنقل والاعتراض على contact@zertech.ma.'] },
          { title: 'الاحتفاظ', paragraphs: ['البيانات محفوظة خلال العلاقة التجارية وحتى 3 سنوات بعدها.'] },
        ],
      },
      [ROUTES.dmca]: {
        slug: ROUTES.dmca,
        meta: { title: 'سياسة DMCA | ZerTech', description: 'سياسة الإشعار والإزالة DMCA.' },
        lastUpdated: LAST_UPDATED,
        sections: [
          { title: 'الالتزام', paragraphs: ['ZerTech تحترم حقوق الملكية الفكرية وتستجيب لإشعارات DMCA الصالحة.'] },
          { title: 'الوكيل المعين', paragraphs: ['البريد: abuse@zertech.ma', 'الموضوع: « إشعار DMCA »'] },
          { title: 'محتوى الإشعار', paragraphs: ['يجب أن يتضمن:'], list: ['تحديد العمل المحمي', 'تحديد المحتوى المتنازع عليه', 'بيانات الاتصال', 'إقرار حسن النية', 'إقرار تحت طائلة الحنث', 'التوقيع'] },
          { title: 'الإشعار المضاد', paragraphs: ['أرسل إشعاراً مضاداً إلى abuse@zertech.ma وفق إجراء DMCA.'] },
        ],
      },
      [ROUTES.privacy]: {
        slug: ROUTES.privacy,
        meta: { title: 'سياسة الخصوصية | ZerTech', description: 'كيف تجمع ZerTech وتحمي بياناتك.' },
        lastUpdated: LAST_UPDATED,
        sections: [
          { title: 'مقدمة', paragraphs: ['ZerTech ملتزمة بحماية خصوصية مستخدميها.'] },
          { title: 'الجمع', paragraphs: ['نجمع فقط البيانات الضرورية: الاتصال والاشتراك والتصفح.'] },
          { title: 'المشاركة', paragraphs: ['ZerTech لا تبيع بياناتك. تُشارك فقط مع مزودي الخدمة التقنيين.'] },
          { title: 'الأمان', paragraphs: ['إجراءات تقنية وتنظيمية لحماية بياناتك.'] },
          { title: 'Cookies', paragraphs: ['cookies تقنية أساسية. بدون cookies إعلانية بدون موافقة.'] },
          { title: 'اتصل', paragraphs: ['contact@zertech.ma أو WhatsApp +212 664 140 211.'] },
        ],
      },
      [ROUTES.refund]: {
        slug: ROUTES.refund,
        meta: { title: 'الاسترداد والإرجاع | ZerTech', description: 'سياسة الاسترداد مع ضمان 45 يوماً.' },
        lastUpdated: LAST_UPDATED,
        sections: [
          { title: 'ضمان 45 يوماً', paragraphs: ['ZerTech تقدم ضمان « راضٍ أو مسترد » لمدة 45 يوماً من التفعيل. استرداد كامل إذا لم تلبِ الخدمة توقعاتك.'] },
          { title: 'شروط الأهلية', paragraphs: ['الاسترداد إذا:'], list: ['الطلب خلال 45 يوماً من التفعيل', 'استخدام متوافق مع سياسة الاستخدام', 'بدون مخالفة للشروط'] },
          { title: 'الإجراء', paragraphs: ['تواصل عبر WhatsApp (+212 664 140 211) أو email (contact@zertech.ma). المعالجة خلال 48 ساعة.'] },
          { title: 'الشروط', paragraphs: ['الاسترداد بنفس وسيلة الدفع خلال 48 ساعة كحد أقصى.'] },
          { title: 'الاستثناءات', paragraphs: ['التجربة المجانية 24 ساعة لا تستحق استرداداً. الاشتراكات الملغاة للمخالفة غير مؤهلة.'] },
        ],
      },
    },
  };

  return pages[lang];
}

/** Contenu juridique indexé par langue puis par route. */
export const LEGAL_CONTENT: Record<Lang, Record<LegalSlug, LegalPageContent>> = {
  fr: buildLegalPages('fr'),
  es: buildLegalPages('es'),
  ar: buildLegalPages('ar'),
};

export function getLegalContent(route: LegalSlug, lang: Lang): LegalPageContent {
  return LEGAL_CONTENT[lang][route];
}

export function getAllLegalRoutes(): LegalSlug[] {
  return [
    ROUTES.mentionsLegales,
    ROUTES.conditions,
    ROUTES.aup,
    ROUTES.rgpd,
    ROUTES.dmca,
    ROUTES.privacy,
    ROUTES.refund,
  ];
}

export type { LegalSlug as LegalRoute };
export type { LegalSlug };
