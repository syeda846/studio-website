import { useEffect, useRef, useState } from 'react';
export default function Contact({ auditRequest }) {
  const [status, setStatus] = useState('');
  const websiteField = useRef(null);
  const projectField = useRef(null);
  const nameField = useRef(null);
  useEffect(() => {
    if (!auditRequest) return;
    websiteField.current.value = auditRequest.website;
    const request = `I would like a free website audit for ${auditRequest.website}`;
    if (!projectField.current.value.includes(request)) {
      projectField.current.value = [projectField.current.value.trim(), request].filter(Boolean).join('\n\n');
    }
    nameField.current.focus({ preventScroll: true });
    document.getElementById('contact').scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      inline: 'nearest',
    });
  }, [auditRequest]);
  function handleSubmit(event) {
    event.preventDefault();
    setStatus('Your brief is ready. This is a template preview: no message has been sent. Connect your email or enquiry service before publishing.');
  }
  return <section id="contact">
  <div className="contact grid gap-[34px]" data-r="zoom">
    <div>
      <span className="eyebrow block text-[color:var(--b)] text-[.72rem] font-bold tracking-[.15em] uppercase mb-[14px]">Your next chapter starts here</span>
      <h2>Tell us what you<br />want to build.</h2>
      <p>Share your idea, your current website, or the workflow you want to improve. Let us turn the first conversation into a clear next step.</p>
      <div className="contact-steps my-7 mx-0 grid gap-[14px]">
        {[['01', 'Tell us a little about your project.'], ['02', 'We discuss your goals and requirements.'], ['03', 'You receive a clear proposed next step.']].map(([n, text]) => <div key={n}>
          <span>
            {n}
          </span>
          <p>
            {text}
          </p>
        </div>)}
      </div>
      <div className="info">
        <span>Sample contact: hello@example.com</span>
        <span>Remote collaboration / Pakistan</span>
      </div>
      <p className="contact-disclaimer">Template contact details. Replace with your business email and WhatsApp number before publishing.</p>
    </div>
    <form className="fm" id="project-form" onSubmit={handleSubmit}>
      <span className="form-caption text-[.9rem] font-bold">{auditRequest ? 'Complete your free website audit request' : 'What can we help you with?'}</span>
      {auditRequest && <p role="status" className="text-sm text-[color:var(--muted)]">Your website has been added below. Add your name and contact details to finish the brief. This preview does not send requests.</p>}
      <div className="chips" id="chips">
        {['Website', 'Store', 'App', 'AI tools', 'Redesign', 'Support'].map(service => <button key={service} type="button" aria-pressed="false">
          {service}
        </button>)}
      </div>
      <label>
        <span>Your name</span>
        <input ref={nameField} id="n" name="name" required autoComplete="name" placeholder="Alex Morgan" />
      </label>
      <label>
        <span>Email or WhatsApp</span>
        <input id="e" name="contact" required autoComplete="email" placeholder="How can we reach you?" />
      </label>
      <label>
        <span>Existing website <span className="optional">(optional)</span></span>
        <input ref={websiteField} name="website" type="url" placeholder="https://yourbusiness.com" />
      </label>
      <div className="form-pair grid-cols-[repeat(2,minmax(0,1fr))] grid gap-3">
        <label>
          <span>Budget <span className="optional">(optional)</span></span>
          <select name="budget" defaultValue="">
            <option value="">Select a range</option>
            <option>Under $1,000</option>
            <option>$1,000 - $3,000</option>
            <option>$3,000 - $10,000</option>
            <option>$10,000+</option>
            <option>Help me scope it</option>
          </select>
        </label>
        <label>
          <span>Timeline <span className="optional">(optional)</span></span>
          <select name="timeline" defaultValue="">
            <option value="">When do you need it?</option>
            <option>As soon as practical</option>
            <option>Within 1-3 months</option>
            <option>More than 3 months</option>
            <option>Just exploring</option>
          </select>
        </label>
      </div>
      <label>
        <span>About your project</span>
        <textarea ref={projectField} id="m" name="project" required placeholder="What are you building, who is it for, and what would a successful outcome look like?" />
      </label>
      <button className="btn p" id="send" type="submit">Send project details &#8599;</button>
      <div className="ok" id="ok" role="status">
        {status}
      </div>
      <p className="form-footnote text-[.72rem]">Use sample information in this preview. <a href="#privacy">Read the sample privacy notice.</a></p>
    </form>
  </div>
</section>;
}
