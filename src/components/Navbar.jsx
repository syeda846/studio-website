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
export default function Navbar() {
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
  </div>
  <div className="nav-actions flex items-center justify-self-end gap-3">
    <a className="btn p nav-cta" href="#website-audit" onClick={() => setMenuOpen(false)}>Request free audit <span aria-hidden="true">&#8599;</span></a>
    <button className="tg" id="t" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  </div>
  <button className="ham" id="ham" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
</nav>;
}
