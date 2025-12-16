import React from 'react'

const AddStudent = ({newstu,setNewStu,handkeSubmit}) => {
    const inputRef=useRef()
  return (
    <div>
    <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder='New Student'
        ref={inputRef}
        value={newstu}
        onChange={(e)=>setNewStu(e.target.value)}
        />
        <button type='submit' onClick={()=>inputRef.current.focus()}>Submit</button>
    </form>
    </div>
  )
}

export default AddStudent