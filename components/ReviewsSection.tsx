import type { Translations } from '@/lib/types';

interface ReviewsSectionProps {
  reviews: Translations['reviews'];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} étoiles`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-lg ${i < rating ? 'text-amber-400' : 'text-zinc-600'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section className="px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{reviews.title}</h2>
          <div className="mt-4 flex items-center justify-center gap-3">
            <StarRating rating={5} />
            <span className="text-zinc-400">{reviews.reviewsCount}</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.items.map((review) => (
            <article
              key={`${review.name}-${review.city}`}
              className="glass-card flex flex-col p-6 transition-colors hover:border-amber-400/20"
            >
              <StarRating rating={review.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-4 border-t border-white/5 pt-4">
                <p className="font-medium text-zinc-200">{review.name}</p>
                <p className="text-xs text-zinc-500">
                  {review.city}, {review.country}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
