// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import Game from './components/Game'
import Preloader from './Preloader/Preloader'
const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
      <Preloader active={loading}></Preloader>
      <Game style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}></Game>
    </>
  )
}
export default App
