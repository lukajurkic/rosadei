import Link from 'next/link'
import { Sparkles, ArrowRight, Palette } from 'lucide-react'

export function PersonalizeCtaBanner() {
  return (
    <section className="px-5 pt-16 pb-6 sm:px-8 sm:pt-20 sm:pb-8">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-rose-200/60 bg-gradient-to-br from-white/70 via-rose-50/40 to-white/60 p-8 shadow-lg shadow-rose-900/10 backdrop-blur-md sm:p-12">
          {/* Accent glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-rose-200/30 blur-3xl"
          />

          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/60 bg-white/70 px-3.5 py-1 text-[0.62rem] tracking-[0.24em] text-foreground/75 uppercase backdrop-blur-sm">
                <Palette className="size-3 text-gold" />
                Personalizacija po mjeri
              </span>

              <h3 className="mt-4 font-serif text-3xl font-light leading-tight text-foreground sm:text-4xl">
                Prilagodite svaki detalj po vašoj želji
              </h3>

              <p className="mt-3 leading-relaxed text-foreground/75 text-sm sm:text-base">
                Odaberite boje svilenih traka, ukrasni papir, elegantne box kutije i posebne dodatke poput privjesaka ili krunica za potpuno unikatan poklon.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-[0.65rem] tracking-[0.16em] uppercase text-foreground/60">
                <span className="rounded-md border border-rose-200/50 bg-white/60 px-2.5 py-1">Dodatci</span>
                <span className="rounded-md border border-rose-200/50 bg-white/60 px-2.5 py-1">Boje traka</span>
                <span className="rounded-md border border-rose-200/50 bg-white/60 px-2.5 py-1">Ukrasni papir</span>
                <span className="rounded-md border border-rose-200/50 bg-white/60 px-2.5 py-1">Box kutije</span>
              </div>
            </div>

            <Link
              href="/personaliziraj"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-gold/70 bg-white/90 px-8 py-3.5 text-[0.7rem] tracking-[0.22em] text-foreground uppercase shadow-md transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-white hover:shadow-lg focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
            >
              Istraži opcije
              <ArrowRight className="size-4 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
