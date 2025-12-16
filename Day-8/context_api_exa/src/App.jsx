import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DataProvider } from './DataContext'
import One from './One'
import Two from './Two'
import Three from './Three'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DataProvider>
        <One/>
        <Two/>
        <Three/>
      </DataProvider>
    </>
  )
}

export default App