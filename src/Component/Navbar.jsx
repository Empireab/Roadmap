import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const classList = []
    if (darkMode) classList.push('dark-mode')
    if (menuOpen) classList.push('sidebar-open')
    document.body.className = classList.join(' ')
  }, [darkMode, menuOpen])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleMode = () => setDarkMode(!darkMode)

  return (
    <>
      <nav className="navbar">
        <div>
          <button className="hamburger" onClick={toggleMenu}>
            {menuOpen ? '❌' : '☰'}
          </button>
        </div>
        <h2 className="logo">🚀 FullStack Roadmap</h2>
        <button className="toggle-btn" onClick={toggleMode}>
          {darkMode ? '🌞 Light' : '🌙 Dark'}
        </button>
      </nav>

      <div className={`sidebar ${menuOpen ? '' : 'closed'}`}>
        <a href="#html" onClick={toggleMenu}>HTML</a>
        <a href="#css" onClick={toggleMenu}>CSS</a>
        <a href="#javascript" onClick={toggleMenu}>JavaScript</a>
        <a href="#react" onClick={toggleMenu}>React</a>
      </div>
    </>
  )
}

export default Navbar
