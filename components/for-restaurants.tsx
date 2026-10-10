import { Sparkles, ScanLine, LayoutGrid } from 'lucide-react'

import type { Dictionary } from '@/lib/dictionaries'
import type { Locale } from '@/lib/i18n'

/* Scores line up by position with the dish names in the dictionary. */
const dishScores = [4.8, 4.6, 4.3, 3.2, 2.4]

const featureIcons = [LayoutGrid, Sparkles, ScanLine]

export function ForRestaurants({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary['forRestaurants']
}) {
  const score = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })

  return (
    <section id="for-restaurants" className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-32">
        <div className="max-w-2xl">
          <p className="text-sm text-muted-foreground">{dict.eyebrow}</p>
          <h2 className="mt-3 text-balance text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
            {dict.headline}
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Dashboard mockup */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <p className="text-base font-medium text-foreground">{dict.dashboardTitle}</p>
              <span className="text-sm text-muted-foreground">{dict.reviews}</span>
            </div>

            <div className="space-y-4 px-6 py-6">
              {dict.dishes.map((dish, i) => {
                const value = dishScores[i]
                return (
                  <div key={dish} className="group">
                    <div className="mb-1.5 flex items-baseline justify-between">
                      <span className="text-sm text-foreground">{dish}</span>
                      <span className="text-sm font-medium tabular-nums text-foreground">
                        {score.format(value)}
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted/50">
                      <div
                        className={
                          value < 3.5
                            ? 'h-full rounded-full bg-muted-foreground/30 transition-all duration-500'
                            : 'h-full rounded-full bg-primary transition-all duration-500'
                        }
                        style={{ width: `${(value / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* AI highlight callout */}
            <div className="border-t border-border bg-muted/50 px-6 py-5">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-sm font-medium">{dict.highlightTitle}</span>
              </div>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {dict.highlightBody}
              </p>
            </div>
          </div>

          {/* Feature list */}
          <div className="flex flex-col justify-center gap-3">
            {dict.features.map((f, i) => {
              const Icon = featureIcons[i]
              return (
                <div
                  key={f.title}
                  className="group flex gap-4 rounded-xl border border-border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {f.body}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
