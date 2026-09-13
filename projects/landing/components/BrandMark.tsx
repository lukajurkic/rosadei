import Link from "next/link";

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center gap-3" aria-label="Axiom Group home">
      <svg viewBox="0 0 36 36" aria-hidden="true" className="h-8 w-8 shrink-0">
        <path d="M3 29 13 7h7L10 29H3Z" fill="currentColor" />
        <path d="m17 29 7-15 9 15h-7l-2-4-2 4h-5Z" fill="currentColor" opacity=".55" />
      </svg>
      <span className="font-display text-[15px] font-bold uppercase tracking-[0.18em]">
        Axiom <span className={inverse ? "text-charcoal-muted" : "text-muted-foreground"}>Group</span>
      </span>
    </Link>
  );
}
