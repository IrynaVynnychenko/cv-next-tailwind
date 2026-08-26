import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import Contact from './Contact'
import Hero from './Hero'
import SocialLinks from './SocialLinks'
import Highlights from './Highlights'
import ServiceCards from './ServiceCards'
import ExperienceHashRedirect from './ExperienceHashRedirect'

export default function HomeView() {
  return (
    <>
      <ExperienceHashRedirect />
      <Hero />
      <SocialLinks />
      <Highlights />
      <ServiceCards />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
