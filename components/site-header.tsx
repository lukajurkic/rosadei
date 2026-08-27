import { RoseMark } from '@/components/rosa-marks'

const links = [
  { label: 'Ponuda', href: '#collections' },
  // { label: 'Personaliziraj', href: '#customization' },
  { label: 'Kako naručiti', href: '#how-it-works' },
  { label: 'Kontakt', href: '#contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rose-100/60 bg-white/40 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-70"
        >
          {/* Logo Image - prilagođena visina h-12 na mobitelu da stane u h-16 header */}
          <img
            src="/images/rosadei_logo.png"
            alt="Rosa Dei"
            className="h-12 w-auto object-contain sm:h-16"
          />
        </a>

        {/* Desktop Navigacija */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-[0.72rem] tracking-[0.2em] text-foreground/70 uppercase transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobilna Navigacija */}
        <nav aria-label="Main mobile" className="flex items-center gap-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.65rem] tracking-[0.15em] text-foreground/70 uppercase transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}