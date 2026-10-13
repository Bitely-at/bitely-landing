import type { Locale } from '@/lib/i18n'

/* Public address of this landing page. Canonical URLs, the sitemap, social
   previews and structured data are all built from it. */
export const siteUrl = 'https://bitely.at'

export const siteName = 'Bitely'

export const contactEmail = 'office@bitely.at'

/* Open Graph wants language_TERRITORY. Austria is our home market. */
export const ogLocales: Record<Locale, string> = {
  de: 'de_AT',
  en: 'en_US',
}
