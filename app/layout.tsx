import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeWhatsAppFloat from '@/components/home/HomeWhatsAppFloat';
import { Analytics } from '@vercel/analytics/next';
import { getNavConfig } from '@/lib/nav-translations';
import { buildOrganizationJsonLd } from '@/lib/organization-jsonld';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zertech.ma'),
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nav = getNavConfig();
  const organizationJsonLd = buildOrganizationJsonLd();

  return (
    <html lang="fr" dir="ltr">
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

        <Navbar nav={nav} />
        <main className="relative flex-1">{children}</main>
        <Footer nav={nav} />
        <HomeWhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}
