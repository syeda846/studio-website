import { useState } from 'react';
import { normalizeWebsiteUrl } from '../utils/websiteUrl';

export default function AuditModal({ dialogRef, onRequestAudit }) {
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  function bookAudit(event) {
    event.preventDefault();
    try {
      const url = normalizeWebsiteUrl(website);
      setError('');
      dialogRef.current.close();
      onRequestAudit(url, email.trim());
    } catch {
      setError('Please enter a website address such as yourbusiness.com.');
    }
  }
  return <dialog ref={dialogRef} className="audit-modal fixed inset-0 m-auto w-[calc(100%_-_32px)] max-w-[860px] max-h-[90svh] overflow-y-auto rounded-[28px] border border-[color:var(--line)] p-0 text-[color:var(--ink)]" aria-labelledby="audit-modal-title" aria-describedby="audit-modal-description" onClose={() => setError('')} onClick={(event) => {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialogRef.current.close();
  }}>
    <button className="audit-close absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-[color:var(--line)] bg-[color:var(--gl)] text-xl text-[color:var(--muted)]" type="button" aria-label="Close website audit" onClick={() => dialogRef.current.close()}>&#215;</button>
    <div className="grid min-w-0 md:grid-cols-[1fr_1fr]">
      <div className="audit-intro relative min-w-0 overflow-hidden p-6 sm:p-9">
        <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--gl)] px-3 py-[6px] text-[10px] font-bold uppercase tracking-[.14em] text-[color:var(--b)]"><span className="h-[6px] w-[6px] rounded-full bg-[color:var(--b)]" />A fresh perspective</span>
        <div className="audit-lens relative mb-6 grid h-16 w-16 place-items-center rounded-[20px] border border-[color:var(--line)]">
          <svg className="relative h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5M7 11l2.5 2.5L14 8" /></svg>
        </div>
        <h2 id="audit-modal-title" className="audit-title">Good website.<br /><span>Even better potential.</span></h2>
        <p id="audit-modal-description" className="mt-5 text-sm leading-relaxed text-[color:var(--muted)]">Discover what could make your website clearer, easier to use, and better at turning visits into conversations.</p>
        <div className="mt-7 grid grid-cols-2 gap-2">{['Design & clarity', 'Mobile experience', 'Speed & usability', 'Enquiry journey'].map((label, index) => <div key={label} className="flex items-center gap-2 rounded-xl border border-[color:var(--line)] bg-[color:var(--gl)] px-3 py-[10px] text-[11px] text-[color:var(--muted)]"><span className="text-[10px] font-bold text-[color:var(--b)]">0{index + 1}</span>{label}</div>)}</div>
      </div>
      <div className="audit-form-panel flex min-w-0 flex-col justify-center p-6 sm:p-9">
        <span className="text-[10px] font-bold uppercase tracking-[.16em] text-[color:var(--v)]">Your next step / Website review</span>
        <h3 className="mt-3 text-2xl">Let us take a look.</h3>
        <p className="mb-7 mt-3 text-sm leading-relaxed text-[color:var(--muted)]">Share your website and email so we know what to review and where to follow up. You can add more details in the next step.</p>
        <form onSubmit={bookAudit} className="grid min-w-0 gap-3">
          <label htmlFor="audit-modal-website" className="text-xs font-bold">Your website URL</label>
          <div className="flex min-w-0 items-center gap-3 rounded-[14px] border border-[color:var(--line)] bg-[color:var(--gl)] px-4 focus-within:border-[color:var(--v)]">
            <svg className="h-4 w-4 shrink-0 text-[color:var(--b)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z" /></svg>
            <input autoFocus id="audit-modal-website" name="website" type="text" inputMode="url" required maxLength={2048} autoCapitalize="none" autoCorrect="off" spellCheck={false} value={website} onChange={(event) => { setWebsite(event.target.value); setError(''); }} placeholder="yourbusiness.com" aria-invalid={Boolean(error)} aria-describedby="audit-modal-error audit-modal-help" className="min-w-0 flex-1 border-0 bg-transparent py-4 text-base text-[color:var(--ink)] outline-none placeholder:text-[color:var(--muted)]" />
          </div>
          <p id="audit-modal-error" role="alert" className="min-h-4 text-xs text-[color:var(--ink)]">{error}</p>
          <label htmlFor="audit-modal-email" className="text-xs font-bold">Your email address</label>
          <div className="flex min-w-0 items-center gap-3 rounded-[14px] border border-[color:var(--line)] bg-[color:var(--gl)] px-4 focus-within:border-[color:var(--v)]">
            <svg className="h-4 w-4 shrink-0 text-[color:var(--b)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></svg>
            <input id="audit-modal-email" name="email" type="email" required maxLength={254} autoComplete="email" autoCapitalize="none" spellCheck={false} value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@yourbusiness.com" className="min-w-0 flex-1 border-0 bg-transparent py-4 text-base text-[color:var(--ink)] outline-none placeholder:text-[color:var(--muted)]" />
          </div>
          <button type="submit" className="btn p mt-2 w-full">Book Audit <span aria-hidden="true">&#8599;</span></button>
          <p id="audit-modal-help" className="mt-1 text-center text-xs text-[color:var(--muted)]">Free initial review. No obligation to proceed.</p>
        </form>
        <div className="mt-7 flex gap-3 border-t border-[color:var(--line)] pt-5"><span className="text-[color:var(--b)]" aria-hidden="true">&#9671;</span><p className="text-[11px] leading-relaxed text-[color:var(--muted)]">Template preview: this opens your enquiry brief. No audit is booked or request sent until a booking service is connected.</p></div>
      </div>
    </div>
  </dialog>;
}
