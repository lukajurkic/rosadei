"use client";

import * as React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export interface ComingSoonOptions {
  title?: string;
  subtitle?: string;
  description?: React.ReactNode;
  badge?: string;
  contactEmail?: string;
}

interface ComingSoonContextType {
  openComingSoon: (options?: ComingSoonOptions) => void;
  closeComingSoon: () => void;
  isOpen: boolean;
}

const ComingSoonContext = React.createContext<ComingSoonContextType | undefined>(
  undefined
);

export function useComingSoonModal() {
  const context = React.useContext(ComingSoonContext);
  if (!context) {
    throw new Error(
      "useComingSoonModal must be used within a ComingSoonProvider"
    );
  }
  return context;
}

export function ComingSoonProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [options, setOptions] = React.useState<ComingSoonOptions>({});

  const openComingSoon = React.useCallback((opts?: ComingSoonOptions) => {
    setOptions(opts || {});
    setIsOpen(true);
  }, []);

  const closeComingSoon = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ComingSoonContext.Provider
      value={{ openComingSoon, closeComingSoon, isOpen }}
    >
      {children}
      <ComingSoonModal
        isOpen={isOpen}
        onClose={closeComingSoon}
        title={options.title}
        subtitle={options.subtitle}
        description={options.description}
        badge={options.badge}
        contactEmail={options.contactEmail}
      />
    </ComingSoonContext.Provider>
  );
}

export interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  description?: React.ReactNode;
  badge?: string;
  contactEmail?: string;
}

export function ComingSoonModal({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  badge,
  contactEmail,
}: ComingSoonModalProps) {
  const { language } = useLanguage();
  const isEn = language === "en";

  const defaultBadge = badge || (isEn ? "In Preparation • Coming Soon" : "U pripremi • Uskoro dostupno");
  const defaultTitle = title || (isEn ? "Something extraordinary is in the works..." : "Nešto izvanredno je u pripremi...");

  const handleContactClick = () => {
    onClose();
    // Scroll smoothly to contact section if present
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "contact";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="overflow-hidden sm:max-w-[540px] border-border/80 bg-background/95 backdrop-blur-xl p-0 shadow-2xl">
        {/* Top subtle decorative accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-gold/60 via-foreground/40 to-gold/60" />

        <div className="p-7 sm:p-9">
          <DialogHeader className="space-y-3">
            {/* Status Badge */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/80">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                {defaultBadge}
              </span>
            </div>

            {/* Title & Division context */}
            <div>
              {subtitle && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  {subtitle}
                </p>
              )}
              <DialogTitle className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground leading-snug">
                {defaultTitle}
              </DialogTitle>
            </div>

            {/* Description */}
            <DialogDescription asChild>
              <div className="text-[15px] leading-relaxed text-muted-foreground pt-1 space-y-3">
                {description ? (
                  typeof description === "string" ? (
                    <span>{description}</span>
                  ) : (
                    description
                  )
                ) : isEn ? (
                  <>
                    <span className="block">
                      This page and our full suite of solutions are currently undergoing careful and precise development.
                      We build digital experiences to the highest standards — because we believe lasting quality is worth the wait.
                    </span>
                    <span className="block text-foreground/90 font-medium">
                      All details and collaboration opportunities will be unveiled soon. Stay tuned!
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block">
                      Ova stranica i cjeloviti prikaz naših rješenja trenutno su u fazi pažljivog i preciznog razvoja.
                      Gradimo digitalno iskustvo po najvišim standardima — jer vjerujemo da pravi rezultati vrijede trenutka čekanja.
                    </span>
                    <span className="block text-foreground/90 font-medium">
                      Uskoro otkrivamo sve detalje, metodologiju i mogućnosti suradnje. Vratite se uskoro ili nas posjetite ponovno kako biste među prvima vidjeli novitete!
                    </span>
                  </>
                )}
              </div>
            </DialogDescription>
          </DialogHeader>

          {/* Quick contact / direct inquiry callout */}
          <div className="mt-6 rounded-xl border border-border/80 bg-secondary/35 p-4 text-xs leading-relaxed text-foreground/85">
            <div className="flex items-start gap-2.5">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div>
                <span className="font-semibold text-foreground">
                  {contactEmail
                    ? isEn
                      ? "Interested in exact pricing or an inquiry?"
                      : "Zanima vas točna cijena ili ponuda?"
                    : isEn
                    ? "Need information or a quote right away?"
                    : "Trebate informacije ili ponudu već sada?"}
                </span>
                <p className="mt-0.5 text-muted-foreground">
                  {contactEmail ? (
                    isEn ? (
                      <>
                        Contact us directly at{" "}
                        <a
                          href={`mailto:${contactEmail}?subject=Price%20Inquiry`}
                          className="font-medium text-foreground underline underline-offset-2 hover:text-gold"
                        >
                          {contactEmail}
                        </a>{" "}
                        and we will send full specifications and offer promptly.
                      </>
                    ) : (
                      <>
                        Javite nam se izravno na{" "}
                        <a
                          href={`mailto:${contactEmail}?subject=Upit%20za%20cjenik`}
                          className="font-medium text-foreground underline underline-offset-2 hover:text-gold"
                        >
                          {contactEmail}
                        </a>{" "}
                        i poslat ćemo vam sve specifikacije i ponudu u najkraćem roku.
                      </>
                    )
                  ) : isEn ? (
                    "While this page is being completed, our team is fully operational and available for direct consultation."
                  ) : (
                    "Iako je stranica u izradi, naš tim je u potpunosti operativan i dostupan za izravan dogovor i suradnju."
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-7 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-3">
            <Button
              variant="outline"
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto text-xs font-medium tracking-wide"
            >
              {isEn ? "Close" : "Pričekat ću, zatvori"}
            </Button>
            {contactEmail ? (
              <Button
                variant="corporate"
                type="button"
                asChild
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase"
              >
                <a href={`mailto:${contactEmail}?subject=${isEn ? "Price%20Inquiry" : "Upit%20za%20cjenik"}`}>
                  {isEn ? "Send an email" : "Pošaljite e-mail"} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </Button>
            ) : (
              <Button
                variant="corporate"
                type="button"
                onClick={handleContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase"
              >
                {isEn ? "Contact us directly" : "Javite nam se izravno"} <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
