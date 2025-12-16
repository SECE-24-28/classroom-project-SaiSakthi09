import React, { useState } from 'react'
import './Newpost.css'

const NewPost = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submit = (e) => {
    e.preventDefault()
    // Placeholder: you'd normally POST to an API here
    alert(`Creating post: ${title}`)
    setTitle('')
    setBody('')
  }

  return (
    <main className="newpost">
      <h2>Create New Post</h2>
      <form onSubmit={submit} className="newpost-form">
        <label>
          Title
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Body
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        </label>
        <button type="submit" className="btn">Create</button>
      </form>
    </main>
  )
}

export default NewPost