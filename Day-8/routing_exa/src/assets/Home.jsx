import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <main className="home">
      <section className="hero">
        <h1 className="hero-title">Welcome to the Demo Blog</h1>
        <p className="hero-sub">A small demo showing React Router nested routes and pages.</p>
        <div className="hero-actions">
          <Link to="/postpage" className="btn">View Posts</Link>
          <Link to="/gallery" className="btn secondary">Gallery</Link>
        </div>
      </section>
    </main>
  )
}

export default Home