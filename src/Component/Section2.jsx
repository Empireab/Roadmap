import React, { useState, useEffect, useRef } from 'react'
import './Section2.css'

const cssTopics = [
  { title: '🎨 Selectors', content: 'Selectors target HTML elements for styling.', complete: true },
  { title: '📏 Box Model', content: 'Box Model controls layout and spacing.', complete: true },
  { title: '🧭 Positioning', content: 'CSS positions elements with static, relative, etc.', complete: false },
  { title: '📐 Flexbox & Grid', content: 'Modern layout tools for responsive design.', complete: false },
  { title: '🎭 Pseudo-classes', content: 'Style elements based on state or position.', complete: false },
  { title: '🌈 Transitions & Animations', content: 'Add motion to your site elements.', complete: false }
]

const Section2 = ({ search, setMatchFound }) => {
  const [selected, setSelected] = useState(null)
  const cardRefs = useRef([])

  const lowerSearch = search.toLowerCase()

  // Scroll to the first match
 useEffect(() => {
  const lowerSearch = search.toLowerCase()

  if (!search.trim()) {
    setMatchFound(true) // Reset match state
    return
  }

  const firstMatchIndex = cssTopics.findIndex(topic =>
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
  const completedCount = cssTopics.filter(t => t.complete).length
  const percentage = Math.round((completedCount / cssTopics.length) * 100)

  return (
    <section className="css-section" id="css">
      <h2 className="css-section-title">🎨 CSS Roadmap</h2>

      <div className="css-progress-container">
        <div className="css-progress-bar" style={{ width: `${percentage}%` }}></div>
        <p>{percentage}% Complete</p>
      </div>

      <div className="css-cards-container">
        {cssTopics.map((topic, index) => {
          const isMatch = topic.title.toLowerCase().includes(lowerSearch)

          return (
            <div
  key={index}
  ref={el => cardRefs.current[index] = el}
  className={`css-card ${topic.complete ? 'completed' : '' } ${isMatch && search ? 'matched' : ''}`}
  onClick={() => setSelected(topic)}
>
  {topic.title}
</div>
          )
        })}
      </div>

      <div className="css-blog-section">
        <h3>📚 Related Articles</h3>
        <ul>
          <li><a href="#">🧵 Mastering CSS Selectors</a></li>
          <li><a href="#">📦 Visualizing the CSS Box Model</a></li>
          <li><a href="#">✨ Creating Smooth Transitions</a></li>
        </ul>
      </div>

      {selected && (
        <div className="css-modal-overlay" onClick={() => setSelected(null)}>
          <div className="css-modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>{selected.title}</h3>
            <p>{selected.content}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Section2
