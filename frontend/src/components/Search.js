import React from 'react'
import './Search.css'

const Search = (props) => {

  const handleSearchChange = (event) => {
    props.setSearch(event.target.value)
  }

  return (
    <div className="center">
      <input
        className="search-input"
        value={props.search}
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default Search