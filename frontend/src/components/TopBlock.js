import React, { useState } from 'react'
import Heading2 from './Heading'
import { Heading3 } from './Heading'
import Search from './Search'
import LinkButton from './LinkButton'
import Button from './Button'

import './TopBlock.css'

const TopBlock = (props) => {
const [search, setSearch] = useState('')

const handleSearchChange = () => {
  return null
}

const handleLogout = () => {
  window.localStorage.removeItem('loggedRecipetUser')
  props.setUser(null)
}

const onHeadingClick = () => {
  props.setRenderAbout(false)
}

if (props.renderAbout) {
  return (
    <div className="top-block">
      <Heading2 to="/" onClick={onHeadingClick}/>
      <Heading3/>
      
      {props.user ? 
        <Button id="log-out-button" text="Log Out" handleClick={handleLogout}/> :
        <LinkButton id="log-out-button" text="Log In" to="/"/>
      }
    </div>
  )
}

return (
  <div className="top-block">
    <Heading2 to="/" />
    <Search 
      search={search}
      handleSearch={handleSearchChange}
    />
    <Button id="log-out-button" text="Log Out" handleClick={handleLogout}/>
  </div>
)
}

export default TopBlock