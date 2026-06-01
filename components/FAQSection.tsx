import Accordion from '@/components/Accordion';
import type { Translations } from '@/lib/types';

interface FAQSectionProps {
  faq: Translations['faq'];
}

export default function FAQSection({ faq }: FAQSectionProps) {
  return (
    <section id="faq" className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          {faq.title}
        </h2>
        <Accordion items={faq.items} />
      </div>
    </section>
  );
}
