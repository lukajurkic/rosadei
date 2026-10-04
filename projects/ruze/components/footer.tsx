"use client";

import { Clock, Mail, MapPin, Phone, Info } from 'lucide-react'
import { InstagramGlyph } from './rosa-marks'
import { useComingSoonModal } from '@/components/ComingSoonModal'
import { APP_VERSION } from '@/lib/version'

const channels = [
  {
    label: 'Email',
    value: 'rosadeihr@gmail.com',
    href: 'mailto:studio@rosadei.co?subject=Bespoke%20Arrangement%20Enquiry',
    icon: Mail,
  },
  {
    label: 'Telephone',
    value: '+385 98 185 7755',
    href: 'tel:+385981857755',
    icon: Phone,
  },
  {
    label: 'Instagram',
    value: '@rosadei.hr',
    href: 'https://instagram.com',
    icon: InstagramGlyph,
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-2xl border border-rose-200/50 bg-white/55 shadow-lg shadow-rose-900/10 backdrop-blur-md">
          <div className="grid gap-10 p-8 sm:p-12 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-[0.62rem] tracking-[0.28em] text-foreground/50 uppercase">
                Kontaktirajte nas
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight font-light text-balance sm:text-4xl">
                Javite nam se i započnimo razgovor
              </h2>
              <p className="mt-4 leading-relaxed text-pretty text-foreground/65">
                Pošaljite nam što želite, za kada te ako imate kakva dodatna pitanja. Mi ćemo se potruditi da vam odgovorimo u najkraćem mogućem roku.
              </p>

              <div className="mt-8 flex flex-col gap-3 text-sm text-foreground/70">
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                  Đurđice Rijetković 9, 43280 Garešnica, Hrvatska
                </p>
                <p className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
                  Ponedjeljak - Subota: 08:00 - 21:00
                </p>
                <p className="flex items-start gap-2.5">
                  <Info className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>
                    Narudžbe isključivo po dogovoru. Upiti nisu narudžbe.
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
                  href="mailto:studio@rosadei.co?subject=Bespoke%20Arrangement%20Enquiry"
                  className="flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-[0.7rem] tracking-[0.22em] text-primary-foreground uppercase transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-900/15"
                >
                  Započni razgovor
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

  const handleCjenikClick = () => {
    openComingSoon({
      title: 'Cjenik u izradi',
      subtitle: 'Službeni cjenik • RosaDei Grupa',
      description: (
        <div className="space-y-3">
          <p>
            Službeni cjenik naših aranžmana i proizvoda trenutno je u fazi završne izrade i formiranja paketa.
          </p>
          <p>
            Za sve detalje oko cijena, ponuda te individualnih narudžbi, slobodno nam se javite putem e-maila:{' '}
            <a
              href="mailto:rosadeihr@gmail.com?subject=Upit%20za%20cjenik"
              className="font-medium text-foreground underline underline-offset-4 hover:text-gold transition-colors"
            >
              rosadeihr@gmail.com
            </a>
          </p>
        </div>
      ),
      badge: 'U pripremi • Cjenik',
      contactEmail: 'rosadeihr@gmail.com',
    })
  }

  const handlePrivacyClick = () => {
    openComingSoon({
      title: 'Pravila privatnosti',
      subtitle: 'Zaštita osobnih podataka • Pravni uvjeti',
      description: (
        <div className="space-y-3">
          <p>
            Dokument pravila privatnosti i zaštite osobnih podataka trenutno je u fazi pravnog usklađivanja i izrade.
          </p>
          <p>
            Vaša privatnost i podaci kod nas su u potpunosti zaštićeni te se koriste isključivo za potrebe realizacije narudžbi i izravne komunikacije.
          </p>
          <p>
            Za sva dodatna pitanja o načinu obrade podataka slobodno nam se obratite na{' '}
            <a
              href="mailto:rosadeihr@gmail.com?subject=Upit%20o%20privatnosti"
              className="font-medium text-foreground underline underline-offset-4 hover:text-gold transition-colors"
            >
              rosadeihr@gmail.com
            </a>.
          </p>
        </div>
      ),
      badge: 'U pripremi • Privatnost',
      contactEmail: 'rosadeihr@gmail.com',
    })
  }

  const handleTermsClick = () => {
    openComingSoon({
      title: 'Uvjeti poslovanja',
      subtitle: 'Opći uvjeti poslovanja • Pravni okvir',
      description: (
        <div className="space-y-3">
          <p>
            Službeni opći uvjeti poslovanja obrta trenutno su u fazi pripreme i pravnog usklađivanja.
          </p>
          <p>
            Sve narudžbe, rokovi isporuke, načini plaćanja i uvjeti suradnje trenutno se dogovaraju izravno i transparentno s ovlaštenim osobama obrta.
          </p>
          <p>
            Za sve informacije o uvjetima poslovanja javite nam se na{' '}
            <a
              href="mailto:rosadeihr@gmail.com?subject=Upit%20za%20uvjete%20poslovanja"
              className="font-medium text-foreground underline underline-offset-4 hover:text-gold transition-colors"
            >
              rosadeihr@gmail.com
            </a>.
          </p>
        </div>
      ),
      badge: 'U pripremi • Uvjeti poslovanja',
      contactEmail: 'rosadeihr@gmail.com',
    })
  }

  return (
    <footer className="border-t border-rose-200/50 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p className="text-foreground/60">
          © 2026 RosaDei Grupa. Sva prava pridržana.
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
            Cjenik
          </button>
          <button
            type="button"
            onClick={handlePrivacyClick}
            className="text-foreground/65 transition-colors hover:text-foreground cursor-pointer"
          >
            Privatnost
          </button>
          <button
            type="button"
            onClick={handleTermsClick}
            className="text-foreground/65 transition-colors hover:text-foreground cursor-pointer"
          >
            Uvjeti poslovanja
          </button>
        </div>
      </div>
    </footer>
  )
}
