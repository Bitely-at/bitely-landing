import { notFound } from 'next/navigation'

import { HeroHeader, HeroSection } from '@/components/ui/hero-section-1'
import { HowItWorks } from '@/components/how-it-works'
import { ForGuests } from '@/components/for-guests'
import { ForRestaurants } from '@/components/for-restaurants'
import { MultiLocation } from '@/components/multi-location'
import { WhyItemLevel } from '@/components/why-item-level'
import { DemoCta } from '@/components/demo-cta'
import { SiteFooter } from '@/components/site-footer'
import { getDictionary } from '@/lib/dictionaries'
import { hasLocale } from '@/lib/i18n'
import { contactEmail, siteName, siteUrl } from '@/lib/site'

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = getDictionary(lang)

  /* Tells search engines who runs the site and what Bitely is, so results can
     show the brand, logo and product details. */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: `${siteUrl}/images/logo-bitely-wordmark.png`,
        email: contactEmail,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        inLanguage: ['de', 'en'],
        publisher: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'SoftwareApplication',
        name: siteName,
        url: `${siteUrl}/${lang}`,
        description: dict.meta.description,
        inLanguage: lang,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        publisher: { '@id': `${siteUrl}/#organization` },
      },
    ],
  }

  return (
    <div className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <HeroHeader locale={lang} dict={dict.nav} />
      <main>
        <HeroSection dict={dict.hero} carousel={dict.carousel} />
        <HowItWorks dict={dict.howItWorks} />
        <ForGuests dict={dict.forGuests} />
        <ForRestaurants locale={lang} dict={dict.forRestaurants} />
        <MultiLocation dict={dict.multiLocation} />
        <WhyItemLevel dict={dict.why} />
        <DemoCta dict={dict.demo} />
      </main>
      <SiteFooter
        locale={lang}
        dict={dict.footer}
        languageLabel={dict.nav.language}
      />
    </div>
  )
}
