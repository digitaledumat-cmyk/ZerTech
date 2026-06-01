import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageWrapper from '@/components/PageWrapper';
import { buildPageMetadata } from '@/lib/page-helpers';
import { getBlogContent } from '@/lib/pages-content';
import { getBlogPost, getBlogStaticParams, getReadTime } from '@/lib/blog-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getBlogStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildPageMetadata(post.title, post.description, `blog/${slug}`);
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const labels = getBlogContent();

  if (!post) notFound();

  const readTime = getReadTime(post);

  return (
    <PageWrapper>
      <article className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex text-sm text-primary transition-colors hover:text-accent"
          >
            ← {labels.backToBlog}
          </Link>

          <header className="mb-10 border-b border-white/5 pb-8">
            <div className="glass-card mb-6 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={630}
                priority
                className="h-auto w-full"
              />
            </div>
            <h1 className="text-3xl font-bold text-zinc-100 md:text-4xl">{post.title}</h1>
            <p className="mt-3 text-zinc-400">{post.description}</p>
            <div className="mt-4 flex gap-4 text-sm text-zinc-500">
              <time dateTime={post.date}>
                {labels.published}{' '}
                {new Date(post.date).toLocaleDateString('fr-FR')}
              </time>
              <span>{readTime} min</span>
            </div>
          </header>

          <div className="space-y-4">
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 60)} className="leading-relaxed text-zinc-400">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}
