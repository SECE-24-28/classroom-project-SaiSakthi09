import React, { useContext } from 'react'
import DataContext from './DataContext'

const Two = () => {
  const { num } = useContext(DataContext)
  return (
    <div>
      <h2>Value: {num}</h2>
    </div>
  )
}

export default Two
