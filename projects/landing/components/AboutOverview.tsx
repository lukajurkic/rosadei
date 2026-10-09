"use client";

import { useLanguage } from "../context/LanguageContext";
import { landingTranslations } from "../translations";

export function AboutOverview() {
  const { language } = useLanguage();
  const t = landingTranslations[language];

  return (
    <section id="about" className="scroll-mt-20 bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="font-display text-2xl font-medium leading-relaxed tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl lg:leading-[1.25]">
          {t.about.statement}
        </p>
      </div>
    </section>
  );
}
