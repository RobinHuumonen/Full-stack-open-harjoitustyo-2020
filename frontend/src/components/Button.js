import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}
      id={props.id}
      className={props.className}>
      {props.text}
    </button>
  )
}

export default Button