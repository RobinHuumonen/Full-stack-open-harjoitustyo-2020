import React from 'react'
import '../index.css'

const LoggedInUser = () => {
  return (
    <div>
      <h3 className="h3-heading">props.user.username</h3>
      <p className="recipes">props.user.recipes</p>
    </div>
    
  )
}

export default LoggedInUser