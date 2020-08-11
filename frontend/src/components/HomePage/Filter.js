import React from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../../reducers/filterReducer'
import '../../index.css'


const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(search(event.target.value))
  }

  return (
      <input
        className="search-input"
        onChange={handleChange}
        placeholder="Search"
      />
  )
}

export default Filter