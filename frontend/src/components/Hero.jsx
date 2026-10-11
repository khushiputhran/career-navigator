import DashboardPreview from './DashboardPreview'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="status-dot"></span>
          Career guidance for every background
        </div>

        <h1>
          Find your <span className="gradient-text">lakshya.</span>
          <br />
          Build your future.
        </h1>

        <p className="hero-description">
          Not sure what comes next? Discover careers that match your interests,
          identify the skills you need, and follow a roadmap designed around you.
        </p>

        <div className="hero-buttons">
          <a href="#get-started" className="primary-button">
            Discover my path <span>↗</span>
          </a>

          <a href="#how-it-works" className="secondary-button">
            See how it works <span>▷</span>
          </a>
        </div>

        <div className="hero-note">
          <span>✦</span> Your background doesn't define your possibilities.
        </div>
      </div>

      <div className="hero-visual">
        <DashboardPreview />
      </div>
    </section>
  )
}

export default Hero