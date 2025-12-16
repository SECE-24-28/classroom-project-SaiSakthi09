import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([
    { id: 1, name: "sai", fee: true },
    { id: 2, name: "ram", fee: false },
    { id: 3, name: "ravi", fee: true },
    { id: 4, name: "raju", fee: false }
  ]);

  // DELETE FUNCTION
  const handleDelete = (id) => {
    const newList = list.filter((ls) => ls.id !== id);
    setList(newList);
  }

  // TOGGLE CHECKBOX FUNCTION
  const handleCheck = (id) => {
    const newList = list.map((ls) =>
      ls.id === id ? { ...ls, fee: !ls.fee } : ls
    );
    setList(newList);
  }

  return (
    <div className="bg">
      <h1>Students List</h1>

      <ul>
        {
          list.map((ls) =>
            <li key={ls.id}>
              <input
                type="checkbox"
                checked={ls.fee}
                onChange={() => handleCheck(ls.id)}
              />

              <label style={{ marginLeft: "8px" }}>{ls.name}</label>

              <button
                style={{ marginLeft: "10px" }}
                onClick={() => handleDelete(ls.id)}
              >
                Delete
              </button>

              <span style={{ marginLeft: "10px", fontWeight: "bold" }}>
                {ls.fee ? "Paid" : "Not Paid"}
              </span>
            </li>
          )
        }
      </ul>

      <br /><br />
      Students count: {list.length}
    </div>
  )
}

export default App
