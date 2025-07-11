import React, { useState } from 'react'
import './Section.css'

const htmlTopics = [
  { title: '📄 HTML Tags', content: 'HTML tags define the structure of your page.', complete: true },
  { title: '🔗 Attributes', content: 'Add extra info to elements like href, src, alt.', complete: true },
  { title: '📥 Forms & Inputs', content: 'Allow user data input using <form>, <input>.', complete: false },
  { title: '🧱 Semantic Elements', content: 'Use <section>, <article>, <nav> to improve SEO.', complete: false },
  { title: '📦 Meta Tags', content: 'Meta tags define page metadata like charset, description.', complete: false },
  { title: '🌐 HTML5 APIs', content: 'APIs like Geolocation, Web Storage, etc.', complete: false }
]

const Section = ({ search }) => {
  const [selected, setSelected] = useState(null)
  const filtered = htmlTopics.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )
  const completedCount = htmlTopics.filter(item => item.complete).length
  const total = htmlTopics.length
  const percentage = Math.round((completedCount / total) * 100)

  return (
    <section className="html-section" id="html">
      <h2 className="section-title">📘 HTML Roadmap</h2>

      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${percentage}% `}}></div>
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
          <li><a href="#">📝 What are HTML Tags and Why They Matter?</a></li>
          <li><a href="#">💡 How to Structure a Semantic HTML Page</a></li>
          <li><a href="#">⚡ Beginner's Guide to HTML Forms</a></li>
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

export default Section
