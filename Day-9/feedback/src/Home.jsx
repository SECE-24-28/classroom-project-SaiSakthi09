import React, { useContext } from 'react'
import DataContext from './Context/DataContext'
import Search from './Search'
import { Link } from 'react-router-dom'

export const Home = () => {
 
    const{searchResult}=useContext(DataContext)
  return (
    
    <div className="post-card">
       <Search />{
    searchResult.map((post)=>
    <div key={post.id}>
      <Link to={`/editpost/${post.id}`}>
      <h3 className="post-title">{post.title}</h3>
      <p className="post-date">{post.datetime}</p>
      <p className="post-body">{post.body}</p>
      </Link>
      <hr/>
      </div>
      )
    }</div>
  )
}