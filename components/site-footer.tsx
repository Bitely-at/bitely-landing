import Link from 'next/link'

import { Logo } from '@/components/ui/logo'

const links = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#for-restaurants', label: 'For restaurants' },
  { href: '#demo', label: 'Demo' },
  { href: 'mailto:hello@bitely.at', label: 'hello@bitely.at' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link
            href="#top"
            aria-label="Bitely, back to top"
            className="transition-opacity hover:opacity-60"
          >
            <Logo className="h-6" />
          </Link>

          <nav
            aria-label="Footer"
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
          <span>Powered by Bitely</span>
          <span>&copy; {new Date().getFullYear()} Bitely. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
