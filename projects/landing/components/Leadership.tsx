import { Mail, Phone } from "lucide-react";

function Linkedin({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

interface Leader {
  name: string;
  role: string;
  oversight: string;
  bio: string;
  linkedin?: string;
  email: string;
  emailSubject?: string;
  phone: string;
  displayPhone: string;
}

const leaders: Leader[] = [
  {
    name: "Željka Jurkić",
    role: "Vlasnica obrta",
    oversight: "Upravljanje poslovanjem & RosaDei ruže",
    bio: "Osnivačica i glavna odgovorna osoba obrta te primarni kontakt za kupce i suradnike. Zadužena za cjelokupno vođenje poslovanja, izdavanje računa, zaprimanje narudžbi te završnu izradu i kontrolu kvalitete RosaDei ruža.",
    email: "rosadeihr@gmail.com",
    emailSubject: "Upit za bukete i krunice",
    phone: "0981857755",
    displayPhone: "098 185 7755",
  },
  {
    name: "Ana Jurkić",
    role: "Kreativna suradnica",
    oversight: "Ručna izrada & promocija",
    bio: "Ključna suradnica u kreativnom stvaralaštvu i većinskoj izradi ruža. Zadužena za osmišljavanje novih dizajnerskih ideja, marketing, vizualnu promociju brenda te vođenje komunikacije na društvenim mrežama.",
    email: "rosadeihr@gmail.com",
    emailSubject: "Upit za bukete i krunice",
    phone: "0981857755",
    displayPhone: "098 185 7755",
  },
  {
    name: "Zoran Jurkić",
    role: "Voditelj terenskih radova",
    oversight: "Održavanje okućnica",
    bio: "Glavna osoba za sve usluge održavanja okućnica i zelenih površina. S klijentima izravno dogovara detalje i planira radove na terenu te osobno vodi i izvršava sve dogovorene narudžbe.",
    email: "rosadeihr@gmail.com",
    emailSubject: "Upit za odrzavanje",
    phone: "0981992888",
    displayPhone: "098 199 2888",
  },
  {
    name: "Luka Jurkić",
    role: "IT razvoj & administracija",
    oversight: "Digitalni sustavi & organizacija",
    bio: "Glavni pozadinski administrator i softverski programer obrta. Zadužen za IT razvoj i web rješenja, strateško planiranje i organizaciju poslovanja te pravna pitanja obrta.",
    linkedin:
      "https://www.linkedin.com/in/luka-jurki%C4%87-496381327/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUbGgEahARiC%2Bg53WhKcnqA%3D%3D",
    email: "lukajurkic1@gmail.com",
    phone: "0995792662",
    displayPhone: "099 579 2662",
  },
];

export function Leadership() {
  return (
    <section id="contact" className="scroll-mt-18 border-y border-border bg-background py-20 lg:py-28">
      <div id="leadership" className="sr-only" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Izravna odgovornost
          </p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
            Upravljanje & Vodstvo
          </h2>
        </div>
        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader) => (
            <article key={leader.name} className="flex flex-col justify-between bg-background p-7 lg:p-8">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">{leader.name}</h3>
                    <p className="mt-1 text-sm font-medium">{leader.role}</p>
                  </div>
                  {leader.linkedin && (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${leader.name} na LinkedInu`}
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded border border-border text-muted-foreground transition-colors hover:border-foreground/40 hover:bg-secondary hover:text-foreground"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {leader.oversight}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{leader.bio}</p>
              </div>

              <div className="mt-6 border-t border-border pt-5 space-y-2 text-xs">
                <a
                  href={`mailto:${leader.email}${
                    leader.emailSubject
                      ? `?subject=${encodeURIComponent(leader.emailSubject)}`
                      : ""
                  }`}
                  className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-foreground" />
                  <span className="truncate">{leader.email}</span>
                </a>
                <a
                  href={`tel:${leader.phone}`}
                  className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground font-mono"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-foreground" />
                  <span>{leader.displayPhone}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
