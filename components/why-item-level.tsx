import type { Dictionary } from '@/lib/dictionaries'

export function WhyItemLevel({ dict }: { dict: Dictionary['why'] }) {
  return (
    <section id="why" className="border-t border-border bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-32">
        <p className="text-sm text-muted-foreground">{dict.eyebrow}</p>
        <p className="mt-8 text-balance text-3xl font-medium leading-[1.3] tracking-tight text-foreground md:text-4xl">
          {dict.quote}
        </p>
        <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
          {dict.body}
        </p>
      </div>
    </section>
  )
}
