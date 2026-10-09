"use client";

import * as React from "react";

export type Language = "hr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "rosadei_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("hr");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang === "hr" || savedLang === "en") {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
        return;
      }

      // Detect system / browser language
      if (typeof navigator !== "undefined") {
        const browserLang = (navigator.languages && navigator.languages[0]) || navigator.language || "";
        if (browserLang.toLowerCase().startsWith("en")) {
          setLanguageState("en");
          document.documentElement.lang = "en";
          return;
        }
      }

      // Default fallback
      setLanguageState("hr");
      document.documentElement.lang = "hr";
    } catch {
      setLanguageState("hr");
    }
  }, []);

  const setLanguage = React.useCallback((newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      if (typeof document !== "undefined") {
        document.documentElement.lang = newLang;
      }
    } catch {
      // ignore storage failure
    }
  }, []);

  const toggleLanguage = React.useCallback(() => {
    setLanguage((prev) => (prev === "hr" ? "en" : "hr"));
  }, [setLanguage]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
