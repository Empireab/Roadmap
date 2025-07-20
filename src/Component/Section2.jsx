import React, { useState, useEffect, useRef } from 'react'
import './Section2.css'

const cssTopics = [
  { title: '🎨 CSS Syntax', content: 'A CSS rule has a selector (what to style), property (what to change), and value (how to change it).', complete: true },
  { title: '🎨 Text Styling', content: 'Control how text looks using properties like:	color, font-size, text-align, font-family, font-weight, text-transform, line-height', complete: true },
  { title: '🎨 Selectors', content: 'Selectors target HTML elements for styling.', complete: true },
  { title: '📏 Box Model', content: 'Box Model controls layout and spacing.', complete: true },
  { title: '🧭 Positioning', content: 'CSS positions elements with static, relative, etc.', complete: false },
  { title: '📐 Flexbox & Grid', content: 'Modern layout tools for responsive design.', complete: false },
  { title: '📐 Display & Visibility', content: 'MControl how elements behave.', complete: false },
  { title: '🎭 Pseudo-classes', content: 'Style elements based on state or position.', complete: false },
  { title: '🌈 Transitions & Animations', content: 'Add motion to your site elements.', complete: false },
  { title: '🎭 Pseudo-classes', content: 'Style elements based on state or position.', complete: false },
  { title: '🌈 Responsive Design', content: 'Make pages work and look nice on all screen sizes.', complete: false },
  { title: '🌈 And Lot More', content: 'z-index, keyframes, E.T,C.', complete: false }
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
      <h1 className="css-section-title">🎨 CSS Roadmap</h1>
      <span><marquee behavior="" direction="left">style and design/beaytify your website</marquee></span>

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
        <h3><center>📚 At the end of the CSS class, you should be able to do the following</center></h3>
        <ul>
          <li><p>🧵 Style and design any website page beautifully with custom fonts, colors, and spacing.</p></li>
          <li><p>📦 Use Flexbox and Grid to build complex layouts with ease.</p></li>
          <li><p>📦 Write clean, reusable, and maintainable CSS using classes, variables, and external stylesheets.</p></li>
          <li><p>✨ Add animations and hover effects to make pages interactive and modern.</p></li>
          <li><p>✨ Create responsive layouts that work on phones, tablets, and desktops..</p></li>
          <li><p>✨ Create your first static website like a landing page, signup and login page, portfiolo, E.T.C </p></li>
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
