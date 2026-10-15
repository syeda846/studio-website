import SectionHeading from './SectionHeading';
import { challenges } from '../data/studioContent';
export default function Challenges() {
  return <section id="challenges">
  <SectionHeading eyebrow="Start with the real challenge" title="What is holding your business back?">You do not need another tool for its own sake. You need a better way to move your business forward.</SectionHeading>
  <div className="challenge-grid grid-cols-[repeat(2,minmax(0,1fr))] grid gap-4">
    {challenges.map(item => <article className="card challenge-card" key={item.number} data-r="up">
      <div className="challenge-top flex items-center justify-between gap-4 mb-6">
        <span className="outline-number text-[3.2rem] leading-[1] text-[color:transparent]">
          {item.number}
        </span>
        <span className="small-tag inline-flex items-center py-[5px] px-[10px] rounded-[99px] text-[color:var(--muted)] text-[.72rem] leading-[1.5]">
          {item.tag}
        </span>
      </div>
      <h3>
        {item.title}
      </h3>
      <p>
        {item.text}
      </p>
      <div className="solution-line mt-6 pt-[18px] flex items-start gap-3 text-[color:var(--ink)] text-[.9rem]">
        <span aria-hidden="true">&#8599;</span>
        {item.solution}
      </div>
    </article>)}
  </div>
  <p className="section-note text-[color:var(--muted)] text-center mt-[26px]">We turn these challenges into clear, usable digital solutions.</p>
</section>;
}
