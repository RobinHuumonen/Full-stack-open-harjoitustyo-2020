import React from 'react'
import './LoggedInUser.css'

const LoggedInUser = (props) => {

  return (
    <div>
      <h3 id="h3-heading">{props.user.username}</h3>
      <p id="hasRecipes">ss</p>
    </div>
    
  )
}

export default LoggedInUser