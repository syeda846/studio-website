import { useRef, useState } from "react"
import TrustStrip from "./components/TrustStrip"
import Challenges from "./components/Challenges"
import Testimonials from "./components/Testimonials"
import AuditModal from "./components/AuditModal"
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
  const auditDialog = useRef(null)
  const openAudit = () => auditDialog.current.showModal()
  useStudioEffects()
  return <>
    <Background />
    <Navbar onOpenAudit={openAudit} />
    <main>
      <Hero onOpenAudit={openAudit} />
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
    <AuditModal dialogRef={auditDialog} onRequestAudit={(website, email) => setAuditRequest({ website, email })} />
    <a className="fab" href="#contact" aria-label="Contact us">💬</a>
  </>
}
