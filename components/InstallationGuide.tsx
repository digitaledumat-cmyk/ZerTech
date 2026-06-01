import Accordion from '@/components/Accordion';
import type { Translations } from '@/lib/types';

interface InstallationGuideProps {
  installation: Translations['installation'];
}

export default function InstallationGuide({ installation }: InstallationGuideProps) {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
          {installation.title}
        </h2>
        <Accordion items={installation.items} />
      </div>
    </section>
  );
}
