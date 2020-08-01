import React from 'react'
import { Heading3 } from './Heading'
import LinkButton from './LinkButton'
import Button from './Button'
import Heading2 from './Heading'
import './TopBlock.css'


const AboutTopBlock = (props) => {

  const handleLogout = () => {
    window.localStorage.removeItem('loggedRecipetUser')
    props.setUser(null)
  }

  return (
    <div className="top-block">
      <Heading2 to="/"/>
      <Heading3/>
      {props.user ? 
        <Button id="log-out-button" text="Log Out" handleClick={handleLogout}/> :
        <LinkButton id="log-out-button" text="Log In" to="/"/>
      }
    </div>
  )
}

export default AboutTopBlock
