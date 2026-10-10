import { NextResponse, type NextRequest } from 'next/server'

import { LOCALE_COOKIE, defaultLocale, hasLocale, type Locale } from '@/lib/i18n'

const ONE_YEAR = 60 * 60 * 24 * 365

/* Picks the first supported language from Accept-Language, honouring q-values.
   "de-AT" counts as "de". Falls back to German, our main market. */
function preferredLocale(header: string | null): Locale {
  if (!header) return defaultLocale

  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...rest] = part.trim().split(';')
      const q = rest.find((p) => p.trim().startsWith('q='))
      return {
        lang: tag.toLowerCase().split('-')[0],
        q: q ? Number(q.trim().slice(2)) || 0 : 1,
      }
    })
    .sort((a, b) => b.q - a.q)

  const match = ranked.find((entry) => hasLocale(entry.lang))?.lang
  return hasLocale(match) ? match : defaultLocale
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split('/')[1]

  // On /de or /en: remember the choice, so "/" leads back here next time.
  if (hasLocale(first)) {
    const response = NextResponse.next()
    if (request.cookies.get(LOCALE_COOKIE)?.value !== first) {
      response.cookies.set(LOCALE_COOKIE, first, {
        maxAge: ONE_YEAR,
        path: '/',
        sameSite: 'lax',
      })
    }
    return response
  }

  // On "/": send the visitor to their language.
  const saved = request.cookies.get(LOCALE_COOKIE)?.value
  const locale = hasLocale(saved)
    ? saved
    : preferredLocale(request.headers.get('accept-language'))

  const url = request.nextUrl.clone()
  url.pathname = `/${locale}`
  return NextResponse.redirect(url)
}

export const config = {
  /* Only the root and the two language roots. Everything else, including the
     old app paths that netlify.toml forwards to app.bitely.at, is left alone. */
  matcher: ['/', '/de', '/en'],
}
