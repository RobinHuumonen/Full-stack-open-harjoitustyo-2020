import React from 'react'
import './LoggedInBlock.css'
import LoggedInUser from './LoggedInUser'
import LinkButton from './LinkButton'


const LoggedInBlock = (props) => {

  const getUsersRecipeCount = () => {
    if (props.users) {
      const useri = props.users.find(u => u.username === props.user.username)
      return useri.recipes.length
    } else {
      return null
    }
  }

  return (
    <div id="logged-in-block">
      <LoggedInUser user={props.user} usersRecipeCount={getUsersRecipeCount()}/>
      <LinkButton id="upload-button" text="Upload Recipe" to="/upload"/>
    </div>
  )

}

export default LoggedInBlock