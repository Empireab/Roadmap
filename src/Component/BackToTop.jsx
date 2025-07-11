import React, { useEffect, useState } from 'react'
import './BackToTop.css'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    setVisible(scrolled > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      style={{ display: visible ? 'block' : 'none' }}
      title="Back to top"
    >
      ⬆
    </button>
  )
}

export default BackToTop
