import type { Metadata } from 'next'
import { OrderingJourney } from '@/components/ordering-journey'
import { ContactSection } from '@/components/contact-footer'

export const metadata: Metadata = {
  title: 'Kontakt i Narudžbe - Rosa Dei',
  description:
    'Saznajte kako naručiti ručno rađene aranžmane te stupite u kontakt s nama.',
}

export default function KontaktiINarudzbePage() {
  return (
    <main className="py-8 sm:py-12">
      <OrderingJourney />
      <ContactSection />
    </main>
  )
}
