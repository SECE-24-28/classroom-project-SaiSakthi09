import { createContext, useState, useEffect } from 'react'
import api from '../api/Post'
import { format } from 'date-fns'

const DataContext = createContext({})

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from API...')
        const res = await api.get("/feedback")
        console.log('API Response:', res.data)
        setPosts(res.data)
      } catch (error) {
        console.log('API Error:', error)
        setPosts([])
      }
    }
    fetchData();
  }, [])

  useEffect(() => {
    console.log('Posts:', posts)
    console.log('Search term:', search)
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    )
    console.log('Filtered results:', filtered)
    setSearchResult(filtered)
  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !body) return
    
    const id = (posts.length) ? (Number(posts[posts.length - 1].id) + 1) : (1)
    const datetime = format(new Date(), "MMM dd, yyyy pp")
    const newObj = { id, title, "date-time": datetime, body }
    
    try {
      await api.post("/feedback", newObj)
    } catch (error) {
      console.log('API not available, adding locally only')
    }
    
    const newList = [...posts, newObj]
    setPosts(newList)
    setTitle('')
    setBody('')
  }

  return (
    <DataContext.Provider value={{
      posts, setPosts,
      search, setSearch,
      searchResult, setSearchResult,
      title, setTitle,
      body, setBody,
      handleSubmit
    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext