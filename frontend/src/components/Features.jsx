function Features() {
  const features = [
    {
      icon: '🧭',
      title: 'Career Discovery',
      description:
        'Explore career paths that connect with your interests, education, and strengths.',
      tag: 'Find your direction',
    },
    {
      icon: '🧠',
      title: 'Skill Gap Analysis',
      description:
        'Understand which skills you already have and which ones you need to develop.',
      tag: 'Know what to learn',
    },
    {
      icon: '🗺️',
      title: 'Personalised Roadmaps',
      description:
        'Turn your career goals into manageable learning steps and practical milestones.',
      tag: 'Plan your journey',
    },
    {
      icon: '🤖',
      title: 'AI Career Assistant',
      description:
        'Ask career-related questions and get guidance tailored to your goals and background.',
      tag: 'Get guidance',
    },
    {
      icon: '📈',
      title: 'Progress Tracking',
      description:
        'Keep track of completed milestones and see how your learning journey develops.',
      tag: 'See your growth',
    },
    {
      icon: '💼',
      title: 'Opportunity Explorer',
      description:
        'Discover relevant projects, learning resources, internships, and career opportunities.',
      tag: 'Take the next step',
    },
  ]

  return (
    <section className="features-section" id="features">
      <div className="section-heading">
        <span className="section-eyebrow">EVERYTHING IN ONE PLACE</span>

        <h2>
          Your career journey, <span className="gradient-text">simplified.</span>
        </h2>

        <p>
          From figuring out what suits you to taking your next step,
          LAKSHYA helps you move forward with clarity.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <article className="feature-card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

            <span className="feature-tag">
              {feature.tag} <span>↗</span>
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features