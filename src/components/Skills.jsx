import { useEffect, useRef, useState } from 'react'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const currentSection = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

  const languages = [
    { name: 'Python3', icon: '🐍', color: '#3776ab' },
    { name: 'JavaScript ES6+', icon: '💻', color: '#f7df1e' },
    { name: 'SQL', icon: '🗄️', color: '#336791' },
    { name: 'React', icon: '⚛️', color: '#61dafb' },
    { name: 'MongoDB/JSON', icon: '📊', color: '#47a248' }
  ]

  const applications = [
    { name: 'Redash', icon: '📈', color: '#ff4081' },
    { name: 'Looker', icon: '👁️', color: '#4285f4' },
    { name: 'Tableau', icon: '📊', color: '#6369ff' },
    { name: 'Jira', icon: '🎯', color: '#0052cc' },
    { name: 'Postman', icon: '📮', color: '#ff6c37' },
    { name: 'git', icon: '🔧', color: '#f05032' },
    { name: 'AWS', icon: '☁️', color: '#ff9900' },
    { name: 'Figma', icon: '🎨', color: '#f24e1e' },
    { name: 'Miro', icon: '🧩', color: '#ffc612' },
    { name: 'Hugging Face', icon: '🤗', color: '#ffd21e' },
    { name: 'Langchain', icon: '🔗', color: '#ff6b6b' },
    { name: 'n8n', icon: '🔄', color: '#ff6b6b' }
  ]

  const tools = [
    { name: 'LLMs', icon: '🧠', color: '#667eea' },
    { name: 'Agentic AI', icon: '🤖', color: '#764ba2' },
    { name: 'Machine Learning', icon: '📚', color: '#f093fb' },
    { name: 'Computer Vision', icon: '👁️', color: '#4facfe' },
    { name: 'SLMs', icon: '💡', color: '#43e97b' },
    { name: 'MLLMs', icon: '🔮', color: '#fa709a' }
  ]

  return (
    <section id="skills" className="section section-alt" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          Skills & Expertise
        </h2>
        <p className="section-subtitle">
          A comprehensive toolkit for building AI-powered products
        </p>
        
        <div className={`skills-categories ${isVisible ? 'visible' : ''}`}>
          {/* Languages */}
          <div className="skill-category">
            <h3 className="skill-category-title">
              <span className="skill-category-icon">💻</span>
              Languages
            </h3>
            <div className="skill-badge-container">
              {languages.map((lang, index) => (
                <div 
                  key={index} 
                  className="skill-badge magnetic-card"
                  style={{ 
                    '--delay': `${index * 0.1}s`,
                    '--skill-color': lang.color 
                  }}
                >
                  <span className="badge-icon">{lang.icon}</span>
                  <span className="badge-text">{lang.name}</span>
                  <div className="skill-badge-glow"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="skill-category">
            <h3 className="skill-category-title">
              <span className="skill-category-icon">🛠️</span>
              Applications
            </h3>
            <div className="skill-badge-container">
              {applications.map((app, index) => (
                <div 
                  key={index} 
                  className="skill-badge magnetic-card"
                  style={{ 
                    '--delay': `${index * 0.1}s`,
                    '--skill-color': app.color 
                  }}
                >
                  <span className="badge-icon">{app.icon}</span>
                  <span className="badge-text">{app.name}</span>
                  <div className="skill-badge-glow"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="skill-category">
            <h3 className="skill-category-title">
              <span className="skill-category-icon">⚙️</span>
              Tools & Technologies
            </h3>
            <div className="skill-badge-container">
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className="skill-badge magnetic-card"
                  style={{ 
                    '--delay': `${index * 0.1}s`,
                    '--skill-color': tool.color 
                  }}
                >
                  <span className="badge-icon">{tool.icon}</span>
                  <span className="badge-text">{tool.name}</span>
                  <div className="skill-badge-glow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
