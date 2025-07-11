import React, { useState } from 'react'
import './JavascriptSection.css'

const jsTopics = [
  { title: '📦 Variables & Data Types', content: 'Learn let, const, var, and types like string, number, array.', complete: true },
  { title: '🔁 Loops & Conditions', content: 'Use for, while, if, switch to control flow.', complete: true },
  { title: '⚙ Functions & Scope', content: 'Understand function declarations and lexical scope.', complete: false },
  { title: '🧠 DOM Manipulation', content: 'Use JavaScript to modify HTML & CSS on the page.', complete: false },
  { title: '🚀 ES6 Features', content: 'Master arrow functions, destructuring, spread/rest.', complete: false },
  { title: '📡 Fetch API & Promises', content: 'Fetch data from APIs using async techniques.', complete: false }
]

const JavascriptSection = ({ search }) => {
  const [selected, setSelected] = useState(null)
  const filtered = jsTopics.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )
  const completedCount = jsTopics.filter(item => item.complete).length
  const total = jsTopics.length
  const percentage = Math.round((completedCount / total) * 100)

  return (
    <section className="js-section" id="javascript">
      <h2 className="section-title">🟨 JavaScript Roadmap</h2>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
        <p>{percentage}% Complete</p>
      </div>

      {/* Roadmap Cards */}
      <div className="cards-container">
        {filtered.length > 0 ? (
          filtered.map((item, index) => (
            <div
              key={index}
              className={`card ${item.complete ? 'completed' : ''}`}
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
      <div className="blog-section">
        <h3>📚 Related Articles</h3>
        <ul>
          <li><a href="#">📦 Mastering JS Variables & Scope</a></li>
          <li><a href="#">🔁 For vs While vs Map: Which to Use?</a></li>
          <li><a href="#">📡 How Promises & Fetch Work Together</a></li>
        </ul>
      </div>

      {/* Modal */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
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
