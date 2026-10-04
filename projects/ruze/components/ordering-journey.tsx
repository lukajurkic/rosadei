import { MessagesSquare, PackageCheck, Palette } from 'lucide-react'

const steps = [
  {
    number: 'I',
    title: 'Odaberi i Zamisli',
    icon: Palette,
    copy: 'Pregledajte naše proizvode na stranici ili na društvenim mrežama, izaberite stil kojoi vam se sviđa, boje i dodatke.',
  },
  {
    number: 'II',
    title: 'Kontaktirajte nas i potvrdite s nama',
    icon: MessagesSquare,
    copy: 'Kontaktirajte nas putem naših kontaktnih kanala s vašim izborima za potvrdu datuma i proizvoda.',
  },
  {
    number: 'III',
    title: 'Ručni rad i iščekivanje',
    icon: PackageCheck,
    copy: 'Ručno izrađujemo vaš personalizirani proizvod, na vama je da se opustite i čekate da vam javimo da je spreman.',
  },
]

export function OrderingJourney() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-[0.62rem] tracking-[0.28em] text-foreground/50 uppercase">
            Kako radimo
          </p>
          <h2 className="mt-4 font-serif text-3xl leading-tight font-light text-balance sm:text-5xl">
            Put do narudžbe
          </h2>
        </div>

        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <li
                key={step.title}
                className="group relative flex flex-col rounded-2xl border border-rose-200/50 bg-white/45 p-7 shadow-sm shadow-rose-900/5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/65 hover:shadow-lg hover:shadow-rose-900/10 sm:p-8"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-serif text-2xl leading-none text-gold">
                    {step.number}
                  </span>
                  <Icon className="size-5 text-foreground/40 transition-colors group-hover:text-foreground/70" />
                </div>
                <h3 className="font-serif text-xl leading-tight font-normal sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-pretty text-foreground/65">
                  {step.copy}
                </p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
