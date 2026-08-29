import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      {/* Atmospheric background image, kept quiet so it never reads like a food-blog block */}
      <Image
        src="/images/hero-table.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
        aria-hidden="true"
      />
      {/* Layered gradient overlays for readable, minimalist contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-5 pb-28 pt-28 md:px-8 md:pb-36 md:pt-36">
        <div className="max-w-xl">
          <p className="mb-6 text-sm text-paper/70">
            Made for the table
          </p>
          <h1 className="text-balance font-serif text-5xl font-medium leading-[1.08] tracking-tight text-paper md:text-6xl">
            Feedback on every dish, not just the meal.
          </h1>
          <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-paper/70">
            Guests scan a QR code at the table, rate each dish they ordered, and
            earn loyalty points. Meanwhile you see exactly which plates are
            winning and which need work.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#demo"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-all hover:bg-accent-brand hover:text-accent-brand-foreground"
            >
              Request a demo
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                &rarr;
              </span>
            </Link>
            <Link
              href="#how-it-works"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-paper/25 px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper/60"
            >
              See how it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
