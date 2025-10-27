import { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e, targetId) => {
    e.preventDefault()
    const section = document.querySelector(targetId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="navbar" style={{ boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>Andrew Demers</a>
        </div>
        <ul className="nav-menu">
          <li><a href="#about" className="nav-link" onClick={(e) => scrollToSection(e, '#about')}>About</a></li>
          <li><a href="#experience" className="nav-link" onClick={(e) => scrollToSection(e, '#experience')}>Experience</a></li>
          <li><a href="#skills" className="nav-link" onClick={(e) => scrollToSection(e, '#skills')}>Skills</a></li>
          <li><a href="#education" className="nav-link" onClick={(e) => scrollToSection(e, '#education')}>Education</a></li>
          <li><a href="#certifications" className="nav-link" onClick={(e) => scrollToSection(e, '#certifications')}>Certifications</a></li>
          <li><a href="#contact" className="nav-link" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
