import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { ComingSoonProvider } from '@/components/ComingSoonModal'
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
        url: '/icon_black.webp',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon_white.webp',
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
      <body className="antialiased min-h-screen">
        <ComingSoonProvider>
          {children}
        </ComingSoonProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
