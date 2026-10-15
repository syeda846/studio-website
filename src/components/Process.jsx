import { useRef, useState } from 'react';
import { process } from '../data/studioContent';
import useJourneyAnimation from '../hooks/useJourneyAnimation';
import { desktopJourney, mobileJourney } from '../utils/journeyGeometry';

const positions = [[100,310],[300,185],[500,160],[700,270],[900,220],[1100,90]];

const icons = [
  <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
  <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 8h8m-8 4h8m-8 4h5" /></>,
  <><path d="m4 16 12-12 4 4L8 20H4v-4Zm9-9 4 4M5 5h3M6.5 3.5v3M17 17h4m-2-2v4" /></>,
  <><path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" /></>,
  <><path d="M14 4c3-1 5-1 6 0 1 3-1 7-6 11l-5-5c2-3 3-5 5-6Zm-5 6-5 1-2 4 6 1m6-1-1 5-4 2-1-6m-3 2-2 3" /><circle cx="16" cy="8" r="1" /></>,
  <><path d="M4 17 10 11l4 3 6-9m-6 0h6v6M4 4v16h16" /></>
];
function JourneyTrack({ mobile, progress }) {
  const geometry = mobile ? mobileJourney : desktopJourney;
  const current = geometry.at(progress);
  const orientation = mobile ? 'mobile' : 'desktop';
  const trackClass = `journey-track journey-track-${orientation}`;
  const viewBox = mobile ? '0 0 96 1080' : '0 0 1200 460';
  return <>
    <svg className={trackClass} viewBox={viewBox} preserveAspectRatio="none" aria-hidden="true">
      <path className="journey-path-base" d={geometry.path} />
      <path className="journey-path-lit" d={current.path} />
    </svg>
    <svg className={`${trackClass} journey-marker`} viewBox={viewBox} preserveAspectRatio="none" aria-hidden="true">
      <circle className="journey-traveller" r={mobile ? 5 : 6} cx={current.x} cy={current.y} />
    </svg>
  </>;
}
export default function Process() {
  const [paused, setPaused] = useState(false);
  const scene = useRef(null);
  const progress = useJourneyAnimation(scene, paused);
  return <section id="process">
    <div className="relative flex flex-wrap items-start justify-between gap-5">
      <div className="w-full text-center [&_.sh_p]:mx-auto [&_.sh::after]:mx-auto">
        <div className="sh in">
          <span className="eyebrow block mb-[14px] text-[.72rem] font-bold uppercase tracking-[.15em] text-[color:var(--b)]">From first conversation to next chapter</span>
          <h2>A clear path from idea to launch</h2>
          <p className="mx-auto">Six connected stages. One shared direction. Follow the journey from your first idea to what comes next.</p>
        </div>
      </div>
      <button type="button" className="journey-control ml-auto shrink-0 rounded-full border border-[color:var(--line)] bg-[color:var(--gl)] px-4 py-2 text-xs text-[color:var(--muted)] lg:absolute lg:right-0 lg:top-0" aria-pressed={paused} aria-label={paused ? 'Play process animation' : 'Pause process animation'} onClick={() => setPaused(!paused)}>{paused ? 'Play journey' : 'Pause journey'} <span aria-hidden="true">{paused ? '\u25b6' : '\u2161'}</span></button>
    </div>
    <div className="journey-scene relative isolate w-full overflow-hidden" ref={scene} style={{"--journey-progress": progress}}>
      <JourneyTrack progress={progress} />
      <JourneyTrack mobile progress={progress} />
      <ol className="journey-steps relative m-0 list-none p-0" aria-label="Our six-stage project process">
        {process.map(([title,text,deliverable],index) => <li className="journey-step" key={title} style={{'--node-x':`${positions[index][0]/12}%`,'--node-y':`${positions[index][1]/4.6}%`,'--node-at-desktop':desktopJourney.milestones[index], '--node-at-mobile':mobileJourney.milestones[index]}}>
          <div className="journey-node relative grid shrink-0 place-items-center rounded-[24px]">
            <span className="journey-node-aura" aria-hidden="true" />
            <span className="journey-node-fill" aria-hidden="true" />
            <svg className="relative z-10 h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[index]}</svg>
          </div>
          <div className="journey-copy min-w-0">
            <span className="journey-step-number block text-[10px] font-bold uppercase tracking-[.16em]">Stage 0{index+1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <span className="sr-only">Deliverable: {deliverable}</span>
          </div>
        </li>)}
      </ol>
    </div>
    <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-[color:var(--muted)]"><span>Every stage has a clear deliverable and a shared checkpoint.</span><a className="text-link" href="#contact">Let us plan your first step &#8599;</a></div>
  </section>;
}
