import SectionHeading from './SectionHeading';
import { testimonials } from '../data/studioContent';
export default function Testimonials() {
  return <section id="testimonials">
  <SectionHeading eyebrow="The experience we aim to deliver" title="Good work starts with a good partnership.">Clear communication, useful feedback, and confidence in the next step.</SectionHeading>
  <div className="sample-notice text-[color:var(--muted)] text-[.8rem] mb-6">Illustrative testimonials: sample names and quotes for this template, not actual client reviews.</div>
  <div className="testimonial-grid grid-cols-[repeat(3,minmax(0,1fr))] grid gap-4">
    {testimonials.map(item => <figure className="card testimonial-card flex flex-col items-start" data-r="up" key={item.name}>
      <div className="quote-mark text-[color:var(--v)]" aria-hidden="true">&#8220;</div>
      <span className="small-tag inline-flex items-center py-[5px] px-[10px] rounded-[99px] text-[color:var(--muted)] text-[.72rem] leading-[1.5]">
        {item.focus}
      </span>
      <blockquote>
        {item.quote}
      </blockquote>
      <figcaption>
        <span className="quote-avatar grid place-items-center shrink-0 w-10 h-10 rounded-[50%] text-[color:var(--btnt)] text-[.75rem] font-bold">
          {item.initials}
        </span>
        <div>
          <strong>
            {item.name}
          </strong>
          <span>
            {item.role}
          </span>
        </div>
      </figcaption>
    </figure>)}
  </div>
</section>;
}
