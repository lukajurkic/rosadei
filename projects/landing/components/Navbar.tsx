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

const links = [
  ["Djelatnosti", "#divisions"],
  ["O nama", "#about"],
  ["Kontakti", "#contact"],
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <BrandMark />
        <nav aria-label="Glavna navigacija" className="hidden items-center gap-9 md:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button variant="corporate" size="corporate" asChild>
            <a href="mailto:corporate@axiom.group">Kontaktirajte nas</a>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Otvori navigaciju">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full bg-background sm:max-w-sm">
            <SheetHeader className="border-b border-border pb-6 text-left">
              <SheetTitle>
                <BrandMark />
              </SheetTitle>
              <SheetDescription>Četiri discipline. Jedan operativni standard.</SheetDescription>
            </SheetHeader>
            <nav className="mt-10 flex flex-col" aria-label="Mobilna navigacija">
              {links.map(([label, href], index) => (
                <SheetClose asChild key={label}>
                  <a
                    href={href}
                    className="flex items-center justify-between border-b border-border py-5 font-display text-2xl font-semibold"
                  >
                    <span>{label}</span>
                    <span className="text-xs text-muted-foreground">0{index + 1}</span>
                  </a>
                </SheetClose>
              ))}
            </nav>
            <Button variant="corporate" size="corporate" className="mt-10 w-full" asChild>
              <a href="mailto:corporate@axiom.group">Kontaktirajte nas</a>
            </Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
