import { Mail } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import type { Dictionary } from '@/lib/dictionaries'
import { cn } from '@/lib/utils'

const CONTACT_EMAIL = 'office@bitely.at'

/* The site is a static export (GitHub Pages), so there is no server to receive
   a form. The button opens the visitor's mail app with a prefilled message. */
export function DemoCta({ dict }: { dict: Dictionary['demo'] }) {
  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    dict.mailSubject,
  )}&body=${encodeURIComponent(dict.mailBody)}`

  return (
    <section id="demo" className="border-t bg-background">
      <div className="mx-auto max-w-2xl px-6 py-16 text-center md:py-32">
        <h2 className="text-balance text-4xl font-medium tracking-tight lg:text-5xl">
          {dict.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-balance text-muted-foreground">
          {dict.intro}
        </p>
        <a
          href={href}
          className={cn(
            buttonVariants({ size: 'lg' }),
            'mt-10 h-11 rounded-xl px-8 text-base',
          )}
        >
          <Mail className="size-4" strokeWidth={2} aria-hidden="true" />
          {dict.cta}
        </a>
        <p className="mt-4 text-sm text-muted-foreground">{dict.note}</p>
      </div>
    </section>
  )
}
