
import HeroSection from '../components/HeroSection'
import TNOShowcase from '../components/TNOShowcase'
import AboutRiptide from '../components/AboutRiptide'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <>
    <HeroSection />
    <section id="projects" className='page-section'>
      <TNOShowcase />
    </section>
    <section id="about" className='page-section'>
      <AboutRiptide />
    </section>    
    <Footer />
    
    </>
  )
}

export default LandingPage
