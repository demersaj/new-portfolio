const Hero = () => {
  const scrollToSection = (e, targetId) => {
    e.preventDefault()
    const section = document.querySelector(targetId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-image-container">
          <img 
            src="/headshot.jpg" 
            alt="Andrew Demers" 
            className="hero-image"
            onError={(e) => {
              // Fallback if image doesn't exist
              e.target.style.display = 'none'
            }}
          />
        </div>
        <h1 className="hero-title">
          <span className="gradient-text">AI Product Manager</span>
        </h1>
        <p className="hero-subtitle">
          Building innovative, data-driven solutions at the intersection of machine learning and product management
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary" onClick={(e) => scrollToSection(e, '#contact')}>
            Get in Touch
          </a>
          <a href="#about" className="btn btn-secondary" onClick={(e) => scrollToSection(e, '#about')}>
            Learn More
          </a>
          <a href="/resume.pdf" download="Andrew_Demers_Resume.pdf" className="btn btn-secondary">
            📄 Resume
          </a>
        </div>
      </div>
      <div className="hero-decoration">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </section>
  )
}

export default Hero
