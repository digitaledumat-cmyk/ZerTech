import type { Translations } from '@/lib/types';

interface LocalSeoSectionProps {
  localSeo: Translations['localSeo'];
}

export default function LocalSeoSection({ localSeo }: LocalSeoSectionProps) {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-4xl">
        <article className="glass-card p-8 md:p-10">
          <h2 className="mb-6 text-2xl font-bold text-zinc-100 md:text-3xl">
            {localSeo.title}
          </h2>
          <p className="leading-relaxed text-zinc-400">{localSeo.content}</p>
        </article>
      </div>
    </section>
  );
}
