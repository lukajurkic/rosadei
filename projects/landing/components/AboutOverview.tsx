import { Compass, Layers3, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Compass,
    number: "01",
    title: "Meticulous Craftsmanship",
    text: "Every detail is considered, tested, and finished by skilled practitioners.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Reliable Infrastructure",
    text: "Systems, tools, and teams are designed for consistent long-term performance.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Long-term Accountability",
    text: "Direct oversight keeps responsibility clear from first brief to final delivery.",
  },
];

export function AboutOverview() {
  return (
    <section id="about" className="scroll-mt-20 bg-card py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:gap-24 lg:px-8">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Built across generations
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
            Different expertise.
            <br />
            Shared governance.
          </h2>
          <div className="mt-8 space-y-5 text-[15px] leading-7 text-muted-foreground">
            <p>
              Axiom Group began with a simple conviction: highly specialized work performs best when it is supported by disciplined operations and personal accountability.
            </p>
            <p>
              Over a decade, that principle grew from physical craft into property stewardship and digital infrastructure. Each division remains specialist-led while sharing quality systems, commercial standards, and direct partner oversight.
            </p>
          </div>
          <div className="mt-10 border-l-2 border-foreground pl-5 font-display text-lg font-medium leading-7">
            “Built to endure” is not a campaign line. It is the standard applied to every object, place, and system we touch.
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
