import robotImage from "../assets/robot.webp";
import { useState } from "react";
import { normalizeWebsiteUrl } from "../utils/websiteUrl";
export default function Hero({ onRequestAudit }) {
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  function requestAudit(event) {
    event.preventDefault();
    try {
      const url = normalizeWebsiteUrl(website);
      setError("");
      onRequestAudit(url);
    } catch {
      setError("Enter a valid website address, for example yourbusiness.com.");
    }
  }
  return <section className="hero grid items-center gap-[30px]" id="top">
  <div>
    <span className="pill"><i></i>Open for new projects</span>
    <h1>
      <span className="ln">
        <span>We build websites,</span>
      </span>
      <span className="ln">
        <span>apps and AI tools</span>
      </span>
      <span className="ln">
        <span>that grow your business.</span>
      </span>
    </h1>
    <p className="lead">We help startups and growing businesses build fast websites, online stores, custom apps, and practical AI tools. From planning and design to launch and ongoing support.</p>
    <form id="website-audit" onSubmit={requestAudit} className="mt-6 w-full max-w-[680px] scroll-mt-24">
      <label htmlFor="audit-website" className="mb-3 block text-sm font-bold text-[color:var(--ink)]">Already have a website? Find out what could work better.</label>
      <div className="flex min-w-0 flex-col gap-3 sm:flex-row">
        <input id="audit-website" name="website" type="text" inputMode="url" required maxLength={2048}
          autoCapitalize="none" autoCorrect="off" spellCheck={false} value={website}
          onChange={(event) => { setWebsite(event.target.value); setError(""); }}
          placeholder="Enter your website URL"
          aria-invalid={Boolean(error)} aria-describedby="audit-help audit-error"
          className="min-w-0 flex-1 rounded-[14px] border border-[color:var(--line)] bg-[color:var(--gl)] px-4 py-[14px] text-base text-[color:var(--ink)] placeholder:text-[color:var(--muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--v)]" />
        <button className="btn p shrink-0" type="submit">Request a Free Website Audit &#8599;</button>
      </div>
      <p id="audit-help" className="mt-3 text-xs leading-relaxed text-[color:var(--muted)]">A focused review of design, mobile experience, speed, and enquiries. No obligation to proceed. Add your contact details in the next step.</p>
      <p id="audit-error" role="alert" className="min-h-5 text-xs text-[color:var(--ink)]">{error}</p>
    </form>
    <div className="btns mt-3">
      <a className="text-link" href="#contact">Discuss a new project &#8599;</a>
      <a className="text-link" href="#work">Explore our work &#8599;</a>
    </div>
    <div className="trust">
      <span>Clear scope before development</span>
      <span>Clear step-by-step process</span>
      <span>Support after launch</span>
    </div>
  </div>
  <div className="stage" id="stg">
    <div className="orb"></div>
    <div className="orbit" style={{
        "--z": "0deg"
      }}>
      <div className="ring">
        <i></i>
      </div>
    </div>
    <div className="orbit o2" style={{
        "--z": "-24deg"
      }}>
      <div className="ring">
        <i></i>
      </div>
    </div>
    <div className="plat"></div>
    <span className="chip c1">⚛ MERN</span>
    <span className="chip c2">🤖 AI</span>
    <span className="chip c3">📱 Apps</span>
    <span className="chip c4">🛒 Store</span>
    <div className="bot" id="bot">
      <img id="rb" alt="Friendly helper robot with open hands" src={robotImage} />
    </div>
    <div className="bub" id="bub" aria-live="polite"></div>
  </div>
</section>;
}
