import { useEffect, useState } from 'react'
import { EVENTS } from './const'
import About from './Pages/About'
import HomePage from './Pages/Home'




function App() {

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }

  }, [])


  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <About />}
    </main>
  )
}

export default App
