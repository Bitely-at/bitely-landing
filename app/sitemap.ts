import type { MetadataRoute } from 'next'

import { locales } from '@/lib/i18n'
import { legalSlugs } from '@/lib/legal'
import { siteUrl } from '@/lib/site'

/* One entry per language root. Each lists the other as an alternate, so
   search engines treat /de and /en as translations of the same page. */
/* Rendered once at build time: the site is a static export. */
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((lang) => [lang, `${siteUrl}/${lang}`]),
  )

  const home = locales.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
    alternates: { languages },
  }))
  const legal = legalSlugs.flatMap((slug) =>
    locales.map((lang) => ({
      url: `${siteUrl}/${lang}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}/${slug}`])),
      },
    })),
  )
  return [...home, ...legal]
}
