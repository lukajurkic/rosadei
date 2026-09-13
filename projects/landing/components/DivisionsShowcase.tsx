import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export const divisions = [
  {
    id: "creative",
    name: "Creative & Handcrafted Production",
    tagline: "Bespoke Manual Fabrication & Physical Craft",
    description:
      "Custom physical builds, artisan woodworking, hand-shaped goods, and tailored production delivered with exacting material judgment.",
    capabilities: [
      "Custom furniture and joinery",
      "Small-batch artisan production",
      "Material prototyping and finishing",
      "Bespoke installation and repair",
    ],
    route: "creative",
    containerClass: "bg-craft",
    accentClass: "text-craft-accent border-craft-accent/25",
    image: "/images/landing/division-craft.jpg",
    imagePlaceholder: "Craftsperson shaping a precision oak joint",
  },
  {
    id: "maintenance",
    name: "Home & Grounds Maintenance",
    tagline: "Complete Estate & Facility Care",
    description:
      "Comprehensive exterior landscaping, groundskeeping, seasonal property management, and structural preservation for places made to last.",
    capabilities: [
      "Landscape and grounds stewardship",
      "Seasonal property programs",
      "Exterior fabric maintenance",
      "Responsive facility support",
    ],
    route: "maintenance",
    containerClass: "bg-grounds",
    accentClass: "text-grounds-accent border-grounds-accent/25",
    image: "/images/landing/division-grounds.jpg",
    imagePlaceholder: "Immaculately maintained contemporary estate grounds",
  },
  {
    id: "digital",
    name: "IT & Digital Solutions",
    tagline: "Full-Stack Development & Digital Infrastructure",
    description:
      "Modern web application design, performant cloud deployment, UI/UX systems, and ongoing technical maintenance built for dependable growth.",
    capabilities: [
      "Web application engineering",
      "Cloud systems and deployment",
      "Product design and UX systems",
      "Technical care and optimization",
    ],
    route: "digital",
    containerClass: "bg-digital",
    accentClass: "text-digital-accent border-digital-accent/25",
    image: "/images/landing/division-digital.jpg",
    imagePlaceholder: "Modern software engineering workspace",
  },
] as const;

export function DivisionsShowcase() {
  return (
    <section id="divisions" className="scroll-mt-18" aria-labelledby="divisions-heading">
      <div className="bg-charcoal py-16 text-primary-foreground lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-charcoal-muted">
            Our operating companies
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-2 lg:items-end">
            <h2 id="divisions-heading" className="text-4xl font-semibold sm:text-5xl">
              Three disciplines.
              <br />
              One commitment.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-charcoal-muted lg:justify-self-end">
              Each division is independently specialized and collectively strengthened by the
              group’s operational systems, leadership, and standards.
            </p>
          </div>
        </div>
      </div>
      {divisions.map((division, index) => (
        <article key={division.id} className={division.containerClass}>
          <div
            className={`mx-auto grid min-h-[640px] max-w-[1600px] lg:grid-cols-2 ${
              index % 2 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
              <img
                src={division.image}
                alt={division.imagePlaceholder}
                loading="lazy"
                width={1400}
                height={950}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
              <div className="absolute left-5 top-5 bg-background/90 px-3 py-2 font-display text-xs font-semibold backdrop-blur-sm">
                0{index + 1} / 03
              </div>
            </div>
            <div className="flex items-center px-5 py-16 sm:px-10 lg:px-16 lg:py-24 xl:px-24">
              <div className="max-w-xl">
                <span
                  className={`inline-flex border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] ${division.accentClass}`}
                >
                  {division.tagline}
                </span>
                <h3 className="mt-7 text-3xl font-semibold leading-tight sm:text-4xl">
                  {division.name}
                </h3>
                <p className="mt-6 text-[15px] leading-7 text-muted-foreground">
                  {division.description}
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {division.capabilities.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${division.accentClass.split(" ")[0]}`}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={`#divisions`}
                  className="mt-10 inline-flex items-center gap-2 border-b border-foreground pb-1.5 text-sm font-semibold transition-opacity hover:opacity-60"
                >
                  Visit {index === 0 ? "Creative" : index === 1 ? "Maintenance" : "IT & Web"}{" "}
                  Division <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
