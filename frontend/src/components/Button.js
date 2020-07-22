import React from 'react'
import '../index.css'

const Button = (props) => {
  return (
    <button
      id={props.id}>
        {props.text}
      </button>
  )
}

export default Button