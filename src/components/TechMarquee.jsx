const technologies = ['MongoDB', 'Express', 'React', 'Node.js', 'Android', 'Desktop apps', 'AI', 'Automation', 'E-commerce', 'UI/UX'];
export default function TechMarquee() {
  return <div className="mq" aria-label={`Our toolkit: ${technologies.join(', ')}`}>
  <div className="marquee-track" aria-hidden="true">
    {[0, 1].map(copy => <span className="marquee-group flex shrink-0 items-center" key={copy}>
      {technologies.map((name, i) => <span className="tech-word flex shrink-0 items-center gap-[13px] py-0 px-5" key={name}>
        <span className="tech-index text-[color:var(--muted)] mt-[3px]">
          {String(i + 1).padStart(2, '0')}
        </span>
        <span className="tech-name text-[color:transparent]">
          {name}
        </span>
        <span className="tech-spark text-[color:var(--v)] text-[1rem] ml-[22px]">&#10022;</span>
      </span>)}
    </span>)}
  </div>
</div>;
}
