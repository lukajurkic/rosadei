"use client";

import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { useComingSoonModal } from "@/components/ComingSoonModal";
import { APP_VERSION } from "@/lib/version";

interface FooterLink {
  label: string;
  href?: string;
}

interface FooterColumn {
  title: string;
  divisionName?: string;
  divisionTagline?: string;
  links: FooterLink[];
}

const columns: FooterColumn[] = [
  {
    title: "Ručna izrada",
    links: [
      { label: "Katalog buketa i ruža", href: "/ruze" },
      { label: "Personalizirani pokloni", href: "/ruze/personaliziraj" },
      { label: "Kontakt i narudžbe", href: "/ruze/kontakti-i-narudzbe" },
    ],
  },
  /*
  {
    title: "Održavanje",
    divisionName: "Održavanje doma i posjeda",
    divisionTagline: "Kompletna briga o imanjima i objektima",
    links: [
      { label: "Uređenje posjeda" },
      { label: "Hortikultura i okoliš" },
      { label: "Sezonsko održavanje" },
    ],
  },
  */
  {
    title: "Digitalno",
    divisionName: "IT & Digitalna rješenja",
    divisionTagline: "Full-Stack razvoj i digitalna infrastruktura",
    links: [
      { label: "Web aplikacije" },
      { label: "Cloud sustavi" },
      { label: "Dizajn proizvoda" },
    ],
  },
  {
    title: "Administracija",
    divisionName: "Administracija, planiranje i organizacija",
    divisionTagline: "Strateško planiranje i organizacijske usluge",
    links: [
      { label: "Strateško planiranje" },
      { label: "Uredska podrška" },
      { label: "Upravljanje projektima" },
    ],
  },
];

export function Footer() {
  const { openComingSoon } = useComingSoonModal();

  const handleCjenikClick = () => {
    openComingSoon({
      title: "Cjenik u izradi",
      subtitle: "Službeni cjenik • RosaDei Grupa",
      description: (
        <div className="space-y-3">
          <p>
            Službeni cjenik naših usluga i aranžmana trenutno je u fazi završne izrade i formiranja paketa.
          </p>
          <p>
            Za sve detalje oko cijena, ponuda te individualnih narudžbi, slobodno nam se javite putem e-maila:{" "}
            <a
              href="mailto:rosadeihr@gmail.com?subject=Upit%20za%20cjenik"
              className="font-medium text-foreground underline underline-offset-4 hover:text-gold transition-colors"
            >
              rosadeihr@gmail.com
            </a>
          </p>
        </div>
      ),
      badge: "U pripremi • Cjenik",
      contactEmail: "rosadeihr@gmail.com",
    });
  };

  const handlePrivacyClick = () => {
    openComingSoon({
      title: "Pravila privatnosti",
      subtitle: "Zaštita osobnih podataka • Pravni uvjeti",
      description: (
        <div className="space-y-3">
          <p>
            Dokument pravila privatnosti i zaštite osobnih podataka trenutno je u fazi pravnog usklađivanja i izrade.
          </p>
          <p>
            Vaša privatnost i podaci kod nas su u potpunosti zaštićeni te se koriste isključivo za potrebe realizacije narudžbi i izravne komunikacije.
          </p>
          <p>
            Za sva dodatna pitanja o načinu obrade podataka slobodno nam se obratite na{" "}
            <a
              href="mailto:rosadeihr@gmail.com?subject=Upit%20o%20privatnosti"
              className="font-medium text-foreground underline underline-offset-4 hover:text-gold transition-colors"
            >
              rosadeihr@gmail.com
            </a>.
          </p>
        </div>
      ),
      badge: "U pripremi • Privatnost",
      contactEmail: "rosadeihr@gmail.com",
    });
  };

  const handleTermsClick = () => {
    openComingSoon({
      title: "Uvjeti poslovanja",
      subtitle: "Opći uvjeti poslovanja • Pravni okvir",
      description: (
        <div className="space-y-3">
          <p>
            Službeni opći uvjeti poslovanja obrta trenutno su u fazi pripreme i pravnog usklađivanja.
          </p>
          <p>
            Sve narudžbe, rokovi isporuke, načini plaćanja i uvjeti suradnje trenutno se dogovaraju izravno i transparentno s ovlaštenim osobama obrta.
          </p>
          <p>
            Za sve informacije o uvjetima poslovanja javite nam se na{" "}
            <a
              href="mailto:rosadeihr@gmail.com?subject=Upit%20za%20uvjete%20poslovanja"
              className="font-medium text-foreground underline underline-offset-4 hover:text-gold transition-colors"
            >
              rosadeihr@gmail.com
            </a>.
          </p>
        </div>
      ),
      badge: "U pripremi • Uvjeti poslovanja",
      contactEmail: "rosadeihr@gmail.com",
    });
  };

  return (
    <footer id="footer" className="scroll-mt-18 bg-charcoal text-charcoal-muted">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-10 border-b border-primary-foreground/10 pb-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.3fr_repeat(3,1fr)] lg:gap-8 xl:gap-12">
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
                    {link.href ? (
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-primary-foreground"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          openComingSoon({
                            title: column.divisionName,
                            subtitle: column.divisionTagline,
                          })
                        }
                        className="text-left transition-colors hover:text-primary-foreground cursor-pointer"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 RosaDei Grupa. Sva prava pridržana.</p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[0.7rem] tracking-wider text-charcoal-muted/70 uppercase">
              {APP_VERSION}
            </span>
            <button
              type="button"
              onClick={handleCjenikClick}
              className="transition-colors hover:text-primary-foreground cursor-pointer"
            >
              Cjenik
            </button>
            <button
              type="button"
              onClick={handlePrivacyClick}
              className="transition-colors hover:text-primary-foreground cursor-pointer"
            >
              Privatnost
            </button>
            <button
              type="button"
              onClick={handleTermsClick}
              className="transition-colors hover:text-primary-foreground cursor-pointer"
            >
              Uvjeti poslovanja
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
