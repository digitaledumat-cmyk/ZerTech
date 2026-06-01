import { WHATSAPP_NUMBER } from '@/lib/translations';
import { WhatsAppIcon } from './HomeIcons';

const FLOAT_LABEL = 'Essai 24h';
const FLOAT_MESSAGE =
  'Bonjour ZerTech, je souhaite obtenir mon test gratuit de 24h pour l\'abonnement IPTV Maroc.';
const FLOAT_ARIA = 'Demander un essai IPTV gratuit de 24h via WhatsApp';

export default function HomeWhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(FLOAT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={FLOAT_ARIA}
      className="whatsapp-float-btn fixed bottom-6 end-6 z-50 inline-flex items-center gap-2.5 rounded-full border border-emerald-800 bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15">
        <WhatsAppIcon className="h-5 w-5" />
      </span>
      <span>{FLOAT_LABEL}</span>
    </a>
  );
}
