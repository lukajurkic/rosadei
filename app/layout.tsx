import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { ContactFooter } from '@/components/contact-footer'
import './globals.css'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-display',
  display: 'swap',
})

const body = Jost({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rosa Dei',
  description:
    'Rosa Dei je obrt za izradu visokokvalitetnih poklona od satena. Svaki poklon se radi ručno.',
  generator: 'v0.app',
  keywords: [
    'floral studio',
    'bespoke bouquets',
    'bridal flowers',
    'dried florals',
    'Rosa Dei',
  ],
  openGraph: {
    title: 'Rosa Dei',
    description:
      'Po slici prirode; Napravljeno da traje. Načini kako razveseliti velike i male, stare i mlade, žene i muškarce. Svaki od naših proizvoda je ručno izrađen od visokokvalitenih materijala. Razni pokloni za razne prigode.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/tab_icon_black.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/tab_icon_white.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fdf6f1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} bg-background`}
    >
      <body className="antialiased">
        <div id="top" className="rosa-canvas rosa-grain relative min-h-screen">
          <div className="relative z-10 flex min-h-screen flex-col justify-between">
            <div>
              <SiteHeader />
              {children}
            </div>
            <ContactFooter />
          </div>
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
