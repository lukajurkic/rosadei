"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BrandMark } from "./BrandMark";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";
import { landingTranslations } from "../translations";

export function Navbar() {
  const { language } = useLanguage();
  const t = landingTranslations[language];

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <BrandMark />

        {/* Desktop Navigation */}
        <nav aria-label="Glavna navigacija" className="hidden items-center gap-9 md:flex">
          {t.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions: Language toggle left of "Kontaktirajte nas" button */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageToggle />
          <Button variant="corporate" size="corporate" asChild>
            <a href="mailto:rosadeihr@gmail.com">{t.nav.contactUs}</a>
          </Button>
        </div>

        {/* Mobile Actions: Language toggle + Mobile Menu trigger */}
        <div className="flex items-center gap-2.5 md:hidden">
          <LanguageToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Otvori navigaciju">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-full bg-background sm:max-w-sm">
              <SheetHeader className="border-b border-border pb-6 text-left">
                <SheetTitle>
                  <BrandMark />
                </SheetTitle>
                <SheetDescription>{t.nav.sheetDescription}</SheetDescription>
              </SheetHeader>
              <nav className="mt-10 flex flex-col" aria-label="Mobilna navigacija">
                {t.nav.links.map((link, index) => (
                  <SheetClose asChild key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center justify-between border-b border-border py-5 font-display text-2xl font-semibold"
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-muted-foreground">0{index + 1}</span>
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.nav.languageLabel}
                </span>
                <LanguageToggle />
              </div>
              <Button variant="corporate" size="corporate" className="mt-6 w-full" asChild>
                <a href="mailto:rosadeihr@gmail.com">{t.nav.contactUs}</a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
