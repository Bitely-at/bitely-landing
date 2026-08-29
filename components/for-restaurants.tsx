import { Sparkles, ScanLine, LayoutGrid } from 'lucide-react'

const dishRatings = [
  { dish: 'Seared Scallops', score: 4.8 },
  { dish: 'Ribeye, aged 40 days', score: 4.6 },
  { dish: 'Burrata & heirloom', score: 4.3 },
  { dish: 'Truffle tagliatelle', score: 3.2 },
  { dish: 'Lemon tart', score: 2.4 },
]

const features = [
  {
    icon: LayoutGrid,
    title: 'Per-dish rating breakdown',
    body: 'See exactly which items are underperforming, not a single blurred average for the whole visit.',
  },
  {
    icon: Sparkles,
    title: 'AI weekly highlight summary',
    body: 'Every Monday, a plain-English recap of what guests loved, what slipped, and what to act on.',
  },
  {
    icon: ScanLine,
    title: 'Receipt-scan order entry',
    body: 'Staff scan a receipt to seed the order, and the table auto-resets once the guest has rated.',
  },
]

export function ForRestaurants() {
  return (
    <section id="for-restaurants" className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-32">
        <div className="max-w-2xl">
          <p className="text-sm text-muted-foreground">For restaurants</p>
          <h2 className="mt-3 text-balance text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
            A live dashboard that names the dish, not just the score.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Dashboard mockup */}
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <p className="text-base font-medium text-foreground">This week&apos;s dish ratings</p>
              <span className="text-sm text-muted-foreground">412 reviews</span>
            </div>

            <div className="space-y-4 px-6 py-6">
              {dishRatings.map((d) => (
                <div key={d.dish} className="group">
                  <div className="mb-1.5 flex items-baseline justify-between">
                    <span className="text-sm text-foreground">{d.dish}</span>
                    <span className="text-sm font-medium tabular-nums text-foreground">
                      {d.score.toFixed(1)}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted/50">
                    <div
                      className={
                        d.score < 3.5
                          ? 'h-full rounded-full bg-muted-foreground/30 transition-all duration-500'
                          : 'h-full rounded-full bg-primary transition-all duration-500'
                      }
                      style={{ width: `${(d.score / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* AI highlight callout */}
            <div className="border-t border-border bg-muted/50 px-6 py-5">
              <div className="flex items-center gap-2 text-primary">
                <Sparkles className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                <span className="text-sm font-medium">AI weekly highlight</span>
              </div>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                Scallops are your standout again. The lemon tart dropped to 2.4,
                and three guests flagged it as too sweet. Worth a look before the weekend.
              </p>
            </div>
          </div>

          {/* Feature list */}
          <div className="flex flex-col justify-center gap-3">
            {features.map((f) => {
              const Icon = f.icon
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
