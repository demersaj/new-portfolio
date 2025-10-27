const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">
            I am a dedicated professional at the intersection of machine learning and product management, 
            driven by a passion for building innovative, data-driven solutions that deliver meaningful impact. 
            With a strong foundation in developing and deploying machine learning models, combined with strategic 
            product management expertise, I excel at transforming complex technical concepts into scalable, user-centric products.
          </p>
          <p className="about-text">
            Throughout my career, I&apos;ve led cross-functional teams to conceptualize, design, and deliver AI-powered 
            solutions that solve real-world problems. I thrive in roles that challenge me to bridge the gap between 
            technical teams and business objectives, whether it&apos;s defining product roadmaps, managing stakeholder 
            expectations, or deploying ML models into production environments.
          </p>
          <p className="about-text">
            I bring a unique ability to align cutting-edge machine learning capabilities with market needs, driving 
            end-to-end product development cycles while fostering collaboration among engineers, data scientists, and 
            designers. With a strong focus on delivering measurable results, I am committed to leveraging AI and machine 
            learning to unlock new opportunities and shape the future of intelligent products.
          </p>
          
          <div className="skills-grid">
            <div className="skill-item">
              <span className="skill-icon">🎯</span>
              <h3>Product Strategy</h3>
              <p>Defining roadmaps and aligning vision with execution</p>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🤖</span>
              <h3>Machine Learning</h3>
              <p>Developing and deploying ML models into production</p>
            </div>
        
            <div className="skill-item">
              <span className="skill-icon">📊</span>
              <h3>Data-Driven Decisions</h3>
              <p>Leveraging analytics to drive measurable results</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
