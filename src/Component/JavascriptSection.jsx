import React, { useState, useEffect, useRef } from 'react'
import './JavascriptSection.css'

const jsTopics = [
  { title: '📜 Variables & Data Types', content: 'Use let, const, and understand data types.', complete: true },
  { title: '🧮 Operators & Expressions', content: 'Perform calculations and logic.', complete: true },
  { title: '🔁 Loops & Conditionals', content: 'Control the flow of your program.', complete: false },
  { title: '📦 Functions & Scope', content: 'Reusable code blocks and scope rules.', complete: false },
  { title: '🧱 DOM Manipulation', content: 'Change the HTML/CSS via JS.', complete: false },
  { title: '⚙ ES6+ Features', content: 'Modern syntax like arrow functions, destructuring, etc.', complete: false }
]

const JavascriptSection = ({ search, setMatchFound }) => {
  const [selected, setSelected] = useState(null)
  const cardRefs = useRef([])

  const lowerSearch = search.toLowerCase()

useEffect(() => {
  const lowerSearch = search.toLowerCase()

  if (!search.trim()) {
    setMatchFound(true) // Reset match state
    return
  }

  const firstMatchIndex = jsTopics.findIndex(topic =>
    topic.title.toLowerCase().includes(lowerSearch)
  )

  if (firstMatchIndex !== -1 && cardRefs.current[firstMatchIndex]) {
    setMatchFound(true)
    cardRefs.current[firstMatchIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  } else {
    setMatchFound(false)
  }
}, [search, setMatchFound])
  const completedCount = jsTopics.filter(t => t.complete).length
  const percentage = Math.round((completedCount / jsTopics.length) * 100)

  return (
    <section className="js-section" id="javascript">
      <h2 className="js-section-title">📘 JavaScript Roadmap</h2>

      <div className="js-progress-container">
        <div className="js-progress-bar" style={{ width: `${percentage}%` }}></div>
        <p>{percentage}% Complete</p>
      </div>

      <div className="js-cards-container">
        {jsTopics.map((topic, index) => {
          const isMatch = topic.title.toLowerCase().includes(lowerSearch)
          return (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`js-card ${topic.complete ? 'completed' : ''} ${isMatch && search ? 'matched' : ''}`}
              onClick={() => setSelected(topic)}
            >
              {topic.title}
            </div>
          )
        })}
      </div>

      <div className="js-blog-section">
        <h3>📚 Related Articles</h3>
        <ul>
          <li><a href="#">🔤 Understanding let vs const</a></li>
          <li><a href="#">🧠 Looping Through Arrays Effectively</a></li>
          <li><a href="#">⚡ ES6 for Beginners</a></li>
        </ul>
      </div>

      {selected && (
        <div className="js-modal-overlay" onClick={() => setSelected(null)}>
          <div className="js-modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>{selected.title}</h3>
            <p>{selected.content}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default JavascriptSection
