import React, { useEffect, useState } from 'react'
import Navebar from './components/Navebar'
import Main from './components/Main'

const App = () => {
  const [darkMode,setDarkMode] = useState(true)
 
  const toggleDarkMode =()=>{
    setDarkMode(!darkMode)
  }

  return (
    <div>
      <Navebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={darkMode} />
    </div>
  )
}

export default App
