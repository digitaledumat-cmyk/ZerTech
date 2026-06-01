import type { Translations } from '@/lib/types';

interface StatsSectionProps {
  benefits: Translations['benefits'];
  stats: Translations['stats'];
}

const statValues = [
  { value: '+14 500', labelKey: 'subscribers' as const },
  { value: '980', labelKey: 'online' as const },
  { value: '95%', labelKey: 'renewal' as const },
];

export default function StatsSection({ benefits, stats }: StatsSectionProps) {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div>
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            {benefits.title}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.items.map((item) => (
              <div
                key={item}
                className="glass-card flex items-center gap-3 px-5 py-4 transition-colors hover:border-primary/30"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  ✦
                </span>
                <span className="font-medium text-zinc-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {statValues.map((stat) => (
            <div
              key={stat.labelKey}
              className="glass-mirror group relative overflow-hidden rounded-2xl p-8 text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <p className="text-4xl font-bold text-gradient md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-zinc-400">{stats[stat.labelKey]}</p>
              </div>
              <div className="absolute -bottom-8 left-1/2 h-16 w-3/4 -translate-x-1/2 rounded-full bg-white/5 blur-xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
