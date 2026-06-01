import type { HomeContent, HomePricingPack } from '@/lib/home-content';

interface Props {
  pricing: HomeContent['pricing'];
}

function cardClass(pack: HomePricingPack): string {
  if (pack.id === 'pro-premium') return 'pricing-card-premium';
  if (pack.id === 'pro-plus') return 'pricing-card-pro-plus lg:scale-[1.03]';
  return 'pricing-card-pro';
}

function FeatureIcon({ icon }: { icon: 'check' | 'star' }) {
  if (icon === 'star') {
    return <span className="mt-0.5 shrink-0 text-sm leading-none text-amber-400">⭐</span>;
  }
  return (
    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-[11px] font-bold text-emerald-400">
      ✔
    </span>
  );
}

function PricingRibbon({ pack }: { pack: HomePricingPack }) {
  if (!pack.ribbon || !pack.ribbonStyle) return null;
  return (
    <div className={pack.ribbonStyle === 'hot' ? 'pricing-ribbon-hot' : 'pricing-ribbon-elite'}>
      {pack.ribbon}
    </div>
  );
}

function UrgencyBox({ pack }: { pack: HomePricingPack }) {
  if (!pack.urgencyOffer || !pack.urgencyDeadline) return null;
  const boxClass = pack.ribbonStyle === 'elite' ? 'urgency-box-elite' : 'urgency-box-hot';
  const textClass = pack.ribbonStyle === 'elite' ? 'text-amber-200' : 'text-red-200';

  return (
    <div className={`${boxClass} mt-5`}>
      <p className={`text-center text-xs font-bold leading-snug ${textClass} md:text-sm`}>
        {pack.urgencyOffer}
      </p>
      <p className="mt-2 flex items-center justify-center gap-2 text-[11px] text-zinc-400">
        <span className="blink-dot" aria-hidden="true" />
        {pack.urgencyDeadline}
      </p>
    </div>
  );
}

export default function HomePricing({ pricing }: Props) {

  return (
    <section id="pricing" className="px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="title-gradient text-2xl font-bold md:text-3xl">{pricing.title}</h2>
          <div className="orange-highlight mx-auto mt-3" aria-hidden="true" />
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-zinc-400 md:text-base">
            {pricing.intro}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          {pricing.packs.map((pack) => (
            <article
              key={pack.id}
              className={`flex flex-col p-7 pt-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(37,99,235,0.1)] ${cardClass(pack)}`}
            >
              <PricingRibbon pack={pack} />

              {/* Header */}
              <h3 className="text-xl font-bold text-white md:text-2xl">{pack.name}</h3>
              <p className="mt-1.5 text-sm text-zinc-400">{pack.description}</p>
              <p className="mt-3 text-xs leading-relaxed text-zinc-500 md:text-sm">{pack.longDescription}</p>

              {/* Price block */}
              <div className="mt-6 flex flex-wrap items-end gap-x-2 gap-y-1">
                <span className="text-5xl font-bold leading-none text-white">{pack.price}</span>
                <span className="pb-1 text-lg font-semibold text-white">DH</span>
                <span className="pb-1 text-sm text-zinc-500">{pack.pricePeriod}</span>
              </div>

              <UrgencyBox pack={pack} />

              <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Features */}
              <ul className="flex-1 space-y-3">
                {pack.includedLine && (
                  <li className="flex items-start gap-2.5 text-sm font-semibold text-amber-300">
                    <span className="mt-0.5 shrink-0 text-sm leading-none">⭐</span>
                    <span>{pack.includedLine}</span>
                  </li>
                )}
                {pack.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <FeatureIcon icon={pack.featureIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#trial"
                className={`mt-8 block rounded-xl py-3.5 text-center text-sm font-semibold transition-all duration-300 ${
                  pack.id === 'pro-premium'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-zinc-900 shadow-[0_4px_24px_rgba(251,191,36,0.35)] hover:from-amber-400 hover:to-orange-400'
                    : pack.id === 'pro-plus'
                      ? 'bg-orange-500 text-white shadow-[0_4px_24px_rgba(249,115,22,0.35)] hover:bg-orange-600'
                      : 'border border-white/20 bg-white/5 text-zinc-100 hover:border-white/30 hover:bg-white/10'
                }`}
              >
                {pricing.cta}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <p className="inline-flex max-w-3xl items-center gap-2.5 rounded-2xl border border-orange-500/25 bg-orange-500/8 px-6 py-4 text-center text-sm font-medium leading-relaxed text-orange-400/90 backdrop-blur-xl">
            <span className="text-base">🛡️</span>
            {pricing.guarantee}
          </p>
        </div>
      </div>
    </section>
  );
}
