import { useState } from 'react';
import SectionHeading from './SectionHeading';
import { faqs } from '../data/studioContent';
export default function Faq() {
  const [open, setOpen] = useState(0);
  return <section id="faq">
  <div className="faq-layout grid grid-cols-[.8fr_1.2fr] gap-15">
    <div>
      <SectionHeading eyebrow="Before we get started" title="A few things you might be wondering.">A clear project begins with clear answers.</SectionHeading>
      <a href="#contact" className="text-link inline-flex items-center justify-between gap-[18px] bg-none text-[color:var(--b)] text-left cursor-pointer p-0">Have another question? Let us talk &#8599;</a>
    </div>
    <div className="faq" id="faqs" data-r="up">
      {faqs.map(([question, answer], i) => <div className={`fq${open === i ? ' open' : ''}`} key={question}>
        <button type="button" aria-expanded={open === i} aria-controls={`answer-${i}`} onClick={() => setOpen(open === i ? null : i)}>
          {question}
          <s aria-hidden="true">+</s>
        </button>
        <div id={`answer-${i}`} inert={open !== i}>
          <p>
            {answer}
          </p>
        </div>
      </div>)}
    </div>
  </div>
</section>;
}
