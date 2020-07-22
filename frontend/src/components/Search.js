import React from 'react'
import PropTypes from 'prop-types'
import '../index.css'

const Search = ({
  handleSearchChange,
  search,
}) => {
  return (
    <div className="center">
      <input
        className="search-input"
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  )
}

Search.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
}

export default Search