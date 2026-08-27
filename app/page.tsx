import { CategoryGalleries } from '@/components/category-galleries'
import { ContactFooter } from '@/components/contact-footer'
import { CustomizationOptions } from '@/components/customization-options'
import { HeroSection } from '@/components/hero-section'
import { OrderingJourney } from '@/components/ordering-journey'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <div id="top" className="rosa-canvas rosa-grain relative min-h-screen">
      <div className="relative z-10">
        <SiteHeader />
        <main>
          <HeroSection />
          <CategoryGalleries />
          {/* <CustomizationOptions /> */}
          <OrderingJourney />
          <ContactFooter />
        </main>
      </div>
    </div>
  )
}
