export function LandingFooter() {
  return (
    <footer className="border-t border-rose-200/50 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row sm:gap-4">
        <div className="flex flex-col text-center text-[0.65rem] tracking-[0.18em] text-foreground/45 uppercase sm:text-left">
          <span>web version 2.0.0</span>
          <span>
            developer:{' '}
            <a
              href="mailto:lukajurkic1@gmail.com"
              className="transition-colors hover:text-foreground"
            >
              lukajurkic1@gmail.com
            </a>
          </span>
        </div>
        <div className="flex items-center text-foreground/70">
          <span className="font-serif text-sm tracking-[0.2em] uppercase">
            ROSA DEI
          </span>
        </div>
        <div className="flex flex-col text-center text-[0.65rem] tracking-[0.18em] text-foreground/45 uppercase sm:text-right">
          <span>&copy; {new Date().getFullYear()} Rosa Dei Obrt Za Usluge</span>
          <span>vl. Željka Jurkić, OIB: 76565059947</span>
        </div>
      </div>
    </footer>
  )
}
