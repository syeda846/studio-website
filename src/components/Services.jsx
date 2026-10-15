import SectionHeading from './SectionHeading';
import { services } from '../data/studioContent';
export default function Services() {
  return <section id="services">
  <SectionHeading eyebrow="Built around your business" title="The right solution for your next stage">From a first website to a connected business workflow, we shape the build around what you actually need.</SectionHeading>
  <div className="bento grid gap-4">
    {services.map(item => <article className="card c service-card flex flex-col items-start" key={item.title} data-r="up">
      <div className="ic">
        {item.icon}
      </div>
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
      <button type="button" className="text-link inline-flex items-center justify-between gap-[18px] bg-none text-[color:var(--b)] text-left cursor-pointer p-0" data-pre={item.interest}>
        {item.cta}
        <span aria-hidden="true">&#8599;</span>
      </button>
    </article>)}
  </div>
</section>;
}
