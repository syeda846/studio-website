import SectionHeading from './SectionHeading';
import { commitments } from '../data/studioContent';
export default function WhyUs() {
  return <section id="why">
  <SectionHeading eyebrow="A better way to build together" title="Clear expectations. Close collaboration.">A small team that stays involved, keeps you informed, and makes the next step clear.</SectionHeading>
  <div className="why grid gap-4">
    {commitments.map(item => <article className="card" data-r="zoom" key={item.title}>
      <div className="ic">
        {item.icon}
      </div>
      <h3>
        {item.title}
      </h3>
      <p>
        {item.text}
      </p>
    </article>)}
  </div>
</section>;
}
