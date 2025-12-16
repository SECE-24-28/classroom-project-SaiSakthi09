import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Gallery from './Gallery'
import NewPost from './Newpost'
import Post from './Post'
import PostPage from './PostPage'
import Home from './assets/Home'
import About from './assets/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ul>
      <li> <Link to="/">Home</Link> </li>
      <li> <Link to="/about">About</Link> </li>
      <li> <Link to="/gallery">Gallery</Link> </li>
      <li><Link to="/postpage">PostPage</Link></li>
     </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/postpage" element={<PostPage /> }>
        <Route path=":id" element={<Post />} />
        <Route path="newpost" element={<NewPost />} />
      </Route>
    </Routes>
  </>  
  )
}

export default App