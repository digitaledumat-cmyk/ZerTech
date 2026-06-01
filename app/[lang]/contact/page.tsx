import type { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import { resolveLang, buildPageMetadata } from '@/lib/page-helpers';
import { getContactContent } from '@/lib/pages-content';
import { ROUTES } from '@/lib/routes';
import { WHATSAPP_NUMBER } from '@/lib/translations';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = await resolveLang(params);
  const content = getContactContent(lang);
  return buildPageMetadata(lang, content.title, content.description, ROUTES.contact);
}

export default async function ContactPage({ params }: PageProps) {
  const lang = await resolveLang(params);
  const content = getContactContent(lang);

  return (
    <PageWrapper>
      <PageHeader title={content.title} description={content.description} />
      <main className="px-4 py-12 md:px-8">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-zinc-400">{content.intro}</p>
            <div className="glass-card space-y-4 p-6">
              <div>
                <h3 className="text-sm font-semibold text-zinc-300">WhatsApp</h3>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-[#25D366] transition-colors hover:underline"
                >
                  {content.coordinates.whatsapp}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-300">Email</h3>
                <a
                  href={`mailto:${content.coordinates.email}`}
                  className="mt-1 block text-primary transition-colors hover:underline"
                >
                  {content.coordinates.email}
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-300">
                  {lang === 'fr' ? 'Disponibilité' : lang === 'es' ? 'Disponibilidad' : 'التوفر'}
                </h3>
                <p className="mt-1 text-zinc-400">{content.coordinates.support}</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 md:p-8">
            <ContactForm t={content} lang={lang} />
          </div>
        </div>
      </main>
    </PageWrapper>
  );
}
