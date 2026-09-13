function Linkedin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

const leaders = [
  {
    initials: "EM",
    name: "Elena Maren",
    role: "Upravljačka partnerica",
    oversight: "Operativno poslovanje grupe",
    bio: "Vodi strategiju grupe, upravljanje i zajedničke operativne sustave u svim djelatnostima.",
  },
  {
    initials: "DR",
    name: "Daniel Rook",
    role: "Operativni partner",
    oversight: "Ručna izrada i nekretnine",
    bio: "Vodi fizičke operacije s dva desetljeća iskustva u proizvodnji i upravljanju posjedima.",
  },
  {
    initials: "AK",
    name: "Amir Kovač",
    role: "Tehnološki partner",
    oversight: "Digitalna rješenja",
    bio: "Usmjerava inženjering digitalnih proizvoda, infrastrukturu i dugoročna tehnička partnerstva.",
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="scroll-mt-18 border-y border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Izravna odgovornost
            </p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Korporativno upravljanje
              <br />
              & vodstvo
            </h2>
          </div>
          <p className="max-w-lg self-end text-sm leading-7 text-muted-foreground lg:justify-self-end">
            Svaka operativna cjelina pod izravnim je nadzorom partnera, osiguravajući da stručnost ostane povezana s izvedbom, a odluke potpuno transparentne.
          </p>
        </div>
        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">
          {leaders.map((leader) => (
            <article key={leader.name} className="bg-background p-7 lg:p-9">
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center bg-secondary font-display text-sm font-semibold">
                  {leader.initials}
                </div>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${leader.name} na LinkedInu`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <h3 className="mt-8 text-xl font-semibold">{leader.name}</h3>
              <p className="mt-1 text-sm font-medium">{leader.role}</p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {leader.oversight}
              </p>
              <p className="mt-6 text-sm leading-6 text-muted-foreground">{leader.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
