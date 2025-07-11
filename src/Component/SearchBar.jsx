import React from 'react'
import './SearchBar.css'

const SearchBar = ({ keyword, onChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder="Search roadmap topics..."
      />
    </div>
  )
}

export default SearchBar