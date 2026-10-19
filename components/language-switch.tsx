import Link from 'next/link'

import { localeNames, locales, type Locale } from '@/lib/i18n'
import { cn } from '@/lib/utils'

/* "DE | EN" toggle. Plain links to /de and /en, so it works without
   JavaScript and every language has its own crawlable URL. */
export function LanguageSwitch({
  locale,
  label,
  className,
  onNavigate,
  path = '',
}: {
  locale: Locale
  label: string
  className?: string
  onNavigate?: () => void
  /* Sub-page to stay on when switching, e.g. '/datenschutz'. */
  path?: string
}) {
  return (
    <nav
      aria-label={label}
      className={cn('flex items-center gap-1 text-sm', className)}
    >
      {locales.map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          {i > 0 && (
            <span aria-hidden="true" className="text-muted-foreground/40">
              |
            </span>
          )}
          <Link
            href={`/${code}${path}`}
            hrefLang={code}
            lang={code}
            title={localeNames[code]}
            aria-label={localeNames[code]}
            aria-current={code === locale ? 'true' : undefined}
            onClick={onNavigate}
            className={cn(
              'rounded-md px-1.5 py-1 uppercase transition-colors duration-150',
              code === locale
                ? 'font-medium text-foreground'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {code}
          </Link>
        </span>
      ))}
    </nav>
  )
}
