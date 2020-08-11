import React from 'react'
import '../../index.css'

const LoggedInUser = (props) => {

  return (
    <div className="logged-in-user">
      <h3 id="h3-heading">{props.user.username}</h3>
      <p id="hasRecipes">{props.usersRecipeCount} recipes</p>
    </div>
    
  )
}

export default LoggedInUser