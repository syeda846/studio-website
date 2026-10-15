import { useEffect, useState } from 'react';
import { readSavedTheme, applyTheme } from '../behaviors/navigation';
const links = [{
  label: 'Services',
  id: 'services'
}, {
  label: 'Our work',
  id: 'work'
}, {
  label: 'Process',
  id: 'process'
}, {
  label: 'About',
  id: 'team'
}, {
  label: 'FAQs',
  id: 'faq'
}];
export default function Navbar({ onOpenAudit }) {
  const [theme, setTheme] = useState(readSavedTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);
  return <nav id="nav">
  <a className="logo" href="#top">
        <svg viewBox="0 0 100 100" aria-hidden="true">
      <polygon points="25,6 75,6 98,50 75,94 25,94 2,50" fill="var(--b)" />
      <polygon points="38,30 62,30 74,50 62,70 38,70 26,50" fill="var(--bg)" />
    </svg>
        Dev Studio
      </a>
  <div className={`menu${menuOpen ? ' open' : ''}`} id="menu">
    {links.map(({
        label,
        id
      }) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
      {label}
    </a>)}
    <div className="nav-menu-audit"><span>A fresh perspective on your website.</span><button type="button" className="btn p" aria-haspopup="dialog" onClick={() => { setMenuOpen(false); onOpenAudit(); }}>Book your free website audit &#8599;</button></div>
  </div>
  <div className="nav-actions flex items-center justify-self-end gap-3">
    <button type="button" className="btn p nav-cta" aria-haspopup="dialog" onClick={() => { setMenuOpen(false); onOpenAudit(); }}><svg className="nav-audit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5M8 10.5l2 2 3-4" /></svg><span className="nav-audit-desktop">Request free audit</span><span className="nav-audit-mobile">Free Audit</span></button>
    <button className="tg" id="t" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  </div>
  <button className="ham" id="ham" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
</nav>;
}
