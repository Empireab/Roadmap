import React, { useState } from 'react'
import './ReactSection.css'

const reactTopics = [
  { title: '⚛ JSX & Components', content: 'JSX lets you write HTML in JS. Components are reusable UI blocks.', complete: true },
  { title: '🔄 Props & State', content: 'Props are data from parent. State is local data for components.', complete: true },
  { title: '📦 useEffect Hook', content: 'Run side effects like fetching data or updating DOM.', complete: false },
  { title: '🧱 React Router', content: 'Handle multi-page routing with React Router.', complete: false },
  { title: '🪝 Custom Hooks', content: 'Create your own reusable logic with custom hooks.', complete: false },
  { title: '🧠 useContext & useReducer', content: 'Manage complex state and shared data easily.', complete: false }
]

const ReactSection = ({ search }) => {
  const [selected, setSelected] = useState(null)
  const filtered = reactTopics.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )
  const completedCount = reactTopics.filter(item => item.complete).length
  const total = reactTopics.length
  const percentage = Math.round((completedCount / total) * 100)

  return (
    <section className="react-section" id="react">
      <h2 className="section-title">⚛ React Roadmap</h2>

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
          <li><a href="#">⚛ How JSX Really Works in React</a></li>
          <li><a href="#">🔄 Difference Between Props and State</a></li>
          <li><a href="#">🚀 What useEffect is Doing Behind the Scenes</a></li>
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

export default ReactSection
