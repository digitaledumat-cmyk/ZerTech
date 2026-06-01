import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageWrapper from '@/components/PageWrapper';
import HomeBackground from '@/components/home/HomeBackground';
import HomeHero from '@/components/home/HomeHero';
import HomeStats from '@/components/home/HomeStats';
import HomePricing from '@/components/home/HomePricing';
import HomeTrialForm from '@/components/home/HomeTrialForm';
import HomeReviews from '@/components/home/HomeReviews';
import HomeAccordions from '@/components/home/HomeAccordions';
import HomeLocalSeo from '@/components/home/HomeLocalSeo';
import HomeWhatsAppFloat from '@/components/home/HomeWhatsAppFloat';
import { getHomeContent, buildHomeJsonLd } from '@/lib/home-content';
import { buildPageMetadata, resolveLang } from '@/lib/page-helpers';
import { isValidLang } from '@/lib/translations';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolveLang(params);
  const { meta } = getHomeContent(lang);
  return {
    ...buildPageMetadata(lang, meta.title, meta.description),
    keywords: meta.keywords,
  };
}

export function generateStaticParams() {
  return [{ lang: 'fr' }, { lang: 'es' }, { lang: 'ar' }];
}

export default async function HomePage({ params }: PageProps) {
  const { lang: langParam } = await params;

  if (!isValidLang(langParam)) {
    notFound();
  }

  const lang = langParam;
  const content = getHomeContent(lang);
  const jsonLdSchemas = buildHomeJsonLd(lang);

  return (
    <PageWrapper>
      <div className="relative min-h-screen bg-zinc-950">
        {jsonLdSchemas.map((schema, index) => (
          <script
            key={`jsonld-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        <HomeBackground />

        <div className="relative z-10">
          <HomeHero hero={content.hero} lang={lang} />
          <HomeStats stats={content.stats} lang={lang} />
          <HomePricing pricing={content.pricing} lang={lang} />
          <HomeTrialForm trial={content.trial} packs={content.pricing.packs} lang={lang} />
          <HomeReviews reviews={content.reviews} lang={lang} />
          <HomeAccordions guide={content.guide} faq={content.faq} lang={lang} />
          <HomeLocalSeo localSeo={content.localSeo} lang={lang} />
        </div>

        <HomeWhatsAppFloat lang={lang} />
      </div>
    </PageWrapper>
  );
}
