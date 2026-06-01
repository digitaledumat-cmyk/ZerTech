'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ZerTechLogo from '@/components/ZerTechLogo';
import { getLangSwitcherPath, buildLocalizedHref } from '@/lib/i18n-routing';
import type { NavbarProps } from '@/lib/nav-types';
import type { Lang } from '@/lib/types';

function isActive(pathname: string, lang: Lang, route: string): boolean {
  const base = `/${lang}`;
  if (!route) return pathname === base || pathname === `${base}/`;
  return pathname.startsWith(`${base}/${route}`);
}

export default function Navbar({ translations }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, navbar, ui, langSwitcher } = translations;

  const linkClass = (route: string) => {
    const active = isActive(pathname, lang, route);
    return [
      'px-1 py-2 text-sm transition-colors',
      active ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-100',
    ].join(' ');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link
          href={buildLocalizedHref(lang, '')}
          className="group transition-opacity hover:opacity-95"
          onClick={() => setMobileOpen(false)}
        >
          <ZerTechLogo />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navbar.map(({ label, route }) => (
            <Link
              key={route || 'home'}
              href={buildLocalizedHref(lang, route)}
              className={`${linkClass(route)} ${isActive(pathname, lang, route) ? 'border-b-2 border-accent pb-0.5' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5 rounded-lg border border-white/5 bg-white/5 p-0.5">
            {langSwitcher.map(({ code, label: langLabel }) => (
              <Link
                key={code}
                href={getLangSwitcherPath(pathname, code as Lang)}
                className={`whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium transition-colors ${
                  lang === code
                    ? 'bg-accent/20 text-accent'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
                aria-current={lang === code ? 'true' : undefined}
              >
                {langLabel}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 lg:hidden"
            aria-label={ui.menuAria}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/5 bg-zinc-950/95 px-4 py-4 lg:hidden">
          <ul className="space-y-1">
            {navbar.map(({ label, route }) => (
              <li key={route || 'home'}>
                <Link
                  href={buildLocalizedHref(lang, route)}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm ${
                    isActive(pathname, lang, route)
                      ? 'border-b-2 border-accent bg-white/5 font-medium text-zinc-100'
                      : 'text-zinc-400 hover:bg-white/5 hover:text-zinc-100'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
