import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function OrderCtaBanner() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-rose-200/50 bg-white/55 p-8 text-center shadow-lg shadow-rose-900/10 backdrop-blur-md sm:p-10 sm:text-left md:flex-row">
          <div>
            <p className="text-[0.62rem] tracking-[0.28em] text-foreground/50 uppercase">
              Spremni za narudžbu?
            </p>
            <h3 className="mt-2 font-serif text-2xl font-light text-foreground sm:text-3xl">
              Imate ideju ili posebne želje?
            </h3>
            <p className="mt-2 leading-relaxed text-foreground/70 text-sm sm:text-base">
              Javite nam se za savjet, ponudu ili izradu unikatnog poklona po mjeri.
            </p>
          </div>

          <Link
            href="/kontakti-i-narudzbe"
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-[0.7rem] tracking-[0.22em] text-primary-foreground uppercase shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-900/15"
          >
            Kontaktiraj nas i naruči
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
