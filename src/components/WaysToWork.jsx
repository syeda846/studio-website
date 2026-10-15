import SectionHeading from './SectionHeading';
const options = [{
  number: '01',
  title: 'New build',
  text: 'For an idea that needs a clear plan and a complete first version.',
  features: ['Discovery & project scoping', 'UI/UX design & development', 'Testing, deployment & handover'],
  interest: 'New project',
  cta: 'Plan a new project'
}, {
  number: '02',
  title: 'Redesign & improve',
  text: 'For a website or product that is ready for a better experience.',
  features: ['Review your current setup', 'Prioritise improvements', 'Redesign & technical upgrades'],
  interest: 'Redesign and upgrade',
  cta: 'Discuss an upgrade'
}, {
  number: '03',
  title: 'Maintain & extend',
  text: 'For a live product that needs care, improvements, and room to grow.',
  features: ['Agreed maintenance scope', 'Fixes & feature development', 'Ongoing technical collaboration'],
  interest: 'Ongoing support',
  cta: 'Explore ongoing support'
}];
export default function WaysToWork() {
  return <section id="ways">
  <SectionHeading eyebrow="Meet your business where it is" title="Three ways to move forward">Start something new, improve what you have, or keep your product moving.</SectionHeading>
  <div className="ways grid gap-4 items-stretch">
    {options.map((item, i) => <article key={item.title} className={`card engagement-card${i === 1 ? ' hot' : ''}`} data-r="up">
      <div className="engagement-inner">
        <span className="eyebrow block text-[color:var(--b)] text-[.72rem] font-bold tracking-[.15em] uppercase mb-[14px]">{item.number} / {i === 1 ? 'A fresh direction' : 'Your next chapter'}</span>
        <h3>
          {item.title}
        </h3>
        <p>
          {item.text}
        </p>
        <ul>
          {item.features.map(feature => <li key={feature}>
            {feature}
          </li>)}
        </ul>
        <button className={`btn${i === 1 ? ' p' : ''}`} type="button" data-pre={item.interest}>
          {item.cta}
        </button>
      </div>
    </article>)}
  </div>
  <div className="scope-note flex items-start gap-[18px] mt-6 py-[22px] px-6 rounded-[18px]">
    <span className="scope-symbol text-[2rem] text-[color:var(--v)] leading-[1.3]" aria-hidden="true">&#9671;</span>
    <div>
      <strong>A proposal built around your project.</strong>
      <p>Every project is scoped individually. After our initial conversation, you receive a proposal with deliverables, milestones, and pricing. Third-party costs are identified separately.</p>
    </div>
  </div>
</section>;
}
