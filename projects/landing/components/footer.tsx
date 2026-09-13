import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "./BrandMark";

const columns = [
  { title: "Creative", links: ["Custom fabrication", "Artisan production", "Installation"] },
  { title: "Maintenance", links: ["Estate care", "Groundskeeping", "Seasonal programs"] },
  { title: "Digital", links: ["Web applications", "Cloud systems", "Product design"] },
];

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-18 bg-charcoal text-charcoal-muted">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 lg:px-8 lg:pt-20">
        <div className="grid gap-12 border-b border-primary-foreground/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)_1.35fr]">
          <div>
            <div className="text-primary-foreground">
              <BrandMark inverse />
            </div>
            <p className="mt-6 max-w-xs text-sm leading-6">
              Specialist work, unified by rigorous operations and direct accountability.
            </p>
            <address className="mt-6 text-xs not-italic leading-5">
              Axiom Group Headquarters
              <br />
              Central Europe
            </address>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#divisions" className="transition-colors hover:text-primary-foreground">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground">
              Corporate office
            </h3>
            <div className="mt-5 space-y-5 text-sm">
              <a
                href="mailto:corporate@axiom.group"
                className="group flex items-center justify-between border-b border-primary-foreground/15 pb-3 text-primary-foreground"
              >
                Central inquiries{" "}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:media@axiom.group"
                className="group flex items-center justify-between border-b border-primary-foreground/15 pb-3 text-primary-foreground"
              >
                Media relations <ArrowUpRight className="h-4 w-4" />
              </a>
              <p>corporate@axiom.group</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Axiom Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-primary-foreground">
              Privacy
            </a>
            <a href="#about" className="hover:text-primary-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
