import Image from 'next/image'

const points = [
  {
    label: 'No account required',
    body: 'Guests can leave dish-by-dish feedback the moment they scan — zero friction, zero sign-up wall.',
  },
  {
    label: 'Optional sign-in to bank points',
    body: 'A quick email or Google sign-in saves loyalty points, so feedback is rewarded on the next visit.',
  },
  {
    label: 'Instant, irreversible redemption',
    body: 'Vouchers are redeemed on the spot — the guest shows a code and staff enter the payout. Done once, done for good.',
  },
]

export function ForGuests() {
  return (
    <section id="for-guests" className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-sm text-muted-foreground">For guests</p>
            <h2 className="mt-3 text-balance text-4xl font-medium tracking-tight text-foreground lg:text-5xl">
              Fast enough to finish before the coffee arrives.
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Bitely is built around the guest&apos;s time. Rating dishes takes
              seconds, and rewards accrue quietly in the background.
            </p>

            <div className="group mt-8 overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/guest-phone.png"
                alt="A guest scanning a QR code at a restaurant table with their phone"
                width={720}
                height={540}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </div>

          <dl className="flex flex-col gap-3">
            {points.map((p) => (
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
