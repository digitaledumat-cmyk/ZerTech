import { Activity, Award, Clock, Server, Shield, Users, Zap } from 'lucide-react';
import type { HomeContent } from '@/lib/home-content';
import { textDirClass } from '@/lib/home-utils';
import type { Lang } from '@/lib/types';
import type { LucideIcon } from 'lucide-react';

interface Props {
  stats: HomeContent['stats'];
  lang: Lang;
}

const STAT_ICONS: {
  Icon: LucideIcon;
  className: string;
  pulse?: boolean;
}[] = [
  {
    Icon: Users,
    className: 'h-20 w-20 text-blue-500',
  },
  {
    Icon: Activity,
    className: 'h-20 w-20 text-emerald-400',
    pulse: true,
  },
  {
    Icon: Award,
    className: 'h-20 w-20 text-orange-400',
  },
];

const BENEFIT_CONFIG: {
  Icon: LucideIcon;
  iconClass: string;
  glowClass: string;
}[] = [
  {
    Icon: Shield,
    iconClass: 'h-5 w-5 text-blue-400',
    glowClass: 'shadow-[0_0_15px_rgba(37,99,235,0.3)]',
  },
  {
    Icon: Zap,
    iconClass: 'h-5 w-5 text-orange-400',
    glowClass: 'shadow-[0_0_15px_rgba(249,115,22,0.4)]',
  },
  {
    Icon: Server,
    iconClass: 'h-5 w-5 text-blue-400',
    glowClass: 'shadow-[0_0_15px_rgba(37,99,235,0.3)]',
  },
  {
    Icon: Clock,
    iconClass: 'h-5 w-5 text-orange-400',
    glowClass: 'shadow-[0_0_15px_rgba(249,115,22,0.35)]',
  },
];

export default function HomeStats({ stats, lang }: Props) {
  const dir = textDirClass(lang);

  return (
    <section className="relative px-4 py-16 md:px-8 md:py-20">
      {/* Section ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-orange-500/5"
        aria-hidden="true"
      />

      <div className={`relative mx-auto max-w-7xl space-y-14 ${dir}`}>
        <div className="text-center">
          <h2 className="title-gradient text-2xl font-bold md:text-3xl">{stats.title}</h2>
          <div className="orange-highlight mx-auto mt-3" aria-hidden="true" />
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-zinc-400 md:text-base">
            {stats.intro}
          </p>
        </div>

        {/* Stat counters */}
        <div className="grid gap-5 md:grid-cols-3">
          {stats.items.map((stat, i) => {
            const { Icon, className, pulse } = STAT_ICONS[i] ?? STAT_ICONS[0];
            return (
              <div
                key={stat.label}
                className="group stat-card transition-all duration-300 hover:border-blue-600/35 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 to-orange-500/5 opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Background icon */}
                <div className={`stat-card-glow ${pulse ? 'pulse-emerald' : ''}`} aria-hidden="true">
                  <Icon className={className} strokeWidth={1.25} />
                </div>

                <p className="relative text-4xl font-extrabold text-gradient md:text-5xl">{stat.value}</p>
                <p className="relative mt-2 text-sm font-medium text-zinc-300">{stat.label}</p>
                <p className="relative mt-3 text-xs leading-relaxed text-zinc-500 md:text-sm">{stat.detail}</p>
              </div>
            );
          })}
        </div>

        {/* Micro benefit cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.benefits.map((item, i) => {
            const { Icon, iconClass, glowClass } = BENEFIT_CONFIG[i] ?? BENEFIT_CONFIG[0];
            return (
              <div
                key={item.title}
                className="micro-card group transition-all duration-300 hover:border-white/25 hover:shadow-[0_0_28px_rgba(37,99,235,0.1)]"
              >
                <span className={`benefit-icon-ring transition-transform duration-300 group-hover:scale-105 ${glowClass}`}>
                  <Icon className={iconClass} strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <span className="block text-sm font-semibold leading-snug text-zinc-100">{item.title}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-zinc-500">{item.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
