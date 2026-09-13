import { Compass, Layers3, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    number: "01",
    title: "Beskompromisna izrada",
    text: "Svaki detalj pažljivo je osmišljen, provjeren i dovršen rukama iskusnih majstora.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Pouzdana infrastruktura",
    text: "Sustavi, alati i procesi projektirani su za postojanu i dugoročnu učinkovitost.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Dugoročna odgovornost",
    text: "Izravan nadzor jamči potpunu odgovornost od početne ideje do konačne isporuke.",
  },
];

export function AboutOverview() {
  return (
    <section id="about" className="scroll-mt-20 bg-card py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:gap-24 lg:px-8">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Gradimo kroz generacije
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Različita stručnost.
            <br />
            Zajedničko vodstvo.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-7 text-muted-foreground">
            <p>
              RosaDei Grupa započela je s jednostavnim uvjerenjem: visokospecijalizirani rad postiže najbolje rezultate kada iza njega stoje disciplinirano poslovanje i osobna odgovornost.
            </p>
            <p>
              Tijekom desetljeća, to se načelo proširilo s ručne izrade na upravljanje posjedima, digitalnu infrastrukturu te poslovnu administraciju i planiranje. Svaki odjel vode stručnjaci svog područja, dijeleći zajedničke sustave kvalitete, visoke komercijalne standarde i izravan nadzor partnera.
            </p>
          </div>
          <div className="mt-10 border-l-2 border-foreground pl-5 font-display text-lg font-medium leading-7">
            „Napravljeno da traje” za nas nije samo marketinška fraza. To je mjerilo koje primjenjujemo na svaki predmet, prostor i sustav koji stvaramo.
          </div>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {pillars.map(({ icon: Icon, number, title, text }) => (
            <article key={title} className="grid grid-cols-[auto_1fr_auto] gap-5 py-7 sm:items-center">
              <div className="flex h-11 w-11 items-center justify-center border border-border bg-background">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-1 max-w-lg text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
              <span className="font-display text-xs text-muted-foreground">{number}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
