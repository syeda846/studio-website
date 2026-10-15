export default function Background() {
  return <>
    <div className="pg" id="pg" />
    <div className="ambient-background" aria-hidden="true">
      <canvas id="cv" />
      <div className="bl b1" /><div className="bl b2" /><div className="bl b3" />
    </div>
  </>;
}
