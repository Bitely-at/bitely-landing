import type { MetadataRoute } from 'next'

import { locales } from '@/lib/i18n'
import { siteUrl } from '@/lib/site'

/* One entry per language root. Each lists the other as an alternate, so
   search engines treat /de and /en as translations of the same page. */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((lang) => [lang, `${siteUrl}/${lang}`]),
  )

  return locales.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
    alternates: { languages },
  }))
}
