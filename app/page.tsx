import { CategoryGalleries } from '@/components/category-galleries'
import { HeroSection } from '@/components/hero-section'
import { PersonalizeCtaBanner } from '@/components/personalize-cta-banner'
import { OrderCtaBanner } from '@/components/order-cta-banner'
import { getImagesFromFolder } from '@/lib/images'

export default function Page() {
  const galleryImages = getImagesFromFolder('gallery')

  return (
    <main>
      <HeroSection galleryImages={galleryImages} />
      <CategoryGalleries />
      <PersonalizeCtaBanner />
      <OrderCtaBanner />
    </main>
  )
}
