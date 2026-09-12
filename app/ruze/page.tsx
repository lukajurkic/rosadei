import type { Metadata } from 'next'
import { CategoryGalleries } from '@/projects/ruze/components/category-galleries'
import { HeroSection } from '@/projects/ruze/components/hero-section'
import { PersonalizeCtaBanner } from '@/projects/ruze/components/personalize-cta-banner'
import { OrderCtaBanner } from '@/projects/ruze/components/order-cta-banner'
import { getImagesFromFolder } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Ruže i Buketi - Rosa Dei',
  description:
    'Po slici prirode, napravljeno da traje. Naši prepoznatljivi ručno rađeni buketi od satena, krunice i personalizirani aranžmani.',
}

export default function RuzePage() {
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
