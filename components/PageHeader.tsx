interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-white/5 bg-zinc-950/50 px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 md:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">{description}</p>
        )}
      </div>
    </div>
  );
}
