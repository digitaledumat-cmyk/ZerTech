import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import { resolveLang, buildPageMetadata } from '@/lib/page-helpers';
import { getBlogContent } from '@/lib/pages-content';
import { getBlogPostsByLang, getReadTime } from '@/lib/blog-data';
import { ROUTES } from '@/lib/routes';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolveLang(params);
  const content = getBlogContent(lang);
  return buildPageMetadata(lang, content.title, content.description, ROUTES.blog);
}

export default async function BlogPage({ params }: PageProps) {
  const lang = await resolveLang(params);
  const content = getBlogContent(lang);
  const posts = getBlogPostsByLang(lang);

  return (
    <PageWrapper>
      <PageHeader title={content.title} description={content.description} />
      <main className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mb-10 text-zinc-400">{content.intro}</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="glass-card flex flex-col overflow-hidden transition-colors hover:border-primary/30"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg font-semibold text-zinc-100">
                    <Link
                      href={`/${lang}/blog/${post.slug}`}
                      className="transition-colors hover:text-primary"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                    {post.description}
                  </p>
                  <footer className="mt-4 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-zinc-600">
                    <time dateTime={post.date}>
                      {content.published}{' '}
                      {new Date(post.date).toLocaleDateString(
                        lang === 'ar' ? 'ar-MA' : lang === 'es' ? 'es-ES' : 'fr-FR',
                      )}
                    </time>
                    <span>{getReadTime(post)} min</span>
                  </footer>
                  <Link
                    href={`/${lang}/blog/${post.slug}`}
                    className="mt-4 text-sm font-medium text-primary transition-colors hover:text-accent"
                  >
                    {content.readMore} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
