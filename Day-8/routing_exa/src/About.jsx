import React from 'react'
import './About.css'

const About = () => {
  return (
    <main className="about">
      <section className="about-card">
        <h2>About This Demo</h2>
        <p>
          This small app demonstrates nested routing with React Router and
          shows simple page components wired together.
        </p>
        <p>Use the navigation to explore pages and sample posts.</p>
      </section>
    </main>
  )
}

export default About