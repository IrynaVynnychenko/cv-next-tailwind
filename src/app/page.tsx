import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
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
