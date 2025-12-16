import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './PostPage.css'

const PostPage = () => {
  return (
    <main className="postpage">
      <aside className="postpage-list">
        <h3>Posts</h3>
        <ol>
          <li><Link to="/postpage/1">Post 1</Link></li>
          <li><Link to="/postpage/2">Post 2</Link></li>
          <li><Link to="/postpage/3">Post 3</Link></li>
          <li><Link to="/postpage/newpost">New Post</Link></li>
        </ol>
      </aside>

      <section className="postpage-content">
        <Outlet />
      </section>
    </main>
  )
}

export default PostPage