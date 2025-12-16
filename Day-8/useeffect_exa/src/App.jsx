import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddStudent from './AddStudent'

function App() 
{
    const [stuList,setStuList]=useState([
      {id:1,sname:"Jack",fee:true},
      {id:2,sname:"Smith",fee:false},
      {id:3,sname:"Victor",fee:true}
    ])

    const handleDelete=(id)=>
    {
      const newList=stuList.filter((stu)=>stu.id!==id)
      setStuList(newList)
    }
    const handleChange=(id)=>
    {
      const newList=stuList.map((stu)=>(stu.id===id)?({...stu,fee:!stu.fee}):(stu))
      setStuList(newList)
    }
   const addItem=(item)=>
   {
    const sz=stuList.length-1;
     const nid=(stuList.length)?(stuList[sz].id+1):(1)
     const newObj={id:nid,sname:item,fee:false}
     const newList=[...stuList,newObj]
     setStuList(newList)
   }
   const handleSubmit=(e)=>
   {
    e.preventDefault()
    addItem(newstu)
    setNewStu('')
   }
   useEffect(()=>
  {
    const tem_list=[
      {id:1,sname:"Jack",fee:true},
      {id:2,sname:"Smith",fee:false},
      {id:3,sname:"Victor",fee:true}
    ]
      setStuList(tem_list)
  },[]
  )
    const [newstu,setNewStu]=useState('')
    const [search,setSearch]=useState('')
  return (
    <>
       <h1>Students List</h1>
       <AddStudent  newstu={newstu}
                    setNewStu={setNewStu}
                    handleSubmit={handleSubmit}
       />
       <ul>
       {
        stuList.map((stu)=>
          <li key={stu.id}>
            <input type="checkbox" checked={stu.fee}
                                    onChange={()=>handleChange(stu.id)}
            />
            <label>{stu.sname}</label>
            <button onClick={()=>handleDelete(stu.id)}>Delete</button>
          </li>
        )
       }
       </ul>
    </>
  )
}

export default App