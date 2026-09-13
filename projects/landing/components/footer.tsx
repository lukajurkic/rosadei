import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BrandMark } from "./BrandMark";

const columns = [
  {
    title: "Ručna izrada",
    links: [
      { label: "Katalog buketa i ruža", href: "/ruze" },
      { label: "Personalizirani pokloni", href: "/ruze/personaliziraj" },
      { label: "Kontakt i narudžbe", href: "/ruze/kontakti-i-narudzbe" },
    ],
  },
  {
    title: "Održavanje",
    links: [
      { label: "Uređenje posjeda", href: "#divisions" },
      { label: "Hortikultura i okoliš", href: "#divisions" },
      { label: "Sezonsko održavanje", href: "#divisions" },
    ],
  },
  {
    title: "Digitalno",
    links: [
      { label: "Web aplikacije", href: "#divisions" },
      { label: "Cloud sustavi", href: "#divisions" },
      { label: "Dizajn proizvoda", href: "#divisions" },
    ],
  },
  {
    title: "Administracija",
    links: [
      { label: "Strateško planiranje", href: "#divisions" },
      { label: "Uredska podrška", href: "#divisions" },
      { label: "Upravljanje projektima", href: "#divisions" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-18 bg-charcoal text-charcoal-muted">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-12 border-b border-primary-foreground/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(4,1fr)_1.3fr]">
          <div>
            <div className="text-primary-foreground">
              <BrandMark inverse />
            </div>
            <p className="mt-6 max-w-xs text-sm leading-6">
              Specijalizirani rad ujedinjen discipliniranim poslovanjem i izravnom odgovornošću.
            </p>
            <address className="mt-6 text-xs not-italic leading-5">
              Sjedište RosaDei Grupe
              <br />
              Središnja Europa
            </address>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground">
              Ured uprave
            </h3>
            <div className="mt-5 space-y-5 text-sm">
              <a
                href="mailto:corporate@axiom.group"
                className="group flex items-center justify-between border-b border-primary-foreground/15 pb-3 text-primary-foreground"
              >
                Glavni upiti{" "}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:media@axiom.group"
                className="group flex items-center justify-between border-b border-primary-foreground/15 pb-3 text-primary-foreground"
              >
                Odnosi s javnošću <ArrowUpRight className="h-4 w-4" />
              </a>
              <p>corporate@axiom.group</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 RosaDei Grupa. Sva prava pridržana.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-primary-foreground">
              Privatnost
            </a>
            <a href="#about" className="hover:text-primary-foreground">
              Uvjeti poslovanja
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
