import React, { useState } from 'react'
import { Heading2 } from './Heading'
import { Heading3 } from './Heading'
import Search from './Search'
import Button from './Button'

import './TopBlock.css'

const TopBlock = (props) => {
const [search, setSearch] = useState('')

const handleSearchChange = () => {
  return null
}

if (props.renderAbout) {
  return (
    <div className="top-block">
      <Heading2/>
      <Heading3/>
      <Button id="log-out-button" text={props.buttonText} />
    </div>
  )
}

return (
  <div className="top-block">
    <Heading2/>
    <Search 
      search={search}
      handleSearch={handleSearchChange}
    />
    <Button id="log-out-button" text="Log Out" />
  </div>
)
}

export default TopBlock