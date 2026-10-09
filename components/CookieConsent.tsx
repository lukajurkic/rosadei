"use client";

import * as React from "react";
import { Cookie, ShieldCheck, ChevronDown, ChevronUp, Check, X } from "lucide-react";

const GA_TRACKING_ID = "G-EZWYTM74ZX";
const CONSENT_STORAGE_KEY = "cookie_consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean;
    openCookieConsent?: () => void;
    resetCookieConsent?: () => void;
  }
}

/**
 * Dynamically loads and initializes the Google Analytics gtag.js script
 * only after affirmative user consent.
 */
function loadGoogleAnalytics(trackingId: string) {
  if (typeof window === "undefined") return;

  // Re-enable tracking in case it was previously disabled
  window[`ga-disable-${trackingId}`] = false;

  // Avoid duplicate injection
  if (document.getElementById("ga-gtag-script")) {
    return;
  }

  // Inject Google tag (gtag.js)
  const script = document.createElement("script");
  script.id = "ga-gtag-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", trackingId, {
    anonymize_ip: true,
  });
}

/**
 * Ensures Google Analytics tracking is disabled if consent is declined.
 */
function disableGoogleAnalytics(trackingId: string) {
  if (typeof window === "undefined") return;
  window[`ga-disable-${trackingId}`] = true;
}

