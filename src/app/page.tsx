import Header from '@/components/Header'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="max-w-5xl mx-auto px-6 py-8 space-y-12">
        <About />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}
