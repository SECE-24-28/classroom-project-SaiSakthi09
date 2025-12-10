import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function inc() {
    setCounter(counter + 1)
  }

  function dec() {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </>
  )
}

export default App
