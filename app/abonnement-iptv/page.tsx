import type { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import PricingSection from '@/components/PricingSection';
import TrialForm from '@/components/TrialForm';
import { buildPageMetadata } from '@/lib/page-helpers';
import { getAbonnementContent } from '@/lib/pages-content';
import { getSiteTranslations } from '@/lib/translations';
import { ROUTES } from '@/lib/routes';

export async function generateMetadata(): Promise<Metadata> {
  const content = getAbonnementContent();
  return buildPageMetadata(content.title, content.description, ROUTES.abonnement);
}

export default function AbonnementPage() {
  const t = getSiteTranslations();
  const content = getAbonnementContent();

  return (
    <PageWrapper>
      <PageHeader title={content.title} description={content.description} />
      <main className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl space-y-12">
          <p className="text-lg text-zinc-400">{content.intro}</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {content.features.map((feature) => (
              <li key={feature} className="glass-card flex items-center gap-3 p-4 text-sm text-zinc-300">
                <span className="text-primary">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <div className="text-center">
            <a
              href="/#trial"
              className="inline-flex rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              {content.cta}
            </a>
          </div>
        </div>
      </main>
      <PricingSection pricing={t.pricing} />
      <div className="px-4 pb-16 md:px-8">
        <div className="mx-auto max-w-xl">
          <TrialForm t={t.trial} packs={t.pricing.packs} />
        </div>
      </div>
    </PageWrapper>
  );
}
