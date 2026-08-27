import { Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pt-20 pb-24 sm:px-8 sm:pt-28 sm:pb-32">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-6rem] left-1/2 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0)_70%)] blur-2xl"
      />

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-rose-200/50 bg-white/50 px-4 py-1.5 text-[0.65rem] tracking-[0.28em] text-foreground/70 uppercase backdrop-blur-sm">
          <Sparkles className="size-3.5 text-gold" />
          RosaDei obrt
        </span>

        <h1 className="font-serif text-4xl leading-[1.1] font-light tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
          Po slici prirode
          <span className="block italic">Napravljeno daupdate header and add nre images to gallerz traje</span>
        </h1>

        <p className="mt-7 max-w-xl leading-relaxed text-pretty text-foreground/70 sm:text-lg">
        Načini kako razveseliti velike i male, stare i mlade, žene i muškarce.
        Svaki od naših proizvoda je ručno izrađen od visokokvalitenih materijala.
        Razni pokloni za razne prigode.
        </p>

        <a
          href="#collections"
          className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-3.5 text-[0.7rem] tracking-[0.22em] text-primary-foreground uppercase shadow-lg shadow-rose-900/10 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-rose-900/15"
        >
          Istraži ponudu
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </a>

        <div className="mt-14 flex items-center gap-3 text-[0.62rem] tracking-[0.24em] text-foreground/45 uppercase">
          <span className="h-px w-8 bg-foreground/20" />
          Svaki pojedinačno i ručno rađen
          <span className="h-px w-8 bg-foreground/20" />
        </div>
      </div>
    </section>
  )
}
