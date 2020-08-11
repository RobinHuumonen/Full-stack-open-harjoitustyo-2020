import React from 'react'
import '../../index.css'
import LoggedInUser from './LoggedInUser'
import LinkButton from '../LinkButton'


const LoggedInBlock = (props) => {

  const getUsersRecipeCount = () => {
    if (props.users) {
      const useri = props.users.find(u => u.username === props.user.username)
      if (useri) 
        return useri.recipes.length
    } else {
      return null
    }
  }

  return (
    <div className="container-3">
      <LoggedInUser user={props.user} usersRecipeCount={getUsersRecipeCount()}/>
      <div className="invisible-item"></div>
      <LinkButton id="upload-button" text="Upload Recipe" to="/upload"/>
    </div>
  )

}

export default LoggedInBlock