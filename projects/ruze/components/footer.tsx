"use client";

import { Clock, Mail, MapPin, Phone, Info } from 'lucide-react'
import { InstagramGlyph } from './rosa-marks'
import { useComingSoonModal } from '@/components/ComingSoonModal'
import { APP_VERSION } from '@/lib/version'
import { useLanguage } from '@/context/LanguageContext'
import { ruzeTranslations } from '../translations'
import { landingTranslations } from '@/projects/landing/translations'

export function ContactSection() {
  const { language } = useLanguage()
  const t = ruzeTranslations[language]

  const channels = [
    {
      label: t.contactSection.channels.email,
      value: 'rosadeihr@gmail.com',
      href: 'mailto:rosadeihr@gmail.com?subject=Upit%20za%20bukete%20i%20krunice',
      icon: Mail,
    },
    {
      label: t.contactSection.channels.phone,
      value: '+385 98 185 7755',
      href: 'tel:+385981857755',
      icon: Phone,
    },
    {
      label: t.contactSection.channels.instagram,
      value: '@rosadei.hr',
      href: 'https://instagram.com',
      icon: InstagramGlyph,
    },
  ]

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl border border-rose-200/50 bg-white/55 shadow-lg shadow-rose-900/10 backdrop-blur-md">
          <div className="grid gap-10 p-8 sm:p-12 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-[0.62rem] tracking-[0.28em] text-foreground/50 uppercase">
                {t.contactSection.eyebrow}
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight font-light text-balance sm:text-4xl">
                {t.contactSection.title}
              </h2>
              <p className="mt-4 leading-relaxed text-pretty text-foreground/65">
                {t.contactSection.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 text-sm text-foreground/70">
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                  {t.contactSection.address}
                </p>
                <p className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
                  {t.contactSection.hours}
                </p>
                <p className="flex items-start gap-2.5">
                  <Info className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>
                    {t.contactSection.note}
                  </span>
                </p>
              </div>
            </div>

            <ul className="flex flex-col gap-3">
              {channels.map((channel) => {
                const Icon = channel.icon
                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      className="flex items-center gap-4 rounded-2xl border border-rose-200/50 bg-background/60 px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:bg-background"
                    >
                      <Icon className="size-4 shrink-0 text-foreground/60" />
                      <span className="flex flex-col">
                        <span className="text-[0.6rem] tracking-[0.24em] text-foreground/45 uppercase">
                          {channel.label}
                        </span>
                        <span className="text-sm text-foreground">
                          {channel.value}
                        </span>
                      </span>
                    </a>
                  </li>
                )
              })}

              <li className="mt-2">
                <a
                  href="mailto:rosadeihr@gmail.com?subject=Upit%20za%20bukete%20i%20krunice"
                  className="flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-[0.7rem] tracking-[0.22em] text-primary-foreground uppercase transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-900/15"
                >
                  {t.contactSection.button}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function RuzeFooter() {
  const { openComingSoon } = useComingSoonModal()
  const { language } = useLanguage()
  const tLanding = landingTranslations[language]
  const t = ruzeTranslations[language]

  const handleCjenikClick = () => {
    const modalData = tLanding.footer.modals.cjenik
    openComingSoon({
      title: modalData.title,
      subtitle: modalData.subtitle,
      description: (
        <div className="space-y-3">
          <p>{modalData.p1}</p>
          <p>
            {modalData.p2}{' '}
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
      contactEmail: 'rosadeihr@gmail.com',
    })
  }

  const handlePrivacyClick = () => {
    const modalData = tLanding.footer.modals.privatnost
    openComingSoon({
      title: modalData.title,
      subtitle: modalData.subtitle,
      description: (
        <div className="space-y-3">
          <p>{modalData.p1}</p>
          <p>{modalData.p2}</p>
          <p>
            {modalData.p3}{' '}
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
      contactEmail: 'rosadeihr@gmail.com',
    })
  }

  const handleTermsClick = () => {
    const modalData = tLanding.footer.modals.uvjeti
    openComingSoon({
      title: modalData.title,
      subtitle: modalData.subtitle,
      description: (
        <div className="space-y-3">
          <p>{modalData.p1}</p>
          <p>{modalData.p2}</p>
          <p>
            {modalData.p3}{' '}
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
      contactEmail: 'rosadeihr@gmail.com',
    })
  }

  return (
    <footer className="border-t border-rose-200/50 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p className="text-foreground/60">
          {t.footer.copyright}
        </p>
        <div className="flex items-center gap-6">
          <span className="font-mono text-[0.7rem] tracking-wider text-foreground/45 uppercase">
            {APP_VERSION}
          </span>
          <button
            type="button"
            onClick={handleCjenikClick}
            className="text-foreground/65 transition-colors hover:text-foreground cursor-pointer"
          >
            {t.footer.cjenik}
          </button>
          <button
            type="button"
            onClick={handlePrivacyClick}
            className="text-foreground/65 transition-colors hover:text-foreground cursor-pointer"
          >
            {t.footer.privatnost}
          </button>
          <button
            type="button"
            onClick={() => {
              if (typeof window !== 'undefined' && window.openCookieConsent) {
                window.openCookieConsent()
              }
            }}
            className="text-foreground/65 transition-colors hover:text-foreground cursor-pointer"
          >
            {t.footer.kolacici}
          </button>
          <button
            type="button"
            onClick={handleTermsClick}
            className="text-foreground/65 transition-colors hover:text-foreground cursor-pointer"
          >
            {t.footer.uvjeti}
          </button>
        </div>
      </div>
    </footer>
  )
}
