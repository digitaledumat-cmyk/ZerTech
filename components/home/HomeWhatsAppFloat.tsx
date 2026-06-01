import type { Lang } from '@/lib/types';
import { WHATSAPP_NUMBER } from '@/lib/translations';
import { WhatsAppIcon } from './HomeIcons';

const FLOAT_LABELS: Record<Lang, string> = {
  fr: 'Essai 24h',
  es: 'Prueba 24h',
  ar: 'تجربة 24 ساعة',
};

const FLOAT_MESSAGES: Record<Lang, string> = {
  fr: 'Bonjour ZerTech, je souhaite obtenir mon test gratuit de 24h pour l\'abonnement IPTV Maroc.',
  es: 'Hola ZerTech, deseo obtener mi prueba gratuita de 24h para la suscripción IPTV Marruecos.',
  ar: 'مرحباً ZerTech، أرغب في الحصول على تجربتي المجانية لمدة 24 ساعة لاشتراك IPTV المغرب.',
};

const FLOAT_ARIA: Record<Lang, string> = {
  fr: 'Demander un essai IPTV gratuit de 24h via WhatsApp',
  es: 'Solicitar prueba IPTV gratis de 24h por WhatsApp',
  ar: 'طلب تجربة IPTV مجانية 24 ساعة عبر WhatsApp',
};

interface Props {
  lang: Lang;
}

export default function HomeWhatsAppFloat({ lang }: Props) {
  const message = FLOAT_MESSAGES[lang];
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={FLOAT_ARIA[lang]}
      className="whatsapp-float-btn fixed bottom-6 end-6 z-50 inline-flex items-center gap-2.5 rounded-full border border-emerald-800 bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
        <WhatsAppIcon className="h-5 w-5" />
      </span>
      <span>{FLOAT_LABELS[lang]}</span>
    </a>
  );
}
