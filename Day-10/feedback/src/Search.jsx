import React, { useContext } from 'react'
import DataContext from './Context/DataContext' 
const Search = () => {
    const{search,setSearch}=useContext(DataContext)
  return (
    <div>
        
        <input type="text" value={search} 
                          onChange={(e)=>setSearch(e.target.value)} placeholder="Search posts" />
    </div>
  )
}

export default Search