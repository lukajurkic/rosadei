import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
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
  title: 'Rosa Dei — Bespoke Floral & Bouquet Studio',
  description:
    'Rosa Dei is a premium floral studio crafting bespoke bouquets, bridal arrangements and everlasting dried florals — hand-tied with care and delivered with grace.',
  generator: 'v0.app',
  keywords: [
    'floral studio',
    'bespoke bouquets',
    'bridal flowers',
    'dried florals',
    'Rosa Dei',
  ],
  openGraph: {
    title: 'Rosa Dei — Bespoke Floral & Bouquet Studio',
    description:
      'Crafted by nature, arranged with grace. Bespoke bouquets, bridal and ceremonial florals, and everlasting dried arrangements.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
