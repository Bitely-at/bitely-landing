import { QrCode, Star, Coins, Ticket } from 'lucide-react'

import type { Dictionary } from '@/lib/dictionaries'

/* One icon per step, in the same order as the steps in the dictionary. */
const stepIcons = [QrCode, Star, Coins, Ticket]

export function HowItWorks({ dict }: { dict: Dictionary['howItWorks'] }) {
  return (
    <section id="how-it-works" className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-32">
        <div className="max-w-2xl">
          <p className="text-sm text-muted-foreground">{dict.eyebrow}</p>
          <h2 className="mt-3 text-balance text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
            {dict.headline}
          </h2>
        </div>

        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {dict.steps.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <li key={step.title} className="group">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="text-2xl font-medium text-muted-foreground/30 transition-colors duration-300 group-hover:text-primary/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
