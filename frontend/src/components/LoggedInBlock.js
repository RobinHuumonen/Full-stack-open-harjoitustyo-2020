import React from 'react'
import '../index.css'
import LoggedInUser from './LoggedInUser'
import Button from './Button'


const LoggedInBlock = () => {

return (
  <div className="logged-in-block">
    <LoggedInUser/>
    <Button id="upload-button" text="Upload Recipe"/>
  </div>
)

}

export default LoggedInBlock