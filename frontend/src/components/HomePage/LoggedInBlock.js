import React from 'react'
import '../../index.css'
import LoggedInUser from './LoggedInUser'
import LinkButton from '../LinkButton'


const LoggedInBlock = (props) => {

  return (
    <div className="container-3">
      <LoggedInUser user={props.user} usersRecipeCount={props.usersRecipeCount}/>
      <div className="invisible-item"></div>
      <LinkButton id="upload-button" text="Upload Recipe" to="/upload"/>
    </div>
  )

}

export default LoggedInBlock