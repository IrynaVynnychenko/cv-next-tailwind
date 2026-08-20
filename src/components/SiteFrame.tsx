import type { ReactNode } from 'react'
import Footer from './Footer'
import SiteNav from './SiteNav'

export default function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh w-full overflow-x-clip bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-40 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-50 dark:bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)] bg-[radial-gradient(ellipse_at_bottom,_#f5f5f5_0%,_#fff_100%)]" />
      <SiteNav />
      <main className="relative z-10 mx-auto min-h-dvh w-full max-w-[1024px] pb-8 [&_[id]]:scroll-mt-24">
        {children}
        <Footer />
      </main>
    </div>
  )
}
