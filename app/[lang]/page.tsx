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

export default async function Page({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = getDictionary(lang)

  return (
    <div className="bg-background">
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
