import { RoseMark } from '@/components/rosa-marks'

const links = [
  { label: 'Collections', href: '#collections' },
  { label: 'Customization', href: '#customization' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rose-100/60 bg-white/40 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-5 sm:h-20 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-foreground transition-opacity hover:opacity-70"
        >
          <RoseMark className="size-7 text-foreground sm:size-8" />
          <span className="font-serif text-xl leading-none font-medium tracking-[0.18em] uppercase sm:text-2xl">
            Rosa Dei
          </span>
        </a>

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

        <nav aria-label="Main" className="flex items-center gap-5 md:hidden">
          <a
            href="#collections"
            className="text-[0.65rem] tracking-[0.2em] text-foreground/70 uppercase"
          >
            Collections
          </a>
          <a
            href="#contact"
            className="text-[0.65rem] tracking-[0.2em] text-foreground/70 uppercase"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
