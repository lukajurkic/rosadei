"use client";

import { ArrowDownRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../context/LanguageContext";
import { landingTranslations } from "../translations";

export function Hero() {
  const { language } = useLanguage();
  const t = landingTranslations[language];

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
          <div>
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground" />
              {t.hero.eyebrow}
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-[5.2rem]">
              {t.hero.headingLine1}
              <br />
              <span className="text-muted-foreground">{t.hero.headingLine2}</span>
            </h1>
          </div>
          <div className="border-l border-border pl-6 lg:mb-2">
            <p className="text-base leading-7 text-muted-foreground">
              {t.hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="corporate" size="corporate" asChild>
                <a href="#divisions">
                  {t.hero.exploreBtn} <ArrowDownRight />
                </a>
              </Button>
              <Button variant="corporateOutline" size="corporate" asChild>
                <a href="#about">
                  <FileText /> {t.hero.aboutBtn}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
