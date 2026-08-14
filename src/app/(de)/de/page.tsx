import type { Metadata } from 'next'
import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { WebSiteSchema, ProfilePageSchema } from '@/components/SchemaMarkup'
import { getPageAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: getPageAlternates('/', '/ua/', '/de/', '/de/'),
}

export default function DeHome() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <WebSiteSchema lang="de" />
      <ProfilePageSchema lang="de" />
      <SetLanguageClient lang="de" />
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 w-full space-y-12">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
