import type { LegalPageContent } from '@/lib/legal-content';
import type { Lang } from '@/lib/types';

interface LegalPageProps {
  lang: Lang;
  content: LegalPageContent;
}

const updatedLabels: Record<Lang, string> = {
  fr: 'Dernière mise à jour',
  es: 'Última actualización',
  ar: 'آخر تحديث',
};

export default function LegalPage({ lang, content }: LegalPageProps) {
  return (
    <article className="px-4 py-12 md:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="mb-8 text-sm text-zinc-600">
          {updatedLabels[lang]} : {content.lastUpdated}
        </p>

        <div className="space-y-10">
          {content.sections.map((section) => (
            <section key={section.title} className="glass-card p-6 md:p-8">
              <h2 className="mb-4 text-xl font-semibold text-zinc-100">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="leading-relaxed text-zinc-400">
                    {p}
                  </p>
                ))}
              </div>
              {section.list && (
                <ul className="mt-4 list-inside list-disc space-y-2 text-zinc-400">
                  {section.list.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
