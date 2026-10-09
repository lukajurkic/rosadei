"use client";

import Link from "next/link";
import { BrandMark } from "./BrandMark";
import { useComingSoonModal } from "@/components/ComingSoonModal";
import { APP_VERSION } from "@/lib/version";
import { useLanguage } from "../context/LanguageContext";
import { landingTranslations } from "../translations";

export function Footer() {
  const { openComingSoon } = useComingSoonModal();
  const { language } = useLanguage();
  const t = landingTranslations[language];

  const handleCjenikClick = () => {
    const modalData = t.footer.modals.cjenik;
    openComingSoon({
      title: modalData.title,
      subtitle: modalData.subtitle,
      description: (
        <div className="space-y-3">
          <p>{modalData.p1}</p>
          <p>
            {modalData.p2}{" "}
            <a
              href="mailto:rosadeihr@gmail.com?subject=Upit%20za%20cjenik"
              className="font-medium text-foreground underline underline-offset-4 hover:text-gold transition-colors"
            >
              rosadeihr@gmail.com
            </a>
          </p>
        </div>
      ),
      badge: modalData.badge,
      contactEmail: "rosadeihr@gmail.com",
    });
  };

  const handlePrivacyClick = () => {
    const modalData = t.footer.modals.privatnost;
    openComingSoon({
      title: modalData.title,
      subtitle: modalData.subtitle,
      description: (
        <div className="space-y-3">
          <p>{modalData.p1}</p>
          <p>{modalData.p2}</p>
          <p>
            {modalData.p3}{" "}
            <a
              href="mailto:rosadeihr@gmail.com?subject=Upit%20o%20privatnosti"
              className="font-medium text-foreground underline underline-offset-4 hover:text-gold transition-colors"
            >
              rosadeihr@gmail.com
            </a>
            .
          </p>
        </div>
      ),
      badge: modalData.badge,
      contactEmail: "rosadeihr@gmail.com",
    });
  };

  const handleTermsClick = () => {
    const modalData = t.footer.modals.uvjeti;
    openComingSoon({
      title: modalData.title,
      subtitle: modalData.subtitle,
      description: (
        <div className="space-y-3">
          <p>{modalData.p1}</p>
          <p>{modalData.p2}</p>
          <p>
            {modalData.p3}{" "}
            <a
              href="mailto:rosadeihr@gmail.com?subject=Upit%20za%20uvjete%20poslovanja"
              className="font-medium text-foreground underline underline-offset-4 hover:text-gold transition-colors"
            >
              rosadeihr@gmail.com
            </a>
            .
          </p>
        </div>
      ),
      badge: modalData.badge,
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
              {t.footer.brandTagline}
            </p>
            <address className="mt-6 text-xs not-italic leading-5">
              {t.footer.headquartersTitle}
              <br />
              {t.footer.headquartersSubtitle}
            </address>
          </div>
          {t.footer.columns.map((column) => (
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
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[0.7rem] tracking-wider text-charcoal-muted/70 uppercase">
              {APP_VERSION}
            </span>
            <button
              type="button"
              onClick={handleCjenikClick}
              className="transition-colors hover:text-primary-foreground cursor-pointer"
            >
              {t.footer.cjenik}
            </button>
            <button
              type="button"
              onClick={handlePrivacyClick}
              className="transition-colors hover:text-primary-foreground cursor-pointer"
            >
              {t.footer.privatnost}
            </button>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined" && window.openCookieConsent) {
                  window.openCookieConsent();
                }
              }}
              className="transition-colors hover:text-primary-foreground cursor-pointer"
            >
              {t.footer.kolacici}
            </button>
            <button
              type="button"
              onClick={handleTermsClick}
              className="transition-colors hover:text-primary-foreground cursor-pointer"
            >
              {t.footer.uvjeti}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
