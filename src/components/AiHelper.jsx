export default function AiHelper() {
  return <section id="ai">
  <div className="ai grid items-center gap-11">
    <div data-r="left">
      <div className="sh">
        <h2>Less busywork. More room to grow.</h2>
        <p>Practical assistants and connected workflows for the tasks that keep coming back. Start with one useful problem, then build from there.</p>
      </div>
      <ul>
        <li>Customer support chatbots for your website or app</li>
        <li>Order, booking and FAQ assistants</li>
        <li>Automated reports and internal workflows</li>
      </ul>
      <a className="btn p" href="#contact">Discuss an AI workflow</a>
    </div>
    <div className="chat" data-r="right">
      <div className="demo-caption py-[10px] px-[18px] text-[color:var(--muted)] text-[.72rem] tracking-[.04em]">Illustrative demo / scripted conversation</div>
      <div className="chh">
        <img className="face" id="face" alt="" />
        <div>
          <b>Studio AI helper</b>
          <small>● Online</small>
        </div>
      </div>
      <div className="msgs" id="msgs" aria-live="polite"></div>
    </div>
  </div>
</section>;
}
