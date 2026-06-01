import type { HomeContent } from '@/lib/home-content';

interface Props {
  localSeo: HomeContent['localSeo'];
}

export default function HomeLocalSeo({ localSeo }: Props) {

  return (
    <section className="px-4 pb-20 md:px-8 md:pb-24" aria-labelledby="local-seo-title">
      <div className="mx-auto max-w-7xl">
        {/* H2 + introduction */}
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <h2 id="local-seo-title" className="title-gradient text-2xl font-bold md:text-3xl">
            {localSeo.title}
          </h2>
          <div className="orange-highlight mx-auto mt-3" aria-hidden="true" />
          <p className="mt-6 text-base leading-relaxed text-zinc-400 md:text-lg">{localSeo.intro}</p>
        </header>

        {/* 8 semantic SEO blocks */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {localSeo.blocks.map((block) => (
            <article
              key={block.title}
              className="pricing-card p-5 transition-all duration-300 hover:border-blue-600/25 hover:shadow-[0_0_24px_rgba(37,99,235,0.08)]"
            >
              <h3 className="mb-2.5 text-sm font-bold leading-snug text-white md:text-base">
                {block.title}
              </h3>
              <p className="text-xs leading-relaxed text-zinc-400 md:text-sm">{block.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
