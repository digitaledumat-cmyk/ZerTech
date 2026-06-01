import type { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import PricingSection from '@/components/PricingSection';
import TrialForm from '@/components/TrialForm';
import { resolveLang, buildPageMetadata, getBaseTranslations } from '@/lib/page-helpers';
import { getAbonnementContent } from '@/lib/pages-content';
import { ROUTES } from '@/lib/routes';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolveLang(params);
  const content = getAbonnementContent(lang);
  return buildPageMetadata(lang, content.title, content.description, ROUTES.abonnement);
}

export default async function AbonnementPage({ params }: PageProps) {
  const lang = await resolveLang(params);
  const t = getBaseTranslations(lang);
  const content = getAbonnementContent(lang);

  return (
    <PageWrapper>
      <PageHeader title={content.title} description={content.description} />
      <main>
        <section className="px-4 py-12 md:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-lg leading-relaxed text-zinc-400">{content.intro}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {content.features.map((f) => (
                <li
                  key={f}
                  className="glass-card flex items-center gap-3 px-4 py-3 text-sm text-zinc-300"
                >
                  <span className="text-primary">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center">
              <Link
                href={`/${lang}#trial`}
                className="inline-flex rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                {content.cta}
              </Link>
            </div>
          </div>
        </section>
        <PricingSection pricing={t.pricing} />
        <TrialForm t={t.trial} packs={t.pricing.packs} lang={lang} />
      </main>
    </PageWrapper>
  );
}
