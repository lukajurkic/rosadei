"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { useComingSoonModal } from "@/components/ComingSoonModal";

export const divisions = [
  {
    id: "creative",
    name: "Ruže & Unikatne Rukotvorine",
    tagline: "Po slici prirode — Napravljeno da traje",
    description:
      "Ručno rađeni buketi od najfinijih satenskih traka, elegantni flower boxovi, vječne krunice i personalizirani darovi stvoreni da traju vječno. Svaki komad izrađuje se ručno s posebnom pažnjom prema detaljima.",
    capabilities: [
      "Unikatni buketi i flower box aranžmani",
      "Personalizirane satenske trake s tiskom",
      "Ručno rađene krunice od različitih materijala",
      "Reveri i prigodni pokloni za svečanosti",
    ],
    route: "ruze",
    href: "/ruze",
    buttonLabel: "Istraži kolekciju ruža",
    containerClass: "bg-[#fdf8f5] border-y border-rose-200/60",
    accentClass: "text-gold border-gold/40 bg-white/80",
    image: "/images/roses/combo/combo_2.webp",
    imagePlaceholder: "Rosa Dei unikatni buket i ručno rađeni aranžman od satena",
    isRuze: true,
  },
  /*
  {
    id: "maintenance",
    name: "Održavanje doma i posjeda",
    tagline: "Kompletna briga o imanjima i objektima",
    description:
      "Sveobuhvatno hortikulturno uređenje eksterijera, održavanje posjeda, sezonski programi i očuvanje infrastrukture prostora napravljenih da traju.",
    capabilities: [
      "Hortikultura i uređenje okoliša",
      "Sezonski programi održavanja posjeda",
      "Zaštita i obnova vanjskih struktura",
      "Pouzdan operativni servis objekata",
    ],
    route: "maintenance",
    href: "#divisions",
    buttonLabel: "Saznajte više o održavanju posjeda",
    containerClass: "bg-grounds",
    accentClass: "text-grounds-accent border-grounds-accent/25",
    image: "/images/landing/division-grounds.jpg",
    imagePlaceholder: "Besprijekorno održavano suvremeno imanje",
    isRuze: false,
  },
  */
  {
    id: "digital",
    name: "IT & Digitalna rješenja",
    tagline: "Full-Stack razvoj i digitalna infrastruktura",
    description:
      "Inženjering modernih web aplikacija, skalabilna cloud rješenja, UI/UX sustavi dizajna i kontinuirano tehničko održavanje stvoreno za pouzdan rast.",
    capabilities: [
      "Inženjering modernih web aplikacija",
      "Cloud sustavi i implementacija",
      "Dizajn digitalnih proizvoda i UX sustavi",
      "Tehnička podrška i optimizacija performansi",
    ],
    route: "digital",
    href: "#divisions",
    buttonLabel: "Saznajte više o digitalnim rješenjima",
    containerClass: "bg-digital",
    accentClass: "text-digital-accent border-digital-accent/25",
    image: "/images/landing/division-digital.jpg",
    imagePlaceholder: "Radni prostor modernog softverskog inženjeringa",
    isRuze: false,
  },
  {
    id: "administration",
    name: "Administracija, planiranje i organizacija",
    tagline: "Strateško planiranje i organizacijske usluge",
    description:
      "Strukturirana administrativna podrška, operativno i projektno planiranje te cjelovita organizacijska rješenja za uredno, pouzdano i efikasno poslovanje.",
    capabilities: [
      "Strateško i operativno planiranje",
      "Administrativna i uredska podrška",
      "Koordinacija i upravljanje projektima",
      "Organizacija poslovnih procesa i dokumentacije",
    ],
    route: "administration",
    href: "#divisions",
    buttonLabel: "Saznajte više o administraciji i planiranju",
    containerClass: "bg-admin",
    accentClass: "text-admin-accent border-admin-accent/25",
    image: "/images/landing/division-admin.jpg",
    imagePlaceholder: "Moderno radno okruženje za administraciju i planiranje",
    isRuze: false,
  },
] as const;

export function DivisionsShowcase() {
  const { openComingSoon } = useComingSoonModal();

  return (
    <section id="divisions" className="scroll-mt-18" aria-labelledby="divisions-heading">
      <div className="bg-charcoal py-16 text-primary-foreground lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-charcoal-muted">
            Naše djelatnosti
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2 lg:items-end">
            <h2 id="divisions-heading" className="text-4xl font-semibold sm:text-5xl">
              Tri discipline.
              <br />
              Jedna predanost.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-charcoal-muted lg:justify-self-end">
              Svaki odjel samostalno je specijaliziran, a zajedno su osnaženi operativnim sustavima,
              vodstvom i zajedničkim standardima kvalitete.
            </p>
          </div>
        </div>
      </div>
      {divisions.map((division, index) => (
        <article key={division.id} className={division.containerClass}>
          <div
            className={`mx-auto grid min-h-[640px] max-w-[1600px] lg:grid-cols-2 ${
              index % 2 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
              <img
                src={division.image}
                alt={division.imagePlaceholder}
                loading="lazy"
                width={1400}
                height={950}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              <div
                className={`absolute left-5 top-5 px-3.5 py-2 text-xs font-semibold backdrop-blur-sm ${
                  division.isRuze
                    ? "bg-white/90 text-foreground border border-rose-200/60 font-serif tracking-wider shadow-sm"
                    : "bg-background/90 font-display"
                }`}
              >
                0{index + 1} / 0{divisions.length} {division.isRuze ? "— Rosa Dei Ruže" : ""}
              </div>
            </div>
            <div className="flex items-center px-5 py-16 sm:px-10 lg:px-16 lg:py-24 xl:px-24">
              <div className="max-w-xl">
                <span
                  className={`inline-flex border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${division.accentClass}`}
                >
                  {division.tagline}
                </span>
                <h3
                  className={`mt-7 leading-tight ${
                    division.isRuze
                      ? "font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-foreground"
                      : "text-3xl sm:text-4xl font-semibold"
                  }`}
                >
                  {division.name}
                </h3>
                <p
                  className={`mt-6 text-[15px] leading-7 ${
                    division.isRuze ? "text-foreground/75" : "text-muted-foreground"
                  }`}
                >
                  {division.description}
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {division.capabilities.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          division.isRuze ? "text-gold" : division.accentClass.split(" ")[0]
                        }`}
                      />
                      <span className={division.isRuze ? "text-foreground/85" : ""}>{item}</span>
                    </div>
                  ))}
                </div>
                {division.isRuze ? (
                  <Link
                    href={division.href}
                    className="mt-10 inline-flex items-center gap-2.5 rounded-full bg-primary px-8 py-3.5 text-xs font-semibold tracking-[0.16em] text-primary-foreground uppercase shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-900/20"
                  >
                    {division.buttonLabel} <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      openComingSoon({
                        title: division.name,
                        subtitle: division.tagline,
                      })
                    }
                    className="mt-10 inline-flex items-center gap-2 border-b border-foreground pb-1.5 text-sm font-semibold transition-opacity hover:opacity-60 cursor-pointer text-left"
                  >
                    {division.buttonLabel} <ArrowUpRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
