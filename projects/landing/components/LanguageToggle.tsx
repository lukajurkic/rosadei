"use client";

import { useLanguage } from "../context/LanguageContext";

interface LanguageToggleProps {
  className?: string;
}

export function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Odabir jezika / Language selection"
      className={`inline-flex items-center rounded-full border border-border/80 bg-background/80 p-0.5 shadow-xs backdrop-blur-sm ${className}`}
    >
      <button
        type="button"
        onClick={() => setLanguage("hr")}
        aria-pressed={language === "hr"}
        className={`relative rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
          language === "hr"
            ? "bg-foreground text-background shadow-xs font-bold"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        HR
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`relative rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
          language === "en"
            ? "bg-foreground text-background shadow-xs font-bold"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );
}
