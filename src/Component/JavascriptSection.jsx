import React, { useState, useEffect, useRef } from 'react'
import './JavascriptSection.css'

const jsTopics = [
  { title: '📜 Variables & Data Types', content: 'Use let, const, and understand data types.', complete: true },
  { title: '🧮 Operators & Expressions', content: 'Perform calculations and logic.', complete: true },
  { title: '🔁 Loops & Conditionals', content: 'Control the flow of your program.', complete: false },
  { title: '📦 Functions & Scope', content: 'Reusable code blocks and scope rules.', complete: false },
  { title: '📦 Events', content: 'Code that runs when something happens (click, hover, submit, etc.)', complete: false },
  { title: '📦   Arrays', content: 'Store multiple values in one variable.', complete: false },
  { title: '📦 Forms and Inputs', content: 'Read or set values in form fields using JavaScript..', complete: false },
  { title: '📦    Objects', content: 'Store related data using key–value pairs.', complete: false },
  { title: '🧱 DOM Manipulation', content: 'Change the HTML/CSS via JS.', complete: false },
  { title: '🧱  Basic Validation', content: 'Check if users filled out fields correctly before submitting..', complete: false },
  { title: '⚙ ES6+ Features', content: 'Modern syntax like arrow functions, destructuring, etc.', complete: false },
  { title: '⚙  Timers', content: 'Use setTimeout() or setInterval() to run code after a delay or repeatedly.', complete: false },
  { title: '⚙  Intro to JSON', content: 'JavaScript Object Notation (JSON) is used to store and send data, especially when working with APIs.', complete: false },
  { title: '⚙  And Lot More', content: 'classlist, return HTML, localStorage, E.T.C', complete: false }
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
      <h1 className="js-section-title">📘 JavaScript Roadmap</h1>
      <span><marquee behavior="scroll" direction="left">JavaScript is the language that adds interactivity and logic to your website.</marquee></span>

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
        <h3><center>📚 At the end of the CSS class, you should be able to do the following</center></h3>
        <ul>
          <li><p>🔤 Make your webpage interactive (e.g., buttons, forms, dropdowns).</p></li>
          <li><p>🧠 Dynamically update content without reloading the page.</p></li>
          <li><p>⚡ Validate user input to prevent empty or incorrect form submissions.</p></li>
          <li><p>⚡ Create smart logic and conditions using variables, loops, and functions.</p></li>
          <li><p>⚡ Work with real data (JSON/APIs) and display it on your website..</p></li>
          <li><p>⚡ Build a claen dynamic fully functionimg website of any types</p></li>
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
