import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './Post.css'

const Post = () => {
  const { id } = useParams()

  // Example content for a post page — replace with real data as needed
  const title = `Sample Post ${id}`
  const date = 'Dec 10, 2025'

  return (
    <div className="post">
      <article className="post-card">
        <header>
          <h1 className="post-title">{title}</h1>
          <div className="post-meta">Posted on <time>{date}</time></div>
        </header>

        <section className="post-body">
          <p>
            This is a sample post body for post ID {id}. Replace this placeholder
            with fetched post content, markdown rendering, or API-driven data.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>
        </section>

        <footer className="post-actions">
          <Link to="/postpage" className="btn">Back to posts</Link>
        </footer>
      </article>
    </div>
  )
}

export default Post