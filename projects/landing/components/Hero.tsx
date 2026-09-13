import { ArrowDownRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const metrics = [
  ["3", "Core Divisions", "Integrated cross-discipline services"],
  ["10+", "Years", "Operational excellence and proven track record"],
  ["100%", "In-house", "Execution with zero outsourced dependency"],
  ["98%", "Retention", "Client retention and long-term agreements"],
];

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 pb-14 pt-20 lg:px-8 lg:pb-20 lg:pt-28">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
          <div>
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground" />
              Multi-disciplinary operating group
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-[5.2rem]">
              Diverse Disciplines.
              <br />
              <span className="text-muted-foreground">One Standard of Rigor.</span>
            </h1>
          </div>
          <div className="border-l border-border pl-6 lg:mb-2">
            <p className="text-base leading-7 text-muted-foreground">
              We bring manual craft, property management, and software engineering together under a single operational discipline—precise work, direct accountability, and enduring results.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="corporate" size="corporate" asChild>
                <a href="#divisions">
                  Explore Divisions <ArrowDownRight />
                </a>
              </Button>
              <Button variant="corporateOutline" size="corporate" asChild>
                <a href="#about">
                  <FileText /> Corporate Overview
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-20 grid border-y border-border sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(([value, label, detail], index) => (
            <div
              key={label}
              className={`py-7 sm:px-6 lg:py-8 ${
                index > 0 ? "border-t border-border sm:border-t-0 sm:border-l" : ""
              } ${index === 2 ? "sm:border-t lg:border-t-0" : ""}`}
            >
              <div className="flex items-baseline gap-2">
                <strong className="font-display text-3xl font-semibold">{value}</strong>
                <span className="text-sm font-semibold">{label}</span>
              </div>
              <p className="mt-2 max-w-56 text-xs leading-5 text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
