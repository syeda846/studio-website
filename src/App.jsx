import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TechMarquee from "./components/TechMarquee"
import Services from "./components/Services"
import WhyUs from "./components/WhyUs"
import Process from "./components/Process"
import Work from "./components/Work"
import AiHelper from "./components/AiHelper"
import WaysToWork from "./components/WaysToWork"
import Team from "./components/Team"
import Faq from "./components/Faq"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Background from "./components/Background"
import useStudioEffects from "./hooks/useStudioEffects"

export default function App() {
  useStudioEffects()
  return <>
    <Background />
    <Navbar />
    <main>
      <Hero />
      <TechMarquee />
      <Services />
      <WhyUs />
      <Process />
      <Work />
      <AiHelper />
      <WaysToWork />
      <Team />
      <Faq />
      <Contact />
    </main>
    <Footer />
    <a className="fab" href="#contact" aria-label="Contact us">💬</a>
  </>
}
