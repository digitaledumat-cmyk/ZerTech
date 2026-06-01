import type { Metadata } from 'next';
import { buildPageMetadata } from '@/lib/page-helpers';
import { getLegalContent, type LegalRoute } from '@/lib/legal-content';
import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import LegalPage from '@/components/LegalPage';

export function createLegalPage(route: LegalRoute) {
  async function generateMetadata(): Promise<Metadata> {
    const content = getLegalContent(route);
    return buildPageMetadata(content.meta.title, content.meta.description, route);
  }

  async function LegalRoutePage() {
    const content = getLegalContent(route);

    return (
      <PageWrapper>
        <PageHeader title={content.meta.title} description={content.meta.description} />
        <LegalPage content={content} />
      </PageWrapper>
    );
  }

  return { generateMetadata, default: LegalRoutePage };
}
