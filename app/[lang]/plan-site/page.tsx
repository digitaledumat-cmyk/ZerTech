import type { Metadata } from 'next';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import { resolveLang, buildPageMetadata } from '@/lib/page-helpers';
import { getPlanSiteTranslations } from '@/lib/footer-translations';
import { ROUTES } from '@/lib/routes';
import { getBlogPostsByLang } from '@/lib/blog-data';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolveLang(params);
  const content = getPlanSiteTranslations(lang);
  return buildPageMetadata(lang, content.title, content.description, ROUTES.planSite);
}

export default async function PlanSitePage({ params }: PageProps) {
  const lang = await resolveLang(params);
  const content = getPlanSiteTranslations(lang);

  const blogLabel =
    lang === 'fr' ? 'Articles du blog' : lang === 'es' ? 'Artículos del blog' : 'مقالات المدونة';

  return (
    <PageWrapper>
      <PageHeader title={content.title} description={content.description} />
      <main className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-3xl space-y-10">
          {content.sections.map((section) => (
            <section key={section.title} className="glass-card p-6 md:p-8">
              <h2 className="mb-4 text-lg font-semibold text-zinc-200">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.route || 'home'}>
                    <Link
                      href={link.route ? `/${lang}/${link.route}` : `/${lang}`}
                      className="text-sm text-zinc-400 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="glass-card p-6 md:p-8">
            <h2 className="mb-4 text-lg font-semibold text-zinc-200">{blogLabel}</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${lang}/blog`}
                  className="text-sm text-zinc-400 transition-colors hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              {getBlogPostsByLang(lang).map((post) => (
                <li key={post.id}>
                  <Link
                    href={`/${lang}/blog/${post.slug}`}
                    className="text-sm text-zinc-400 transition-colors hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <div className="text-center">
            <a
              href="/sitemap.xml"
              className="inline-flex rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-zinc-300 transition-colors hover:border-primary/40 hover:text-primary"
            >
              {content.xmlSitemap}
            </a>
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
