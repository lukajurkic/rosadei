import { CategoryGalleries } from '@/components/category-galleries'
import { HeroSection } from '@/components/hero-section'
import { PersonalizeCtaBanner } from '@/components/personalize-cta-banner'
import { OrderCtaBanner } from '@/components/order-cta-banner'

export default function Page() {
  return (
    <main>
      <HeroSection />
      <CategoryGalleries />
      <PersonalizeCtaBanner />
      <OrderCtaBanner />
    </main>
  )
}
