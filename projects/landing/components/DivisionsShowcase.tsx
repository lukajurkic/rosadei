"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import { useComingSoonModal } from "@/components/ComingSoonModal";
import { useLanguage } from "../context/LanguageContext";
import { landingTranslations } from "../translations";

interface DivisionConfig {
  id: "creative" | "digital" | "administration";
  route: string;
  href: string;
  containerClass: string;
  accentClass: string;
  image: string;
  isRuze: boolean;
}

const divisionConfigs: DivisionConfig[] = [
  {
    id: "creative",
    route: "ruze",
    href: "/ruze",
    containerClass: "bg-[#fdf8f5] border-y border-rose-200/60",
    accentClass: "text-gold border-gold/40 bg-white/80",
    image: "/images/roses/combo/combo_2.webp",
    isRuze: true,
  },
  {
    id: "digital",
    route: "digital",
    href: "#divisions",
    containerClass: "bg-digital",
    accentClass: "text-digital-accent border-digital-accent/25",
    image: "/images/landing/division-digital.jpg",
    isRuze: false,
  },
  {
    id: "administration",
    route: "administration",
    href: "#divisions",
    containerClass: "bg-admin",
    accentClass: "text-admin-accent border-admin-accent/25",
    image: "/images/landing/division-admin.jpg",
    isRuze: false,
  },
];

export function DivisionsShowcase() {
  const { openComingSoon } = useComingSoonModal();
  const { language } = useLanguage();
  const t = landingTranslations[language];

  const mergedDivisions = divisionConfigs.map((config) => {
    const textData = t.divisions.items.find((item) => item.id === config.id)!;
    return {
      ...config,
      ...textData,
    };
  });

  return (
    <section id="divisions" className="scroll-mt-18" aria-labelledby="divisions-heading">
      <div className="bg-charcoal py-16 text-primary-foreground lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-charcoal-muted">
            {t.divisions.eyebrow}
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2 lg:items-end">
            <h2 id="divisions-heading" className="text-4xl font-semibold sm:text-5xl">
              {t.divisions.headingLine1}
              <br />
              {t.divisions.headingLine2}
            </h2>
            <p className="max-w-xl text-sm leading-7 text-charcoal-muted lg:justify-self-end">
              {t.divisions.description}
            </p>
          </div>
        </div>
      </div>
      {mergedDivisions.map((division, index) => (
        <article key={division.id} className={division.containerClass}>
          <div
            className={`mx-auto grid min-h-[640px] max-w-[1600px] lg:grid-cols-2 ${
              index % 2 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
              <img
                src={division.image}
                alt={division.name}
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
                0{index + 1} / 0{mergedDivisions.length}{" "}
                {division.isRuze ? t.divisions.badgeRuzeSuffix : ""}
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
