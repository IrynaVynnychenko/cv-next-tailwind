import About from './About'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Education from './Education'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import Contact from './Contact'
import Hero from './Hero'
import SocialLinks from './SocialLinks'
import Highlights from './Highlights'
import ServiceCards from './ServiceCards'

export default function HomeView() {
  return (
    <>
      <Hero />
      <SocialLinks />
      <Highlights />
      <ServiceCards />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
