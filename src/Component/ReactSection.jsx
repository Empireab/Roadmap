import React, { useState, useEffect, useRef } from 'react'
import './ReactSection.css'

const reactTopics = [
  { title: '⚛ JSX & Components', content: 'JSX lets you write HTML in JavaScript.', complete: true },
  { title: '🔄 Props & State', content: 'Props are inputs; state stores dynamic data.', complete: true },
  { title: '📦 useEffect Hook', content: 'Handles side effects like API calls.', complete: false },
  { title: '🧩 Component Lifecycle', content: 'Understand mounting, updating, unmounting.', complete: false },
  { title: '🪝 Custom Hooks', content: 'Reusable logic in functional components.', complete: false },
  { title: '📁 Routing with React Router', content: 'Navigate between views with routing.', complete: false }
]

const ReactSection = ({ search,setMatchFound  }) => {
  const [selected, setSelected] = useState(null)
  const cardRefs = useRef([])

  const lowerSearch = search.toLowerCase()

useEffect(() => {
  const lowerSearch = search.toLowerCase()

  if (!search.trim()) {
    setMatchFound(true) // Reset match state
    return
  }

  const firstMatchIndex = reactTopics.findIndex(topic =>
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

  const completedCount = reactTopics.filter(t => t.complete).length
  const percentage = Math.round((completedCount / reactTopics.length) * 100)

  return (
    <section className="react-section" id="react">
      <h2 className="react-section-title">⚛ React Roadmap</h2>

      <div className="react-progress-container">
        <div className="react-progress-bar" style={{ width: `${percentage}%` }}></div>
        <p>{percentage}% Complete</p>
      </div>

      <div className="react-cards-container">
        {reactTopics.map((topic, index) => {
          const isMatch = topic.title.toLowerCase().includes(lowerSearch)

          return (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`react-card ${topic.complete ? 'completed' : ''} ${isMatch && search ? 'matched' : ''}`}
              onClick={() => setSelected(topic)}
            >
              {topic.title}
            </div>
          )
        })}
      </div>

      <div className="react-blog-section">
        <h3>📚 Related Articles</h3>
        <ul>
          <li><a href="#">🔍 Understanding JSX in React</a></li>
          <li><a href="#">🧠 When to Use useEffect</a></li>
          <li><a href="#">🚀 Beginner’s Guide to React Router</a></li>
        </ul>
      </div>

      {selected && (
        <div className="react-modal-overlay" onClick={() => setSelected(null)}>
          <div className="react-modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>{selected.title}</h3>
            <p>{selected.content}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default ReactSection
