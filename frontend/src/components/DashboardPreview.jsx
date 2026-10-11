function DashboardPreview() {
  return (
    <div className="dashboard-preview">
      <div className="dashboard-header">
        <div>
          <p className="dashboard-eyebrow">YOUR CAREER SNAPSHOT</p>
          <h3>Your journey starts here ✨</h3>
        </div>

        <span className="dashboard-status">● Live preview</span>
      </div>

      <div className="dashboard-match-card">
        <div className="match-info">
          <span className="card-label">Career Match Score</span>
          <h3>92%</h3>
          <p>Your interests align with this career!</p>
        </div>

        <div className="match-ring">
          <div className="match-ring-inner">
            <span>92%</span>
            <small>Match</small>
          </div>
        </div>
      </div>

      <div className="dashboard-bottom">
        <div className="dashboard-small-card">
          <span className="card-label">Skills to build</span>
          <h4>Skill gap analysis</h4>

          <div className="skill-row">
            <span>Python</span>
            <div className="skill-track">
              <div className="skill-fill skill-one"></div>
            </div>
          </div>

          <div className="skill-row">
            <span>Communication</span>
            <div className="skill-track">
              <div className="skill-fill skill-two"></div>
            </div>
          </div>

          <div className="skill-row">
            <span>Problem solving</span>
            <div className="skill-track">
              <div className="skill-fill skill-three"></div>
            </div>
          </div>
        </div>

        <div className="dashboard-small-card roadmap-card">
          <span className="card-label">YOUR NEXT STEPS</span>
          <h4>Career roadmap</h4>

          <div className="roadmap-step">
            <span className="roadmap-number">01</span>
            <div>
              <strong>Learn the basics</strong>
              <p>Build your foundation</p>
            </div>
          </div>

          <div className="roadmap-step">
            <span className="roadmap-number">02</span>
            <div>
              <strong>Build projects</strong>
              <p>Put your skills to work</p>
            </div>
          </div>

          <div className="roadmap-step">
            <span className="roadmap-number">03</span>
            <div>
              <strong>Explore opportunities</strong>
              <p>Take your next step</p>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-footer">
        <span>✦</span> Your future, one step at a time.
      </div>
    </div>
  )
}

export default DashboardPreview