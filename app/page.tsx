import type { Metadata } from 'next'
import { RootRedirect } from '@/projects/landing/components/root-redirect'

export const metadata: Metadata = {
  title: 'Rosa Dei - Studio za unikatne rukotvorine i aranžmane',
  description:
    'Dobrodošli u Rosa Dei. Otkrijte naša različita područja stručnosti: ručno rađene ruže od satena, personalizirane aranžmane i jedinstvene poklone.',
}

/**
 * ==============================================================================
 * ROSA DEI - GLAVNA POČETNA STRANICA (STARTING PAGE LAYER)
 * ==============================================================================
 *
 * 📌 TRENUTNI STATUS:
 * Ova stranica je novi početni sloj (portal) za Rosa Dei koji će u budućnosti
 * predstavljati sva područja stručnosti (npr. Ruže od satena, Vjenčani ukrasi,
 * Radionice, itd.).
 *
 * Dok se novi dizajn s v0 by Vercel ne implementira, ova stranica automatski
 * preusmjerava sve posjetitelje na: /ruze (gdje se nalazi trenutna ponuda buketa).
 *
 * ------------------------------------------------------------------------------
 * 🛠️ UPUTE ZA INTEGRACIJU NOVOG v0 BY VERCEL DIZAJNA:
 * ------------------------------------------------------------------------------
 * 1. Generirajte dizajn na v0.dev (vidi detaljni vodič u docs/V0_INTEGRATION_GUIDE.md).
 * 2. Ako v0 izradi nove komponente, spremite ih u mapu:
 *      projects/landing/components/<naziv-komponente>.tsx
 * 3. U ovoj datoteci (app/page.tsx):
 *    a) Uklonite ili zakomentirajte komponentu <RootRedirect target="/ruze" />
 *    b) Uvezite nove komponente (npr. HeroPortal, ExpertiseGrid, CtaSection, itd.)
 *    c) Povežite kartice pojedinih područja na odgovarajuće rute:
 *         - Ruže i buketi: href="/ruze"
 *         - Personalizacija ruža: href="/ruze/personaliziraj"
 *         - Narudžbe i kontakti: href="/ruze/kontakti-i-narudzbe"
 *         - Buduća nova područja: href="/<novo-podrucje>"
 *
 * Detaljan tutorial: pogledajte datoteku docs/V0_INTEGRATION_GUIDE.md
 * ==============================================================================
 */

export default function HomePage() {
  return (
    <>
      {/* 
        ========================================================================
        AUTOMATSKO PREUSMJERAVANJE NA /ruze
        Uklonite ili zakomentirajte sljedeći redak kada novi v0 dizajn bude spreman:
        ========================================================================
      */}
      <RootRedirect target="/ruze" />

      {/* 
        ========================================================================
        PREDLOŽAK ZA NOVI v0 DIZAJN (PLACEHOLDER ZA NOVI POČETNI EKRAN):
        Ovdje možete montirati novu početnu stranicu za sva područja stručnosti.
        ========================================================================
      */}
      <main className="relative mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-5 py-20 text-center">
        {/* Fallback za posjetitelje bez JavaScripta ili dok traje preusmjeravanje */}
        <div className="rounded-2xl border border-rose-200/50 bg-white/60 p-8 shadow-lg shadow-rose-900/5 backdrop-blur-md">
          <p className="text-xs tracking-[0.24em] text-foreground/50 uppercase">
            Rosa Dei Studio
          </p>
          <h1 className="mt-3 font-serif text-3xl font-light text-foreground sm:text-4xl">
            Preusmjeravanje na ponudu...
          </h1>
          <p className="mt-3 text-sm text-foreground/70">
            Ako vas preglednik ne preusmjeri automatski, kliknite na poveznicu ispod:
          </p>
          <div className="mt-6">
            <a
              href="/ruze"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-[0.7rem] tracking-[0.2em] text-primary-foreground uppercase shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-900/15"
            >
              Nastavi na ponudu ruža &rarr;
            </a>
          </div>
        </div>

        {/*
          Primjer strukture za v0 dizajn:
          <HeroPortalSection />
          <ExpertiseAreasGrid />
          <AboutStudioSection />
        */}
      </main>
    </>
  )
}
