import React, { useState } from 'react'
import Heading2 from './Heading'
import Search from './Search'
import Button from './Button'
import './TopBlock.css'

const TopBlock = (props) => {

const handleLogout = () => {
  window.localStorage.removeItem('loggedRecipetUser')
  props.setUser(null)
}

return (
  <div className="top-block">
    <Heading2 to="/" />
    <Search value={props.search} setSearch={props.setSearch} />
    <Button id="log-out-button" text="Log Out" handleClick={handleLogout}/>
  </div>
)
}

export default TopBlock