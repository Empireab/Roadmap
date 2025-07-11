import React, { useState } from 'react'
import './Section2.css'


const cssTopics = [
  { title: '🎨 Selectors', content: 'CSS selectors target specific HTML elements.', complete: true },
  { title: '🧰 Box Model', content: 'Content → Padding → Border → Margin.', complete: true },
  { title: '⚙ Flexbox', content: '1D layout system for flexible boxes.', complete: false },
  { title: '🔲 Grid', content: '2D layout system using rows and columns.', complete: false },
  { title: '🌀 Transitions & Animations', content: 'Make elements smoothly animate.', complete: false },
  { title: '📱 Media Queries', content: 'Make your website responsive.', complete: false }
]

const Section2 = ({ search }) => {
  const [selected, setSelected] = useState(null)
  const filtered = cssTopics.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )
  const completedCount = cssTopics.filter(item => item.complete).length
  const total = cssTopics.length
  const percentage = Math.round((completedCount / total) * 100)

  return (
    <section className="css-section" id="css">
      <h2 className="css-section-title">🎨 CSS Roadmap</h2>

      {/* Progress Bar */}
      <div className="css-progress-container">
        <div className="css-progress-bar" style={{ width: `${percentage}% `}}></div>
        <p>{percentage}% Complete</p>
      </div>

      {/* Roadmap Cards */}
      <div className="css-cards-container">
        {filtered.length > 0 ? (
          filtered.map((item, index) => (
            <div
              key={index}
              className={`css-card ${item.complete ? 'completed' : ''}`}
              onClick={() => setSelected(item)}
              title="Click to learn more"
            >
              {item.title}
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>No matching topics found.</p>
        )}
      </div>

      {/* Articles */}
      <div className="css-blog-section">
        <h3>📚 Related Articles</h3>
        <ul>
          <li><a href="#">📏 Mastering the CSS Box Model</a></li>
          <li><a href="#">🧲 CSS Flexbox vs Grid: When to Use What</a></li>
          <li><a href="#">💥 Animating Your UI with CSS</a></li>
        </ul>
      </div>

      {/* Modal */}
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

export default Section2
