import type { Metadata } from 'next';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import Accordion from '@/components/Accordion';
import { resolveLang, buildPageMetadata } from '@/lib/page-helpers';
import { getFaqPageContent } from '@/lib/pages-content';
import { ROUTES } from '@/lib/routes';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolveLang(params);
  const content = getFaqPageContent(lang);
  return buildPageMetadata(lang, content.title, content.description, ROUTES.faq);
}

export default async function FaqPage({ params }: PageProps) {
  const lang = await resolveLang(params);
  const content = getFaqPageContent(lang);

  const ctaLabel =
    lang === 'fr'
      ? 'Contacter le support WhatsApp'
      : lang === 'es'
        ? 'Contactar soporte WhatsApp'
        : 'تواصل مع دعم WhatsApp';

  return (
    <PageWrapper>
      <PageHeader title={content.title} description={content.description} />
      <main className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-3xl space-y-8">
          <p className="text-zinc-400">{content.intro}</p>
          <Accordion items={content.items} />
          <div className="glass-card p-6 text-center">
            <p className="mb-4 text-zinc-400">
              {lang === 'fr'
                ? 'Vous n\'avez pas trouvé votre réponse ?'
                : lang === 'es'
                  ? '¿No encontró su respuesta?'
                  : 'لم تجد إجابتك؟'}
            </p>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex rounded-xl bg-[#25D366] px-6 py-3 font-semibold text-white transition-all hover:bg-[#20bd5a]"
            >
              {ctaLabel}
            </Link>
            <p className="mt-3 text-xs text-zinc-600">
              WhatsApp: +212 664 140 211
            </p>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
