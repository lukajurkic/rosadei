'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Ponuda', href: '/' },
  { label: 'Personaliziraj', href: '/personaliziraj' },
  { label: 'Kontaktiraj nas i naruči', href: '/kontakti-i-narudzbe' },
]

export function SiteHeader() {
  const pathname = usePathname()

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

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative text-[0.72rem] tracking-[0.2em] uppercase transition-colors hover:text-foreground ${
                      isActive
                        ? 'font-medium text-foreground border-b-2 border-gold/80 pb-1'
                        : 'text-foreground/70'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <nav aria-label="Main mobile" className="flex items-center gap-3 sm:gap-4 md:hidden">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.62rem] tracking-[0.14em] uppercase transition-colors hover:text-foreground ${
                  isActive
                    ? 'font-semibold text-foreground border-b-2 border-gold/80 pb-0.5'
                    : 'text-foreground/70'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}