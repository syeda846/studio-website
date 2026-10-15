import { useEffect, useState } from 'react';
import { readSavedTheme, applyTheme } from '../behaviors/navigation';
const links = ['Services', 'Process', 'Work', 'AI', 'Team', 'FAQ', 'Contact'];
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
        {links.map(label => <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <button className="tg" id="t" type="button" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
      </div>
      <button className="ham" id="ham" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
    </nav>;
}
