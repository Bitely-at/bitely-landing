import { HeroHeader, HeroSection } from '@/components/ui/hero-section-1'
import { HowItWorks } from '@/components/how-it-works'
import { ForGuests } from '@/components/for-guests'
import { ForRestaurants } from '@/components/for-restaurants'
import { MultiLocation } from '@/components/multi-location'
import { WhyItemLevel } from '@/components/why-item-level'
import { DemoForm } from '@/components/demo-form'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="bg-background">
      <HeroHeader />
      <main>
        <HeroSection />
        <HowItWorks />
        <ForGuests />
        <ForRestaurants />
        <MultiLocation />
        <WhyItemLevel />
        <DemoForm />
      </main>
      <SiteFooter />
    </div>
  )
}
