import React from 'react'
import Heading2 from './Heading'
import LinkButton from './LinkButton'
import './Upload.css'



const Upload = (props) => {

  const handleLogout = () => {
    window.localStorage.removeItem('loggedRecipetUser')
    props.setUser(null)
  }

  return (
    <div> 
       <div className="top-block">
        <Heading2 to="/" />
        <LinkButton id="log-out-button" text="Log Out" handleClick={handleLogout} to="/"/>
      </div>
    </div>
   
  )
}

export default Upload
