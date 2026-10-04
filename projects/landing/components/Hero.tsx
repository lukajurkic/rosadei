import { ArrowDownRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_.6fr] lg:items-end">
          <div>
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-px w-8 bg-foreground" />
              Obiteljsko poslovanje - 3 djelatnosti
            </p>
            <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-[5.2rem]">
              Različite discipline.
              <br />
              <span className="text-muted-foreground">Jedinstven standard rada.</span>
            </h1>
          </div>
          <div className="border-l border-border pl-6 lg:mb-2">
            <p className="text-base leading-7 text-muted-foreground">
              Spajamo ručnu izradu, upravljanje i održavanje posjeda te softverski inženjering pod jednu operativnu disciplinu — precizan rad, izravna odgovornost i trajni rezultati.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="corporate" size="corporate" asChild>
                <a href="#divisions">
                  Istražite djelatnosti <ArrowDownRight />
                </a>
              </Button>
              <Button variant="corporateOutline" size="corporate" asChild>
                <a href="#about">
                  <FileText /> O našem radu
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
