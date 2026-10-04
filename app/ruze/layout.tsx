import { RuzeHeader } from '@/projects/ruze/components/header'
import { RuzeFooter } from '@/projects/ruze/components/footer'

export default function RuzeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div id="top" className="rosa-canvas rosa-grain relative min-h-screen">
      <div className="relative z-10 flex min-h-screen flex-col justify-between">
        <div>
          <RuzeHeader />
          {children}
        </div>
        <RuzeFooter />
      </div>
    </div>
  )
}
