import type { Translations } from '@/lib/types';

interface PricingSectionProps {
  pricing: Translations['pricing'];
}

export default function PricingSection({ pricing }: PricingSectionProps) {
  return (
    <section id="pricing" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl">
          {pricing.title}
        </h2>

        <div className="mb-10 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm font-medium text-accent">
            🛡️ {pricing.guarantee}
          </span>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.packs.map((pack) => (
            <div
              key={pack.id}
              className={`glass-card relative flex flex-col p-6 transition-all hover:border-white/20 ${
                pack.highlighted
                  ? 'border-primary/40 ring-1 ring-primary/30 lg:scale-105'
                  : ''
              }`}
            >
              {pack.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {pricing.popular}
                </span>
              )}
              <h3 className="text-xl font-bold text-zinc-100">{pack.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gradient">{pack.price}</span>
                <span className="text-zinc-400">{pack.currency}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-zinc-300">
                    <span className="mt-0.5 text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#trial"
                className={`mt-8 block rounded-xl py-3 text-center font-semibold transition-all ${
                  pack.highlighted
                    ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/25'
                    : 'border border-white/10 bg-white/5 text-zinc-100 hover:border-primary/40 hover:bg-white/10'
                }`}
              >
                {pricing.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
