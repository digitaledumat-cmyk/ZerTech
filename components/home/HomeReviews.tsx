import type { HomeContent } from '@/lib/home-content';

interface Props {
  reviews: HomeContent['reviews'];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`text-lg ${i < rating ? 'text-orange-400' : 'text-zinc-700'}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function HomeReviews({ reviews }: Props) {

  return (
    <section className="px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="title-gradient text-2xl font-bold md:text-3xl">{reviews.title}</h2>
          <div className="orange-highlight mx-auto mt-3" aria-hidden="true" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-500">
            {reviews.reviewsCount} — {reviews.intro}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <StarRating rating={5} />
            <span className="text-sm text-zinc-400">{reviews.reviewsCount}</span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.items.map((review) => (
            <article
              key={`${review.name}-${review.city}`}
              className="pricing-card flex flex-col p-6 transition-all duration-300 hover:border-orange-500/25 hover:shadow-[0_0_30px_rgba(249,115,22,0.08)]"
            >
              <StarRating rating={review.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-300">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="mt-5 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{review.name}</p>
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
