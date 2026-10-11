const backgrounds = ['B.Tech', 'B.Com', 'B.A.', 'B.Sc.', 'Diploma']

function EducationChips({ selectedEducation, setSelectedEducation }) {

  return (
    <section id="education" className="education-section">
      <p className="education-label">
        LET'S START WITH YOUR BACKGROUND
      </p>

      <h2>What's your educational background?</h2>

      <p className="education-description">
        Choose your current degree to get started.
      </p>

      <div className="education-chips">
        {backgrounds.map((background) => (
          <button
            key={background}
            className={`education-chip ${
             selectedEducation === background ? 'selected' : ''
            }`}
         onClick={() => setSelectedEducation(background)}
          >
            {background}
            {selectedEducation === background && <span> ✓</span>}
          </button>
        ))}
           </div>

      <p className="education-selection">
        You've selected: <strong>{selectedEducation}</strong>
      </p>
    </section>
  )
}

export default EducationChips