import React from 'react'
import './LoggedInBlock.css'
import LoggedInUser from './LoggedInUser'
import Button from './Button'


const LoggedInBlock = () => {

return (
  <div id="logged-in-block">
    <LoggedInUser/>
    <Button id="upload-button" text="Upload Recipe"/>
  </div>
)

}

export default LoggedInBlock