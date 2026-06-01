import type { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import HomeBackground from '@/components/home/HomeBackground';
import HomeHero from '@/components/home/HomeHero';
import HomeStats from '@/components/home/HomeStats';
import HomePricing from '@/components/home/HomePricing';
import HomeTrialForm from '@/components/home/HomeTrialForm';
import HomeReviews from '@/components/home/HomeReviews';
import HomeAccordions from '@/components/home/HomeAccordions';
import HomeLocalSeo from '@/components/home/HomeLocalSeo';
import { getHomeContent, buildHomeJsonLd } from '@/lib/home-content';
import { buildPageMetadata } from '@/lib/page-helpers';

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = getHomeContent();
  return {
    ...buildPageMetadata(meta.title, meta.description),
    keywords: meta.keywords,
  };
}

export default function HomePage() {
  const content = getHomeContent();
  const jsonLdSchemas = buildHomeJsonLd();

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
          <HomeHero hero={content.hero} />
          <HomeStats stats={content.stats} />
          <HomePricing pricing={content.pricing} />
          <HomeTrialForm trial={content.trial} packs={content.pricing.packs} />
          <HomeReviews reviews={content.reviews} />
          <HomeAccordions guide={content.guide} faq={content.faq} />
          <HomeLocalSeo localSeo={content.localSeo} />
        </div>
      </div>
    </PageWrapper>
  );
}
