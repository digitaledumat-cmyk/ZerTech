import type { Metadata } from 'next';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import Accordion from '@/components/Accordion';
import { buildPageMetadata } from '@/lib/page-helpers';
import { getFaqPageContent } from '@/lib/pages-content';
import { ROUTES } from '@/lib/routes';

export async function generateMetadata(): Promise<Metadata> {
  const content = getFaqPageContent();
  return buildPageMetadata(content.title, content.description, ROUTES.faq);
}

export default function FaqPage() {
  const content = getFaqPageContent();

  return (
    <PageWrapper>
      <PageHeader title={content.title} description={content.description} />
      <main className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-3xl space-y-10">
          <p className="text-zinc-400">{content.intro}</p>
          <Accordion items={content.items} />
          <div className="glass-card p-6 text-center">
            <p className="mb-4 text-zinc-400">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Contactez notre support 24/7
            </Link>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
