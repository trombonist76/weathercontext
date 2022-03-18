import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

export default function Navbar() {
  const {theme,setTheme} = useTheme()
  function handleClick(e){
    setTheme(e.target.value)
  }
  return (
    <div className={`title ${theme}`}>
      <button onClick={handleClick} value={theme === "light" ? "dark" : "light"} className='themeBtn'>{theme === "light" ? "Dark" : "Light"}</button>
      <h1 className='navTitle'>Weather Forecast</h1>
    </div>
  )
}
