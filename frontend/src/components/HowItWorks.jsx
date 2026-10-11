function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: '🧭',
      title: 'Discover yourself',
      description:
        'Tell us about your education, interests, strengths, and goals.',
    },
    {
      number: '02',
      icon: '✨',
      title: 'Find your direction',
      description:
        'Explore career paths that align with your interests and identify skills to develop.',
    },
    {
      number: '03',
      icon: '🚀',
      title: 'Build your roadmap',
      description:
        'Get actionable learning steps to help you work towards your chosen career.',
    },
  ]

  return (
    <section className="how-section" id="how-it-works">
      <div className="section-heading">
        <span className="section-eyebrow">YOUR JOURNEY STARTS HERE</span>

        <h2>
          From confusion to <span className="gradient-text">clarity.</span>
        </h2>

        <p>
          A simpler way to explore careers, understand your skill gaps,
          and plan your next move.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <article className="step-card" key={step.number}>
            <div className="step-top">
              <span className="step-icon">{step.icon}</span>
              <span className="step-number">{step.number}</span>
            </div>

            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks