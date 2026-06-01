import type { Metadata } from 'next';
import { resolveLang, buildPageMetadata } from '@/lib/page-helpers';
import { getLegalContent, type LegalRoute } from '@/lib/legal-content';
import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import LegalPage from '@/components/LegalPage';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export function createLegalPage(route: LegalRoute) {
  async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const lang = await resolveLang(params);
    const content = getLegalContent(route, lang);
    return buildPageMetadata(lang, content.meta.title, content.meta.description, route);
  }

  async function LegalRoutePage({ params }: PageProps) {
    const lang = await resolveLang(params);
    const content = getLegalContent(route, lang);

    return (
      <PageWrapper>
        <PageHeader title={content.meta.title} description={content.meta.description} />
        <LegalPage lang={lang} content={content} />
      </PageWrapper>
    );
  }

  return { generateMetadata, default: LegalRoutePage };
}
