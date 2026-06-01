import Image from 'next/image';
import type { Translations } from '@/lib/types';

interface HeroSectionProps {
  t: Translations['hero'];
}

export default function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-12 md:px-8 md:pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            <span className="text-gradient">{t.title}</span>
          </h1>
          <p className="max-w-xl text-lg text-zinc-400">{t.subtitle}</p>
          <a
            href="#trial"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:scale-105 hover:shadow-primary/40"
          >
            {t.cta}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="relative">
          <div className="glass-card overflow-hidden p-1">
            <Image
              src="/images/hero-abstract.svg"
              alt={t.imageAlt}
              width={1200}
              height={800}
              priority
              className="h-auto w-full rounded-xl"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
