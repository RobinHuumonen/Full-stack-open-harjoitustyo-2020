import React from 'react'
import Heading2 from './Heading'
import LogOutLinkButton from './LogOutLinkButton'
import './Upload.css'

const Upload = () => {

  return (
    <div> 
       <div className="top-block">
        <Heading2 to="/" />
        <LogOutLinkButton id="log-out-button" text="Log Out" to="/"/>
      </div>
    </div>
   
  )
}

export default Upload