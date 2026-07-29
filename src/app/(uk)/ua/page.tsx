import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { WebSiteSchema, ProfilePageSchema } from '@/components/SchemaMarkup'

export default function UaHome() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <WebSiteSchema lang="ua" />
      <ProfilePageSchema lang="ua" />
      <SetLanguageClient lang="ua" />
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 w-full space-y-12">
        <About />
        <Skills />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
