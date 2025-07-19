import React, { useState, useEffect, useRef } from 'react'
import './Section.css'

const htmlTopics = [
  { title: '📄 HTML Tags', content: 'HTML tags are the building blocks of web pages.', complete: true },
  { title: '🔗 Attributes', content: 'Attributes provide extra information about elements.', complete: true },
  { title: '📥 Forms & Inputs', content: 'Forms let users input and submit data.', complete: false },
  { title: '👌 Grouping and Layout', content: 'use element like div, section or article to group and organize content into parts of blocks', complete: false },
  { title: '🧱 Semantic Elements', content: 'Semantic tags define the meaning of content.', complete: false },
  { title: '🙅‍♀️ Media Element', content: 'Media elements are used to add pictures, videos, and sounds to your webpage to make it more engaging.', complete: false },
  { title: '📖  Text and Content', content: 'Tags like <p>, <h1>–<h6>, <span>, and <br> help you add paragraphs, headings, inline text, or line breaks.', complete: false },
  { title: '📦 Meta Tags', content: 'Meta tags provide metadata about the document.', complete: false },
  { title: '🖇️  Adding Links', content: 'Use <a> to create clickable links to other pages, websites, or sections on the same page.', complete: false },
  { title: '📦  Embedded Content', content: 'Ulets you embed other sites or tools like YouTube or Google Maps into your own page.', complete: false },
  { title: '🌐 HTML5 APIs', content: 'HTML5 offers Web Storage, Geolocation, etc.', complete: false },
  { title: '📖 And Lot More', content: 'which include table, comment, form validation, E.T.C', complete: false }
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

      <h1 className="html-section-title">📘 HTML Roadmap</h1>
      <span><marquee behavior="smooth" direction="left">Learn the basics of web and page structure</marquee></span>

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
              className={` html-card ${topic.complete ? 'completed' : ''} ${isMatch && search ? 'matched' : ''}`}
              onClick={() => setSelected(topic)}
            >
              {topic.title}
            </div>
          )
        })}
      </div>

      <div className="html-blog-section">
        <h3><center>📚 At the end of the HTML class, you should be able to do the following</center></h3>
        <ul>
          <li><a href="#">📝 Build a complete webpage layout using proper tags like header, nav, main, and footer.</a></li>
          <li><a href="#">💡 Add text, images, links, and lists to any section of your page.</a></li>
          <li><a href="#">⚡ Create interactive forms to collect user input (like signups or contact forms).</a></li>
          <li><a href="#">⚡ Write clean, organized, and accessible HTML that is SEO-friendly and screen reader–friendly. (like signups or contact forms).</a></li>
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
