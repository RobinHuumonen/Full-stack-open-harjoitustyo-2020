import React from 'react'
import Heading2 from '../Heading'
import LogOutLinkButton from './LogOutLinkButton'
import './Upload.css'
import DragnDrop from './DragnDrop'

const Upload = () => {

  return (
    <div> 
      <div className="top-block">
        <Heading2 to="/" />
        <LogOutLinkButton id="log-out-button" text="Log Out" to="/"/>
      </div>
      <DragnDrop/>
    </div>
   
  )
}

export default Upload
