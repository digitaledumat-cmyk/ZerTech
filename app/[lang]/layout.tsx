import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getNavTranslations } from '@/lib/nav-translations';
import { buildOrganizationJsonLd } from '@/lib/organization-jsonld';
import type { LangLayoutParams } from '@/lib/nav-types';
import { isValidLang } from '@/lib/translations';
import { notFound } from 'next/navigation';

export function generateStaticParams(): LangLayoutParams[] {
  return [{ lang: 'fr' }, { lang: 'es' }, { lang: 'ar' }];
}

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<LangLayoutParams>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang: langParam } = await params;

  if (!isValidLang(langParam)) {
    notFound();
  }

  // getNavTranslations inclut langSwitcher (labels natifs) et ui.whatsappHref (message pré-rempli)
  const translations = getNavTranslations(langParam);
  const organizationJsonLd = buildOrganizationJsonLd(langParam);

  return (
    <html lang={langParam} dir={langParam === 'ar' ? 'rtl' : 'ltr'}>
      <body className="relative flex min-h-screen flex-col bg-zinc-950 text-zinc-100 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/8 blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-accent/8 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-white/[0.02] blur-2xl" />
        </div>

        <Navbar translations={translations} />
        <main className="relative flex-1">{children}</main>
        <Footer translations={translations} />
      </body>
    </html>
  );
}