export function CookieConsent() {
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(false);
  const [currentChoice, setCurrentChoice] = React.useState<"accepted" | "declined" | null>(null);
  const [lang, setLang] = React.useState<"hr" | "en">("hr");

  React.useEffect(() => {
    setMounted(true);

    // Sync language from localStorage / browser
    try {
      const storedLang = localStorage.getItem("rosadei_lang");
      if (storedLang === "en" || storedLang === "hr") {
        setLang(storedLang);
      } else if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("en")) {
        setLang("en");
      }
    } catch {
      // ignore
    }

    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY) as "accepted" | "declined" | null;
      setCurrentChoice(stored);

      if (stored === "accepted") {
        loadGoogleAnalytics(GA_TRACKING_ID);
      } else if (stored === "declined") {
        disableGoogleAnalytics(GA_TRACKING_ID);
      } else {
        // No choice saved yet: display banner after a short delay for smooth entrance
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 600);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  // Expose global reopen trigger so footer links ("Kolačići") can reopen the banner anytime
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    window.openCookieConsent = () => {
      // Refresh current language when opened
      const storedLang = localStorage.getItem("rosadei_lang");
      if (storedLang === "en" || storedLang === "hr") {
        setLang(storedLang);
      }
      setIsOpen(true);
    };

    window.resetCookieConsent = () => {
      try {
        localStorage.removeItem(CONSENT_STORAGE_KEY);
      } catch {
        // ignore
      }
      setCurrentChoice(null);
      setIsOpen(true);
    };

    const handleCustomEvent = () => setIsOpen(true);
    window.addEventListener("open-cookie-consent", handleCustomEvent);

    return () => {
      delete window.openCookieConsent;
      delete window.resetCookieConsent;
      window.removeEventListener("open-cookie-consent", handleCustomEvent);
    };
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, "accepted");
    } catch {
      // ignore
    }
    setCurrentChoice("accepted");
    loadGoogleAnalytics(GA_TRACKING_ID);
    setIsOpen(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, "declined");
    } catch {
      // ignore
    }
    setCurrentChoice("declined");
    disableGoogleAnalytics(GA_TRACKING_ID);
    setIsOpen(false);
  };

  // Prevent SSR hydration mismatch
  if (!mounted || !isOpen) {
    return null;
  }

  const isEn = lang === "en";

  return (
    <aside
      aria-label={isEn ? "Cookie consent notice" : "Obavijest o kolačićima"}
      role="region"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl sm:left-auto sm:right-6 sm:bottom-6 transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="relative overflow-hidden rounded-2xl border border-rose-200/60 bg-white/95 p-6 shadow-2xl shadow-rose-950/15 backdrop-blur-xl sm:p-7">
        {/* Subtle decorative gradient line at top */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/40 via-rose-300/60 to-gold/40" />

        <div className="flex items-start gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-rose-200/60 bg-rose-50/80 text-foreground shadow-xs">
            <Cookie className="size-5 text-gold" />
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-serif text-lg font-medium text-foreground tracking-tight sm:text-xl">
                {isEn ? "Privacy & Cookies" : "Privatnost & Kolačići"}
              </h3>
              {currentChoice && (
                <span className="rounded-full border border-rose-200/70 bg-rose-50/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {currentChoice === "accepted"
                    ? isEn
                      ? "Accepted"
                      : "Prihvaćeno"
                    : isEn
                    ? "Declined"
                    : "Odbijeno"}
                </span>
              )}
            </div>

            <p className="text-xs leading-relaxed text-foreground/75 sm:text-sm">
              {isEn
                ? "We respect your privacy. We use analytical cookies (Google Analytics) to anonymously measure visits and enhance your experience. Cookies are activated strictly upon your consent."
                : "Cijenimo Vašu privatnost. Koristimo analitičke kolačiće (Google Analytics) za anonimno praćenje posjeta i unapređenje korisničkog iskustva. Kolačići se aktiviraju isključivo uz Vaš pristanak."}
            </p>

            {/* Expandable cookie breakdown */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowDetails(!showDetails)}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
                aria-expanded={showDetails}
              >
                <span>
                  {showDetails
                    ? isEn
                      ? "Hide details"
                      : "Sakrij detalje"
                    : isEn
                    ? "Cookie details"
                    : "Detalji o kolačićima"}
                </span>
                {showDetails ? (
                  <ChevronUp className="size-3.5" />
                ) : (
                  <ChevronDown className="size-3.5" />
                )}
              </button>

              {showDetails && (
                <div className="mt-3 space-y-2.5 rounded-xl border border-border/70 bg-background/60 p-3.5 text-xs text-foreground/80">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-foreground flex items-center gap-1.5">
                        <Check className="size-3.5 text-emerald-600" />
                        {isEn ? "Essential cookies" : "Nužni kolačići"}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {isEn
                          ? "Required for technical operation (e.g. remembering your preference)."
                          : "Omogućuju osnovne tehničke funkcije stranice (npr. pamćenje Vašeg odabira)."}
                      </p>
                    </div>
                    <span className="shrink-0 rounded bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {isEn ? "Always active" : "Uvijek aktivni"}
                    </span>
                  </div>

                  <div className="border-t border-border/50 pt-2 flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-foreground flex items-center gap-1.5">
                        <ShieldCheck className="size-3.5 text-gold" />
                        {isEn
                          ? "Analytics (Google Analytics)"
                          : "Analitički kolačići (Google Analytics)"}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        {isEn
                          ? `Measures visits and performance (${GA_TRACKING_ID}). IP addresses are anonymized.`
                          : `Mjere posjećenost i performanse stranice (${GA_TRACKING_ID}). IP adrese se anonimiziraju.`}
                      </p>
                    </div>
                    <span className="shrink-0 rounded bg-rose-100/70 px-2 py-0.5 text-[10px] font-medium text-foreground/80">
                      {isEn ? "Optional" : "Opcionalno"}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                onClick={handleDecline}
                className="inline-flex w-full items-center justify-center rounded-full border border-border bg-white px-4 py-2.5 text-xs font-medium tracking-wide text-foreground/80 transition-all hover:bg-secondary/70 hover:text-foreground active:scale-[0.99] cursor-pointer sm:w-auto"
              >
                {isEn ? "Decline" : "Odbij"}
              </button>
              <button
                type="button"
                onClick={handleAccept}
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs font-medium tracking-wide text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer sm:w-auto"
              >
                {isEn ? "Accept" : "Prihvati"}
              </button>
            </div>
          </div>

          {/* Close / Dismiss icon if preferences were already set and user opened manually */}
          {currentChoice && (
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors p-1 -mr-2 -mt-2 cursor-pointer"
              aria-label={isEn ? "Close" : "Zatvori"}
            >
              <X className="size-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
