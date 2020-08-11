import React from 'react'
import Heading2 from '../Heading'
import LogOutLinkButton from './LogOutLinkButton'
import '../../index.css'
import DragnDrop from './DragnDrop'
import ClipboardDrop from './ClipboardDrop'

const Upload = () => {

  return (
    <> 
      <div className="container-2">
        <Heading2 to="/" />
        <LogOutLinkButton id="button-log-out" text="Log Out" to="/"/>
      </div>
      <div className="invisible-item-2"></div>
      <ClipboardDrop/>
      <div className="invisible-item-2"></div>
      <DragnDrop/>
    </>
   
  )
}

export default Upload
