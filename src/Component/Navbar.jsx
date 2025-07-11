import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : ''
  }, [darkMode])

  const toggleMode = () => setDarkMode(!darkMode)

  return (
    <nav className="navbar" data-aos="fade-down" data-aos-duration="800">
      <h2 className="logo">🚀 FullStack Roadmap</h2>
      <ul className="nav-links">
        <li><a href="#html">HTML</a></li>
        <li><a href="#css">CSS</a></li>
        <li><a href="#javascript">JavaScript</a></li>
        <li><a href="#react">React</a></li>
      </ul>
      <button className="toggle-btn" onClick={toggleMode}>
        {darkMode ? '🌞 Light' : '🌙 Dark'}
      </button>
    </nav>
  )
}

export default Navbar
