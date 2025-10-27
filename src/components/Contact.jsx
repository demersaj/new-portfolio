const Contact = () => {
  const contacts = [
    { icon: '📧', link: 'mailto:andrew.demers91@gmail.com', text: 'Email Me!' },
    { icon: '💼', link: 'https://www.linkedin.com/in/andrew-demers/', text: 'LinkedIn' },
    { icon: '💻', link: 'https://www.github.com/demersaj', text: 'GitHub' }
  ]

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-subtitle">
          Let&apos;s collaborate on building the next generation of AI-powered products.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📄</span>
              <a 
                href="/resume.pdf" 
                download="Andrew_Demers_Resume.pdf" 
                className="contact-link"
              >
                Download Resume
              </a>
            </div>
            {contacts.map((contact, index) => (
              <div key={index} className="contact-item">
                <span className="contact-icon">{contact.icon}</span>
                <a href={contact.link} target={contact.link.startsWith('http') ? '_blank' : '_self'} 
                   rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''} 
                   className="contact-link">
                  {contact.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
