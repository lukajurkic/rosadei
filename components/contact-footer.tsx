import { Clock, Mail, MapPin, Phone, Info } from 'lucide-react'
import { InstagramGlyph, RoseMark } from '@/components/rosa-marks'

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

export function ContactFooter() {
  return (
    <>
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

      <footer className="border-t border-rose-200/50 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2.5 text-foreground/70">
            {/* <RoseMark className="size-5" /> */}
            <span className="font-serif text-sm tracking-[0.2em] uppercase">
              Rosa Dei, web  version 1.0.1
            </span>
          </div>
          <p className="text-[0.65rem] tracking-[0.18em] text-foreground/45 uppercase">
            &copy; {new Date().getFullYear()} Rosa Dei Obrt Za Usluge, vl. Željka Jurkić, OIB: 76565059947
          </p>
        </div>
      </footer>
    </>
  )
}
