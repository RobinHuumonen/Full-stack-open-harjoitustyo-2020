import React from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../../reducers/filterReducer'
import './Filter.css'


const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(search(event.target.value))
  }

  return (
    <div className="center">
      <input
        className="search-input"
        onChange={handleChange}
        placeholder="Search"
      />
    </div>
  )
}

export default Filter