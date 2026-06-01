import type { Metadata } from 'next';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import { buildPageMetadata } from '@/lib/page-helpers';
import { getPlanSiteContent } from '@/lib/nav-translations';
import { buildHref } from '@/lib/routes';
import { ROUTES } from '@/lib/routes';
import { getBlogPosts } from '@/lib/blog-data';

export async function generateMetadata(): Promise<Metadata> {
  const content = getPlanSiteContent();
  return buildPageMetadata(content.title, content.description, ROUTES.planSite);
}

export default function PlanSitePage() {
  const content = getPlanSiteContent();

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
                      href={buildHref(link.route)}
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
            <h2 className="mb-4 text-lg font-semibold text-zinc-200">Articles du blog</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-zinc-400 transition-colors hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              {getBlogPosts().map((post) => (
                <li key={post.id}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-zinc-400 transition-colors hover:text-primary"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </PageWrapper>
  );
}
