import robotImage from "../assets/robot.webp";
export default function Hero() {
  return <section className="hero grid items-center gap-[30px]" id="top">
 <div><span className="pill"><i></i>Open for new projects</span>
 <h1><span className="ln"><span>We build websites,</span></span><span className="ln"><span>apps and AI tools</span></span><span className="ln"><span>that grow your business.</span></span></h1>
 <p className="lead">Dev Studio designs and develops modern digital products for businesses and startups, from the first audit to launch and ongoing support.</p>
 <div className="btns"><a className="btn p" href="#contact">Start your project</a><a className="btn" href="#work">See concept previews</a></div>
 <div className="trust"><span>Free first audit</span><span>Clear step-by-step process</span><span>Support after launch</span></div></div>
 <div className="stage" id="stg"><div className="orb"></div><div className="orbit" style={{
        "--z": "0deg"
      }}><div className="ring"><i></i></div></div><div className="orbit o2" style={{
        "--z": "-24deg"
      }}><div className="ring"><i></i></div></div><div className="plat"></div>
 <span className="chip c1">⚛ MERN</span><span className="chip c2">🤖 AI</span><span className="chip c3">📱 Apps</span><span className="chip c4">🛒 Store</span>
 <div className="bot" id="bot"><img id="rb" alt="Friendly helper robot with open hands" src={robotImage} /></div><div className="bub" id="bub" aria-live="polite"></div></div>
</section>;
}
