'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import ZerTechLogo from '@/components/ZerTechLogo';
import { buildHref } from '@/lib/routes';
import type { NavbarProps } from '@/lib/nav-types';

function isActive(pathname: string, route: string): boolean {
  if (!route) return pathname === '/';
  return pathname === `/${route}` || pathname.startsWith(`/${route}/`);
}

export default function Navbar({ nav }: NavbarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { navbar, ui } = nav;

  const linkClass = (route: string) => {
    const active = isActive(pathname, route);
    return [
      'px-1 py-2 text-sm transition-colors',
      active ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-100',
    ].join(' ');
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link
          href="/"
          className="group transition-opacity hover:opacity-95"
          onClick={() => setMobileOpen(false)}
        >
          <ZerTechLogo />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navbar.map(({ label, route }) => (
            <Link
              key={route || 'home'}
              href={buildHref(route)}
              className={`${linkClass(route)} ${isActive(pathname, route) ? 'border-b-2 border-accent pb-0.5' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

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

      {mobileOpen && (
        <nav className="border-t border-white/5 bg-zinc-950/95 px-4 py-4 lg:hidden">
          <ul className="space-y-1">
            {navbar.map(({ label, route }) => (
              <li key={route || 'home'}>
                <Link
                  href={buildHref(route)}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm ${
                    isActive(pathname, route)
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
