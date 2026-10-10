import type { Dictionary } from '@/lib/dictionaries'

export function MultiLocation({ dict }: { dict: Dictionary['multiLocation'] }) {
  return (
    <section id="multi-location" className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-baseline lg:gap-16">
          <p className="text-sm text-muted-foreground lg:pt-3">{dict.eyebrow}</p>
          <div>
            <h2 className="text-balance text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
              {dict.headline}
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {dict.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
