import React, { useState, useEffect, useRef } from 'react'
import './ReactSection.css'

const reactTopics = [
  { title: '⚛ JSX & Components', content: 'JSX lets you write HTML in JavaScript.', complete: true },
  { title: '🔄 Props & State', content: 'Props are inputs; state stores dynamic data.', complete: true },
  { title: '📦 useEffect Hook', content: 'Handles side effects like API calls.', complete: false },
  { title: '📦 Events and Handlers', content: 'Respond to user actions like clicks or input.', complete: false },
  { title: '🧩 Component Lifecycle', content: 'Understand mounting, updating, unmounting.', complete: false },
  { title: '🧩 Conditional Rendering', content: 'Show or hide things based on logic.', complete: false },
  { title: '🪝 Custom Hooks', content: 'Reusable logic in functional components.', complete: false },
  { title: '🪝 Lists and Keys', content: 'Render multiple items using .map() and give each a unique key.', complete: false },
  { title: '📁 Routing with React Router', content: 'Navigate between views with routing.', complete: false },
  { title: '📁 Redux', content: 'Learn how to perform addtocart, and create a full e-commerce website', complete: false },
  { title: '📁 And Lot More', content: 'master useState, ternary operators, callback functions, map, E.T.C', complete: false }
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
      <h1 className="react-section-title">⚛ React Roadmap</h1>
     <span><marquee behavior="" direction="left">React is a JavaScript library for building fast and interactive user interfaces using reusable components.</marquee></span>

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
       <h3><center>📚 At the end of the HTML class, you should be able to do the following</center></h3>
        <ul>
          <li><p>🔍 Build interactive user interfaces using components and state.</p></li>
          <li><p>🧠 Break a page into reusable components for better structure and readability.</p></li>
          <li><p>🚀 Handle user input and form data in a smart and clean way.</p></li>
          <li><p>🚀 Navigate between multiple pages without reloading using React Router..</p></li>
          <li><p>🚀 Connect your frontend to APIs to display live or dynamic data.</p></li>
          <li><p>🚀 can build any types of website from scratch to finsih</p></li>
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
