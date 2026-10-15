export default function Team() {
  return <section id="team">
  <div className="sh" data-r="up">
    <h2>Meet the team</h2>
    <p>A focused team covering development, AI workflows, and client communication. You know who is involved and where to bring your questions.</p>
  </div>
  <div className="team grid gap-[18px]">
    <div className="card pe" data-r="left">
      <div className="av">UA</div>
      <div>
        <h3>Usman Asghar</h3>
        <p>Leads development and technical implementation.</p>
        <div className="tags">
          <span>MERN</span>
          <span>Android</span>
          <span>Desktop</span>
        </div>
      </div>
    </div>
    <div className="card pe" data-r="right">
      <div className="av">ZS</div>
      <div>
        <h3>Syeda Zahra Saeed</h3>
        <p>Client communication, project closing and AI development.</p>
        <div className="tags">
          <span>Client success</span>
          <span>AI tools</span>
          <span>Automation</span>
        </div>
      </div>
    </div>
  </div>
  <div className="team-note flex items-center gap-6 mt-6">
    <span className="small-tag inline-flex items-center py-[5px] px-[10px] rounded-[99px] text-[color:var(--muted)] text-[.72rem] leading-[1.5]">Built for remote collaboration</span>
    <p>Project discussions, design reviews, and handover can happen remotely through agreed channels and meeting times. Team biographies are sample copy to review before publishing.</p>
  </div>
</section>;
}
