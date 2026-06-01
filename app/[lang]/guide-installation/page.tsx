import type { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import Accordion from '@/components/Accordion';
import { resolveLang, buildPageMetadata } from '@/lib/page-helpers';
import { getGuideContent } from '@/lib/pages-content';
import { ROUTES } from '@/lib/routes';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolveLang(params);
  const content = getGuideContent(lang);
  return buildPageMetadata(lang, content.title, content.description, ROUTES.guide);
}

export default async function GuidePage({ params }: PageProps) {
  const lang = await resolveLang(params);
  const content = getGuideContent(lang);

  return (
    <PageWrapper>
      <PageHeader title={content.title} description={content.description} />
      <main className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="text-lg leading-relaxed text-zinc-400">{content.intro}</p>

          <div className="glass-card p-6">
            <h2 className="mb-4 text-lg font-semibold text-zinc-200">
              {lang === 'fr' ? 'Conseils avant installation' : lang === 'es' ? 'Consejos antes de instalar' : 'نصائح قبل التثبيت'}
            </h2>
            <ul className="space-y-2">
              {content.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-sm text-zinc-400">
                  <span className="mt-0.5 text-accent">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <Accordion items={content.items} />
        </div>
      </main>
    </PageWrapper>
  );
}
