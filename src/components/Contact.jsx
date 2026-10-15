export default function Contact() {
  return <section id="contact"><div className="contact grid gap-[34px]" data-r="zoom"><div><h2>Let's build your idea</h2><p>Tell us what you need. We will reply with a clear plan and next steps, and the first audit is free.</p>
<div className="info"><span>✉️ hello@yourstudio.com</span><span>💬 +92 300 0000000</span></div></div>
<div className="fm"><div className="chips" id="chips"><button>Website</button><button>Store</button><button>App</button><button>AI tools</button><button>Redesign</button></div>
<input id="n" placeholder="Your name" aria-label="Your name" /><input id="e" placeholder="Email or WhatsApp number" aria-label="Email or WhatsApp number" /><textarea id="m" placeholder="Tell us about your project" aria-label="Project details" />
<button className="btn p" id="send">Send message</button><div className="ok" id="ok" aria-live="polite"></div></div></div></section>;
}
