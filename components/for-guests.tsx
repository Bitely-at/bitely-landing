import Image from 'next/image'

import type { Dictionary } from '@/lib/dictionaries'

export function ForGuests({ dict }: { dict: Dictionary['forGuests'] }) {
  return (
    <section id="for-guests" className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-sm text-muted-foreground">{dict.eyebrow}</p>
            <h2 className="mt-3 text-balance text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
              {dict.headline}
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              {dict.intro}
            </p>

            <div className="group mt-8 overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/guest-phone.png"
                alt={dict.imageAlt}
                width={720}
                height={540}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          <dl className="flex flex-col gap-3">
            {dict.points.map((p) => (
              <div
                key={p.label}
                className="group rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
              >
                <dt className="text-xl font-medium text-foreground transition-colors group-hover:text-primary">
                  {p.label}
                </dt>
                <dd className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
