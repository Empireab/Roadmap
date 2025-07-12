import React, { useState, useEffect, useRef } from 'react'
import './Section.css'

const htmlTopics = [
  { title: '📄 HTML Tags', content: 'HTML tags are the building blocks of web pages.', complete: true },
  { title: '🔗 Attributes', content: 'Attributes provide extra information about elements.', complete: true },
  { title: '📥 Forms & Inputs', content: 'Forms let users input and submit data.', complete: false },
  { title: '🧱 Semantic Elements', content: 'Semantic tags define the meaning of content.', complete: false },
  { title: '📦 Meta Tags', content: 'Meta tags provide metadata about the document.', complete: false },
  { title: '🌐 HTML5 APIs', content: 'HTML5 offers Web Storage, Geolocation, etc.', complete: false }
]

const Section = ({ search, setMatchFound }) => {
  const [selected, setSelected] = useState(null)
  const cardRefs = useRef([])

  const lowerSearch = search.toLowerCase()

 useEffect(() => {
  const lowerSearch = search.toLowerCase()

  if (!search.trim()) {
    setMatchFound(true) // Reset match state
    return
  }

  const firstMatchIndex = htmlTopics.findIndex(topic =>
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

  const completedCount = htmlTopics.filter(t => t.complete).length
  const percentage = Math.round((completedCount / htmlTopics.length) * 100)

  return (
    <section className="html-section" id="html">
      <h2 className="html-section-title">📘 HTML Roadmap</h2>

      <div className="html-progress-container">
        <div className="html-progress-bar" style={{ width: `${percentage}%` }}></div>
        <p>{percentage}% Complete</p>
      </div>

      <div className="html-cards-container">
        {htmlTopics.map((topic, index) => {
          const isMatch = topic.title.toLowerCase().includes(lowerSearch)

          return (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`html-card ${topic.complete ? 'completed' : ''} ${isMatch && search ? 'matched' : ''}`}
              onClick={() => setSelected(topic)}
            >
              {topic.title}
            </div>
          )
        })}
      </div>

      <div className="html-blog-section">
        <h3>📚 Related Articles</h3>
        <ul>
          <li><a href="#">📝 What are HTML Tags and Why They Matter?</a></li>
          <li><a href="#">💡 How to Structure a Semantic HTML Page</a></li>
          <li><a href="#">⚡ Beginner's Guide to HTML Forms</a></li>
        </ul>
      </div>

      {selected && (
        <div className="html-modal-overlay" onClick={() => setSelected(null)}>
          <div className="html-modal-box" onClick={(e) => e.stopPropagation()}>
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
