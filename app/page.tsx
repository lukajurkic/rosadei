import type { Metadata } from 'next'
import { Navbar } from '@/projects/landing/components/Navbar'
import { Hero } from '@/projects/landing/components/Hero'
import { AboutOverview } from '@/projects/landing/components/AboutOverview'
import { DivisionsShowcase } from '@/projects/landing/components/DivisionsShowcase'
import { Leadership } from '@/projects/landing/components/Leadership'
import { Footer } from '@/projects/landing/components/footer'

export const metadata: Metadata = {
  title: 'Axiom Group — One Standard Across Every Discipline',
  description:
    'A multi-disciplinary operating group uniting craft, property care, and digital engineering under one exacting standard.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <AboutOverview />
        <DivisionsShowcase />
        <Leadership />
      </main>
      <Footer />
    </div>
  )
}
