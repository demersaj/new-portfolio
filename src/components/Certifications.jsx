const Certifications = () => {
  const certifications = [
    {
      name: 'Cognitive Project Management for AI (CPMAI)+ PLUS',
      issuer: 'Project Management Institute',
      date: 'June 2025',
      icon: '🧠'
    },
    {
      name: 'Certified Scrum Product Owner (CSPO)',
      issuer: 'Scrum Alliance',
      date: 'June 2022',
      icon: '🎯'
    },
    {
      name: 'Project Management Professional (PMP)',
      issuer: 'Project Management Institute',
      date: 'April 2022',
      icon: '📋'
    }
  ]

  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-icon">{cert.icon}</div>
              <h3 className="certification-name">{cert.name}</h3>
              <p className="certification-issuer">{cert.issuer}</p>
              <p className="certification-date">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
