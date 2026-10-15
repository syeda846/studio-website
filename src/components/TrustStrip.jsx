export default function TrustStrip() {
  return <section className="trust-section pt-4 pb-10" aria-label="Our approach">
  <div className="trust-strip grid grid-cols-[1fr_1fr] items-center gap-8 py-[30px] px-0" data-r="up">
    <div>
      <span className="eyebrow block text-[color:var(--b)] text-[.72rem] font-bold tracking-[.15em] uppercase mb-[14px]">A focused studio, a shared goal</span>
      <h2>Small team. Clear process.<br />Thoughtful digital products.</h2>
    </div>
    <div className="trust-signals grid gap-3">
      {['Direct collaboration', 'Reviewable milestones', 'Design through deployment'].map((text, i) => <div key={text}>
        <span className="signal-number text-[color:var(--v)] font-bold text-[.75rem]">0{i + 1}</span>
        <span>
          {text}
        </span>
      </div>)}
    </div>
  </div>
</section>;
}
