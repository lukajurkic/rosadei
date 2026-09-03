import type { Metadata } from 'next'
import { CustomizationOptions } from '@/components/customization-options'
import { OrderCtaBanner } from '@/components/order-cta-banner'

export const metadata: Metadata = {
  title: 'Personaliziraj - Rosa Dei',
  description:
    'Odaberite svilene trake, ukrasni papir, kutije i posebne dodatke za vaš unikatan aranžman.',
}

export default function PersonalizirajPage() {
  return (
    <main className="py-8 sm:py-12">
      <CustomizationOptions />
      <OrderCtaBanner />
    </main>
  )
}
