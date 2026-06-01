'use client';

import { useState } from 'react';
import type { HomeContent } from '@/lib/home-content';

interface Props {
  guide: HomeContent['guide'];
  faq: HomeContent['faq'];
}

function AccordionBlock({
  title,
  items,
}: {
  title: string;
  items: { question: string; answer: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <h2 className="title-gradient mb-2 text-center text-2xl font-bold md:text-start md:text-3xl">{title}</h2>
      <div className="orange-highlight mb-6 mx-auto md:mx-0" aria-hidden="true" />
      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.question}
              className="pricing-card overflow-hidden transition-all duration-300 hover:border-blue-600/20"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-medium text-zinc-100 md:text-base">{item.question}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-600/20 bg-blue-600/10 text-blue-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="border-t border-white/10 px-5 pb-4 pt-3 text-sm leading-relaxed text-zinc-400">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function HomeAccordions({ guide, faq }: Props) {

  return (
    <section id="faq" className="px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-10">
        <AccordionBlock title={guide.title} items={guide.items} />
        <AccordionBlock title={faq.title} items={faq.items} />
      </div>
    </section>
  );
}
