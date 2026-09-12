import Link from 'next/link'

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rose-100/60 bg-white/40 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-70"
        >
          <img
            src="/rosadei_logo.png"
            alt="Rosa Dei"
            className="h-12 w-auto object-contain sm:h-16"
          />
        </Link>
        <nav aria-label="Landing navigation">
          <Link
            href="/ruze"
            className="rounded-full border border-gold/70 bg-white/80 px-5 py-2 text-xs font-medium tracking-wider text-foreground uppercase shadow-sm transition-all hover:bg-gold hover:text-white"
          >
            Istraži Ruže &rarr;
          </Link>
        </nav>
      </div>
    </header>
  )
}
