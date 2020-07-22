import React, { useState } from 'react'
import { Heading2 } from './Heading'
import Search from './Search'
import Button from './Button'

import '../index.css'

const TopBlock = () => {
const [search, setSearch] = useState('')

const handleSearchChange = () => {
  return null
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