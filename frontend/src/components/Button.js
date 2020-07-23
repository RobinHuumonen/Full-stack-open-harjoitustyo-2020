import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <button
      id={props.id}>
        {props.text}
      </button>
  )
}

export default Button