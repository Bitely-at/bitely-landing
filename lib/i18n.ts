/* Supported languages. German is the default because most of our restaurants
   are in Austria and Germany; English stays available for everyone else. */

export const locales = ['de', 'en'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'de'

/* Remembers the language a visitor last looked at, so "/" sends them back to
   it instead of re-guessing from the browser every time. */
export const LOCALE_COOKIE = 'NEXT_LOCALE'

export function hasLocale(value: string | null | undefined): value is Locale {
  return locales.includes(value as Locale)
}

/* Names shown in the switcher, each written in its own language. */
export const localeNames: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
}
