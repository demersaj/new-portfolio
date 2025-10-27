const Experience = () => {
  const experiences = [
    {
      title: 'Technical Product Manager - AI Application',
      company: 'webAI',
      date: 'March 2024 - Present',
      description: 'Lead the end-to-end development of a no-code AI/ML platform, empowering users to build and deploy models without coding. A key achievement was bridging complex technology with intuitive design, which included optimizing for Apple hardware to enhance on-device performance and privacy. The result was a significant reduction in time-to-market and cloud costs while increasing enterprise contract value.'
    },
    {
      title: 'Software Project Manager',
      company: 'AI/ML SaaS Company',
      date: '2020 - 2022',
      description: 'Led the end-to-end delivery of software for a general-purpose, humanoid robot, managing project plans to ensure on-time and on-budget execution. I also act as the key bridge between engineering teams, aligning software development with hardware delivery to ensure successful integration.'
    },
    {
      title: 'Associate Product Manager - Computer Vision',
      company: 'Flash',
      date: 'July 2022 - April 2023',
      description: 'Managed the product roadmap and development for a computer vision program, making key trade-offs and working with cross-functional teams to deliver innovative SaaS features. My responsibilities also included defining product requirements based on market data and creating testing protocols for the rapid deployment of both hardware and software.'
    },
    {
      title: 'Project Manger I/II - Strategic Projects',
      company: 'Flash',
      date: 'June 2021 - July 2022',
      description: 'Oversaw the end-to-end software development lifecycle for B2B2C engineering projects, managing technical risks and ensuring agile execution across cross-functional teams. My focus was on spearheading technical execution to deploy robust software solutions on schedule while managing resources to meet budgetary constraints and technical requirements.'
    },
    {
      title: 'Software Engineer',
      company: 'Ultra Electronics',
      date: 'Nov. 2019 - July 2021',
      description: 'Enhanced software design and implementation using Agile methodologies while actively contributing to quality assurance through unit testing, code reviews, and mentorship. I also engineered a server-based development environment using ESXi and vSphere, which accelerated testing cycles and enabled real-time troubleshooting for the entire team.'
  }
  ]

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-date">{exp.date}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
