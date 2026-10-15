import { useRef, useState } from 'react';
import SectionHeading from './SectionHeading';
import { projects } from '../data/studioContent';
function ProjectPreview({
  kind
}) {
  return <div className={`mk ${kind}`} aria-hidden="true">
  <div className="bar">
    <i />
    <i />
    <i />
  </div>
  {kind === 'm1' ? <><div className="bn sk" /><div className="ln sk" /><div className="ln s sk" /></> : kind === 'm2' ? <><div className="cartb">&#128722;<b>3</b></div><div className="tiles">
    <span />
    <span />
    <span />
    <span />
  </div></> : kind === 'm3' ? <div className="phn">
    <s />
    <s />
    <s />
    <s />
  </div> : <><svg viewBox="0 0 120 50">
    <path d="M2 42 C20 40 25 20 45 24 S70 40 85 18 S105 8 118 6" />
  </svg><em>Report ready</em></>}
</div>;
}
export default function Work() {
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  function openProject(project) {
    setSelected(project);
    dialog.current.showModal();
  }
  return <section id="work">
  <SectionHeading eyebrow="A look at what is possible" title="Small details. A complete experience.">Explore four product directions, from a business website to a more connected workflow.</SectionHeading>
  <div className="sample-notice text-[color:var(--muted)] text-[.8rem] mb-6">Concept portfolio: these are sample projects, not completed client engagements or measured results.</div>
  <div className="project-grid grid-cols-[repeat(2,minmax(0,1fr))] grid gap-4">
    {projects.map((project, i) => <article className="card project-card" key={project.name} data-r="up">
      <div className="project-preview relative mb-[22px]">
        <ProjectPreview kind={project.kind} />
        <span className="project-label absolute right-3 text-[color:var(--ink)] rounded-[99px] py-1 px-[10px] text-[.7rem]">Concept / 0{i + 1}</span>
      </div>
      <div className="project-meta flex items-center justify-between flex-wrap gap-2 mb-[14px]">
        <span className="eyebrow block text-[color:var(--b)] text-[.72rem] font-bold tracking-[.15em] uppercase mb-[14px]">
          {project.industry}
        </span>
        <span className="small-tag inline-flex items-center py-[5px] px-[10px] rounded-[99px] text-[color:var(--muted)] text-[.72rem] leading-[1.5]">
          {project.type}
        </span>
      </div>
      <h3>
        {project.name}
      </h3>
      <p>
        {project.solution}
      </p>
      <div className="project-challenge pt-4 mt-[18px]">
        <strong>The challenge</strong>
        <p>
          {project.challenge}
        </p>
      </div>
      <div className="tags">
        {project.deliverables.map(deliverable => <span key={deliverable}>
          {deliverable}
        </span>)}
      </div>
      <button type="button" className="text-link inline-flex items-center justify-between gap-[18px] bg-none text-[color:var(--b)] text-left cursor-pointer p-0" onClick={() => openProject(project)}>Explore the concept <span aria-hidden="true">&#8599;</span></button>
    </article>)}
  </div>
  <dialog className="project-dialog fixed inset-0 m-auto w-[min(640px,calc(100%_-_32px))] max-h-[85svh] p-9 rounded-[24px] text-[color:var(--ink)] overflow-y-auto overscroll-contain" ref={dialog} onClose={() => setSelected(null)} aria-labelledby="project-dialog-title">
    <button type="button" className="dialog-close absolute right-[18px] top-[18px] tg" aria-label="Close concept details" onClick={() => dialog.current.close()}>&#215;</button>
    {selected && <><span className="eyebrow block text-[color:var(--b)] text-[.72rem] font-bold tracking-[.15em] uppercase mb-[14px]">Illustrative project / {selected.type}</span><h2 id="project-dialog-title">
      {selected.name}
    </h2><ProjectPreview kind={selected.kind} /><h3>The challenge</h3><p>
      {selected.challenge}
    </p><h3>The direction</h3><p>
      {selected.solution}
    </p><h3>Proposed deliverables</h3><ul>
      {selected.deliverables.map(item => <li key={item}>
        {item}
      </li>)}
    </ul><div className="scope-note flex items-start gap-[18px] mt-6 py-[22px] px-6 rounded-[18px]">
      <p>{selected.outcome} This is a template concept; no client results are claimed.</p>
    </div><button className="btn p" type="button" onClick={() => {
          dialog.current.close();
          document.getElementById('contact').scrollIntoView({
            behavior: 'smooth'
          });
        }}>Discuss something similar &#8599;</button></>}
  </dialog>
</section>;
}
