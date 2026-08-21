import { testimonials } from "@/lib/mockData";

function Stars({ count }: { count: number }) {
  return (
    <div className="text-amber-400" aria-label={`${count} von 5 Sternen`}>
      {"★".repeat(count)}
      {"☆".repeat(5 - count)}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section id="social-proof" className="bg-white px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          Was unsere Kunden sagen
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6"
            >
              <Stars count={t.stars} />
              <blockquote className="mt-4 flex-1 text-zinc-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold text-zinc-900">{t.name}</span>
                <span className="text-zinc-500">
                  , {t.role}, {t.location}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
