import type { Metadata } from 'next'
import { CustomizationOptions } from '@/components/customization-options'
import { OrderCtaBanner } from '@/components/order-cta-banner'
import { getImagesFromFolder } from '@/lib/images'

export const metadata: Metadata = {
  title: 'Personaliziraj - Rosa Dei',
  description:
    'Odaberite svilene trake, ukrasni papir, kutije i posebne dodatke za vaš unikatan aranžman.',
}

export default function PersonalizirajPage() {
  const images = {
    additions: getImagesFromFolder('customization/additions'),
    ribbons: getImagesFromFolder('customization/ribbons'),
    decorative_paper: getImagesFromFolder('customization/decorative_paper'),
    boxes: getImagesFromFolder('customization/boxes'),
  }

  return (
    <main className="py-8 sm:py-12">
      <CustomizationOptions images={images} />
      <OrderCtaBanner />
    </main>
  )
}

