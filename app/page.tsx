import type { Metadata } from 'next'
import { LanguageProvider } from '@/projects/landing/context/LanguageContext'
import { Navbar } from '@/projects/landing/components/Navbar'
import { Hero } from '@/projects/landing/components/Hero'
import { DivisionsShowcase } from '@/projects/landing/components/DivisionsShowcase'
import { AboutOverview } from '@/projects/landing/components/AboutOverview'
import { Leadership } from '@/projects/landing/components/Leadership'
import { Footer } from '@/projects/landing/components/footer'

export const metadata: Metadata = {
  title: 'RosaDei Grupa — Jedinstven standard kroz svaku disciplinu',
  description:
    'Multidisciplinarna poslovna grupa koja ujedinjuje unikatnu ručnu izradu, održavanje posjeda, digitalna rješenja i organizacijske usluge.',
}

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <DivisionsShowcase />
          <AboutOverview />
          <Leadership />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
