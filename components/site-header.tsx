import Link from 'next/link'

const navLinks = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#for-restaurants', label: 'For restaurants' },
  { href: '#why', label: 'Why Bitely' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 md:px-8">
        <Link
          href="#top"
          className="font-serif text-xl font-semibold tracking-tight text-ink transition-opacity hover:opacity-60"
        >
          Bitely<span className="text-accent-brand">.</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-9 text-sm text-muted-foreground md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-1 transition-colors hover:text-ink"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-accent-brand transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <Link
          href="#demo"
          className="group inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-all hover:border-accent-brand hover:text-accent-brand"
        >
          Request a demo
          <span className="transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
            &rarr;
          </span>
        </Link>
      </div>
    </header>
  )
}
