import Image from 'next/image';
import type { HomeContent } from '@/lib/home-content';
import { textDirClass } from '@/lib/home-utils';
import type { Lang } from '@/lib/types';
import { WHATSAPP_NUMBER } from '@/lib/translations';
import { WhatsAppIcon } from './HomeIcons';

interface Props {
  hero: HomeContent['hero'];
  lang: Lang;
}

const WHATSAPP_INTRO: Record<Lang, string> = {
  fr: 'Bonjour ZerTech, je souhaite bénéficier d\'un essai gratuit 24h.',
  es: 'Hola ZerTech, deseo beneficiarme de una prueba gratis de 24h.',
  ar: 'مرحباً ZerTech، أرغب في تجربة مجانية لمدة 24 ساعة.',
};

export default function HomeHero({ hero, lang }: Props) {
  const dir = textDirClass(lang);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_INTRO[lang])}`;

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-4 md:px-8 md:pb-28 md:pt-8 lg:pt-10">
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* ── Text column ── */}
        <div className={`space-y-7 ${dir}`}>
          {/* Eyebrow */}
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-blue-400/80 md:text-xs">
            {hero.eyebrow}
          </p>

          {/* H1 — imposant, blanc + dégradé sur mots-clés */}
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] lg:leading-[1.06]">
            {hero.titleLine1}{' '}
            <span className="hero-highlight">{hero.titleHighlight}</span>
            <br />
            {hero.titleLine2}
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-zinc-400 md:text-lg">
            {hero.subtitle}
          </p>

          <p className="max-w-2xl text-sm leading-relaxed text-zinc-500 md:text-base">
            {hero.seoParagraph}
          </p>

          {/* Pill badges */}
          <div className="flex flex-wrap gap-2.5">
            {hero.pills.map((pill) => (
              <span key={pill} className="pill-badge">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
                {pill}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(5,150,105,0.4)] transition-all hover:bg-emerald-700 hover:shadow-[0_6px_32px_rgba(5,150,105,0.5)]"
            >
              <WhatsAppIcon />
              {hero.ctaWhatsApp}
            </a>
            <a
              href="#trial"
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_4px_24px_rgba(249,115,22,0.35)] transition-all hover:bg-orange-600 hover:shadow-[0_6px_32px_rgba(249,115,22,0.45)]"
            >
              {hero.ctaPrimary}
              <span aria-hidden="true" className={lang === 'ar' ? 'rotate-180' : ''}>
                →
              </span>
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-medium text-zinc-300 transition-all hover:border-white/30 hover:bg-white/10"
            >
              {hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* ── Visual column ── */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-600/20 via-transparent to-orange-500/10 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 via-zinc-900/40 to-zinc-950/80 p-1.5 shadow-[0_0_60px_rgba(37,99,235,0.12)] backdrop-blur-2xl">
            <Image
              src="/zertech-iptv-maroc.webp"
              alt={hero.imageAlt}
              width={1200}
              height={675}
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
          <div className="absolute -bottom-6 end-4 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-semibold text-orange-400 backdrop-blur-xl">
            4K UHD • Live
          </div>
        </div>
      </div>
    </section>
  );
}
