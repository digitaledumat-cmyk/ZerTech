import type { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import Accordion from '@/components/Accordion';
import { buildPageMetadata } from '@/lib/page-helpers';
import { getGuideContent } from '@/lib/pages-content';
import { ROUTES } from '@/lib/routes';

export async function generateMetadata(): Promise<Metadata> {
  const content = getGuideContent();
  return buildPageMetadata(content.title, content.description, ROUTES.guide);
}

export default function GuidePage() {
  const content = getGuideContent();

  return (
    <PageWrapper>
      <PageHeader title={content.title} description={content.description} />
      <main className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-3xl space-y-8">
          <p className="text-zinc-400">{content.intro}</p>
          <div className="glass-card p-6">
            <h2 className="mb-3 text-lg font-semibold text-zinc-200">Conseils avant installation</h2>
            <ul className="list-inside list-disc space-y-2 text-sm text-zinc-400">
              {content.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </div>
          <Accordion items={content.items} />
        </div>
      </main>
    </PageWrapper>
  );
}
