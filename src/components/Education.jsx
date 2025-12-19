const Education = () => {
  const educations = [
    {
      icon: '🧠',
      degree: 'M.S. in Artificial Intelligence',
      school: 'University of Colorado Boulder',
      year: '2027 (expected)',
      details: 'Deep, specialized dive into the theory and application of modern AI.'
    },
    {
      icon: '🎓',
      degree: 'Master of Business Administration',
      school: 'Louisiana State University Shreveport',
      year: '2022',
      details: 'Specialized in Data Analytics and Business Intelligence.'
    },
    {
      icon: '📚',
      degree: 'B.S. in Computer Science',
      school: 'Oregon State University',
      year: '2019',
      details: 'Focus on data structures, algorithms, and software engineering.'
    },
    {
      icon: '📜',
      degree: 'B.S.in Mechanical Engineering',
      school: 'James Madison University',
      year: '2015',
      details: 'Business minor with a focus on mechanical engineering.'
    }
  ]

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {educations.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">{edu.icon}</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-school">{edu.school}</p>
              <p className="education-year">{edu.year}</p>
              <p className="education-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
