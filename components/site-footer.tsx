import Link from 'next/link'

import { LanguageSwitch } from '@/components/language-switch'
import { Logo } from '@/components/ui/logo'
import type { Dictionary } from '@/lib/dictionaries'
import type { Locale } from '@/lib/i18n'

/* Labels for the first three come from the dictionary, in this order. */
const linkHrefs = ['#how-it-works', '#for-restaurants', '#demo']

export function SiteFooter({
  locale,
  dict,
  languageLabel,
}: {
  locale: Locale
  dict: Dictionary['footer']
  languageLabel: string
}) {
  const links = [
    ...linkHrefs.map((href, i) => ({ href, label: dict.links[i] })),
    { href: 'mailto:office@bitely.at', label: 'office@bitely.at' },
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link
            href="#top"
            aria-label={dict.backToTop}
            className="transition-opacity hover:opacity-60"
          >
            <Logo className="h-6" />
          </Link>

          <nav
            aria-label={dict.nav}
            className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative py-1 transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>{dict.poweredBy}</span>
          <LanguageSwitch locale={locale} label={languageLabel} className="-ml-1.5 sm:ml-0" />
          <span>&copy; {new Date().getFullYear()} {dict.rights}</span>
        </div>
      </div>
    </footer>
  )
}
