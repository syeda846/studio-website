export default function SectionHeading({
  eyebrow,
  title,
  children
}) {
  return <div className="sh" data-r="up">
  {eyebrow && <span className="eyebrow block text-[color:var(--b)] text-[.72rem] font-bold tracking-[.15em] uppercase mb-[14px]">
    {eyebrow}
  </span>}
  <h2>
    {title}
  </h2>
  {children && <p>
    {children}
  </p>}
</div>;
}
