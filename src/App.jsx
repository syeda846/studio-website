import { useState } from "react"
import TrustStrip from "./components/TrustStrip"
import Challenges from "./components/Challenges"
import Testimonials from "./components/Testimonials"
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
  const [auditRequest, setAuditRequest] = useState(null)
  useStudioEffects()
  return <>
    <Background />
    <Navbar />
    <main>
      <Hero onRequestAudit={(website) => setAuditRequest({ website })} />
      <TrustStrip />
      <Challenges />
      <Services />
      <Work />
      <WhyUs />
      <Process />
      <AiHelper />
      <Testimonials />
      <WaysToWork />
      <Team />
      <TechMarquee />
      <Faq />
      <Contact auditRequest={auditRequest} />
    </main>
    <Footer />
    <a className="fab" href="#contact" aria-label="Contact us">💬</a>
  </>
}
