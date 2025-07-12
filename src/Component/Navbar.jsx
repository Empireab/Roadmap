import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const classList = []
    if (darkMode) classList.push('dark-mode')
    if (menuOpen) classList.push('menu-open')
    document.body.className = classList.join(' ')
  }, [darkMode, menuOpen])

  useEffect(() => {
    const handleClickOutside = (e) => {
      const nav = document.querySelector('.nav-links')
      const hamburger = document.querySelector('.hamburger')
      if (
        menuOpen &&
        nav &&
        !nav.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const toggleMode = () => setDarkMode(!darkMode)

  return (
    <nav className="navbar">
      <h2 className="logo">🚀 FullStack Roadmap</h2>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#html" onClick={toggleMenu}>HTML</a></li>
        <li><a href="#css" onClick={toggleMenu}>CSS</a></li>
        <li><a href="#javascript" onClick={toggleMenu}>JavaScript</a></li>
        <li><a href="#react" onClick={toggleMenu}>React</a></li>
      </ul>

      <div className="right-controls">
        <button className="toggle-btn" onClick={toggleMode}>
          {darkMode ? '🌞 Light' : '🌙 Dark'}
        </button>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? '❌' : '☰'}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
