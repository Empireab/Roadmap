import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const classList = [];
    if (darkMode) classList.push('dark-mode');
    if (menuOpen) classList.push('sidebar-open');
    document.body.className = classList.join(' ');
  }, [darkMode, menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMode = () => setDarkMode(!darkMode);
  const toggleCourses = () => setCoursesOpen(!coursesOpen);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
      setCoursesOpen(false);
    }
  };

  const goToOutput = () => {
    navigate('/output');
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div>
          <button className="hamburger" onClick={toggleMenu}>
            {menuOpen ? '❌' : '☰'}
          </button>
        </div>
        <h2 className="logo">
          🚀 FullStack Roadmap <br />
          <span>FRONTEND</span>
        </h2>
        <button className="toggle-btn" onClick={toggleMode}>
          {darkMode ? '🌞 Light' : '🌙 Dark'}
        </button>
      </nav>

      <div className={`sidebar ${menuOpen ? '' : 'closed'}`}>
        <div className="dropdown">
          <button onClick={toggleCourses}>Courses ▼</button>
          {coursesOpen && (
            <div className="dropdown-content">
              <a onClick={() => scrollTo('html')}>HTML</a>
              <a onClick={() => scrollTo('css')}>CSS</a>
              <a onClick={() => scrollTo('javascript')}>JavaScript</a>
              <a onClick={() => scrollTo('react')}>React</a>
            </div>
          )}
        </div>
        <a href="#frameworks" onClick={toggleMenu}>Frameworks</a>
        <a href="#output" onClick={toggleMenu}>Output</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
      </div>
    </>
  );
};

export default Navbar;
