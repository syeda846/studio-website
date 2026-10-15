export default function Footer() {
  return <footer className="studio-footer block pb-8">
  <div className="footer-top grid grid-cols-[1.3fr_.65fr_1fr] gap-12 pb-8">
    <div>
      <a className="logo" href="#top">Dev Studio<span className="brand-dot w-2 h-2 rounded-[50%]" /></a>
      <p>Thoughtful websites, applications, and smarter workflows. Built around your next stage.</p>
      <span className="small-tag inline-flex items-center py-[5px] px-[10px] rounded-[99px] text-[color:var(--muted)] text-[.72rem] leading-[1.5]">Independent studio / Remote collaboration</span>
    </div>
    <div>
      <h3>Explore</h3>
      <nav aria-label="Footer navigation">
        <a href="#services">Services</a>
        <a href="#work">Our work</a>
        <a href="#process">Process</a>
        <a href="#team">About the team</a>
      </nav>
    </div>
    <div>
      <h3>Let us build something useful.</h3>
      <a href="#contact" className="text-link inline-flex items-center justify-between gap-[18px] bg-none text-[color:var(--b)] text-left cursor-pointer p-0">Discuss your project &#8599;</a>
      <p>hello@example.com<br /><small>Sample contact email</small></p>
    </div>
  </div>
  <details id="privacy" className="privacy-notice py-4 px-0 text-[.8rem]">
    <summary>Sample privacy notice</summary>
    <p>This preview form does not send project details to a server. Before publishing, replace this notice with your actual data collection, service providers, retention, and contact practices. Google Fonts is loaded from an external provider, and theme preferences are stored in your browser.</p>
  </details>
  <div className="footer-bottom flex flex-wrap justify-between gap-4 pt-6 text-[.75rem]">
    <span>&#169; {new Date().getFullYear()} Dev Studio. All rights reserved.</span>
    <span>Designed with purpose. Built with care.</span>
    <a href="#top">Back to top &#8593;</a>
  </div>
</footer>;
}
