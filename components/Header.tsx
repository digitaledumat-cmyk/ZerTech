import Link from 'next/link';
import type { Lang } from '@/lib/types';
import type { Translations } from '@/lib/types';
import { ROUTES } from '@/lib/routes';

interface HeaderProps {
  lang: Lang;
  nav: Translations['nav'];
}

const langs: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
  { code: 'ar', label: 'AR' },
];

export default function Header({ lang, nav }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href={`/${lang}`} className="text-xl font-bold text-gradient">
          ZerTech
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
          <Link
            href={`/${lang}/${ROUTES.abonnement}`}
            className="transition-colors hover:text-zinc-100"
          >
            {nav.pricing}
          </Link>
          <Link
            href={`/${lang}/${ROUTES.guide}`}
            className="transition-colors hover:text-zinc-100"
          >
            {nav.guide}
          </Link>
          <Link
            href={`/${lang}#trial`}
            className="transition-colors hover:text-zinc-100"
          >
            {nav.trial}
          </Link>
          <Link
            href={`/${lang}/${ROUTES.faq}`}
            className="transition-colors hover:text-zinc-100"
          >
            {nav.faq}
          </Link>
          <Link
            href={`/${lang}/${ROUTES.contact}`}
            className="transition-colors hover:text-zinc-100"
          >
            {nav.contact}
          </Link>
        </nav>

        <div className="flex items-center gap-1">
          {langs.map((l) => (
            <Link
              key={l.code}
              href={`/${l.code}`}
              className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                lang === l.code
                  ? 'bg-primary/20 text-primary'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
