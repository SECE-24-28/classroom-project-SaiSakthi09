import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './Context/DataContext'

const EditPost = () => {
  const { posts } = useContext(DataContext)
  const { id } = useParams()
  const post = posts.find((p) => p.id == id)
  
  if (!post) {
    return (
      <div>
        <h1>There is no data..</h1>
      </div>
    )
  }
       
  return (
    <div>
      <h1>Edit Post</h1>
      <hr />
      <input type="text" value={post.title} readOnly />
      <br />
      <textarea value={post.body} readOnly />
      <br />
      <button>Delete</button>
    </div>
  )
}

export default EditPost