import React from 'react'
import './LoggedInBlock.css'
import LoggedInUser from './LoggedInUser'
import LinkButton from './LinkButton'


const LoggedInBlock = (props) => {

return (
  <div id="logged-in-block">
    <LoggedInUser user={props.user} users={props.users}/>
    <LinkButton id="upload-button" text="Upload Recipe" to="/upload"/>
  </div>
)

}

export default LoggedInBlock