/* Supported languages. German is the default because most of our restaurants
   are in Austria and Germany; English stays available for everyone else. */

export const locales = ['de', 'en'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'de'

export function hasLocale(value: string | null | undefined): value is Locale {
  return locales.includes(value as Locale)
}

/* Names shown in the switcher, each written in its own language. */
export const localeNames: Record<Locale, string> = {
  de: 'Deutsch',
  en: 'English',
}
