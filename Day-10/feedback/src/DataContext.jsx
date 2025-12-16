import {format, set} from 'date-fns';
import { createContext,useState,useEffect } from "react";
import api from '../api/Post'
import { useNavigate } from 'react-router-dom';

const DataContext = createContext()
export const DataProvider = ({ children }) => 
{
 const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("")
  const [searchResult,setSearchResult]=useState([])
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')
  const navigate=useNavigate()
  
  useEffect(()=>
  {
       const fetData=async()=>
       {
          try {
            const res=await api.get("/feedback")
            setPosts(res.data)
          } catch (error) {
            console.log('API not available, using empty posts')
            setPosts([])
          }
        }
        fetData();
  },[]
  )
   useEffect(()=>
  {
    const filtered=posts.filter((post)=>
                                  (post.title).toLowerCase().includes(search.toLowerCase()))
     setSearchResult(filtered)
   },[posts,search])

   const handleSubmit=async(e)=>
   {
      e.preventDefault()
      if(!title || !body) return
      
      const id=(posts.length)?String((Number(posts[posts.length-1].id)+1)):("1")
      const datetime=format(new Date(),"MMM dd,yyyy pp")
      const newObj={id,title,datetime,body}
      

      try {
        await api.post("/feedback",newObj)
      } catch (error) {
        console.log('API not available, adding locally only')
      }
      
      const newList=[...posts,newObj]
      setPosts(newList)
      setTitle('')
      setBody('')
      alert("Data insertion success...")
      navigate("/")

      const handleDelete=async(id)=>
      {
        
        try {
          await api.delete(`/feedback/${id}`)
          alert("Deletion Success...")
          const newList=posts.filter((post)=>post.id!==id)
          setPosts(newList)
          navigate("/")
        } catch (error) {
          console.log('API not available, deleting locally only')
        }
        
      }  
   }
  
  return (
    <DataContext.Provider value={{posts,searchResult,title,setTitle,body,setBody,
                                 search,setSearch,handleSubmit,handleDelete}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext