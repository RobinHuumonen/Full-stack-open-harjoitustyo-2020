import React from 'react'
import Heading2 from '../Heading'
import Filter from './Filter'
import Button from '../Button'
import '../../index.css'
import { logOut } from '../../reducers/userReducer'
import { useDispatch } from 'react-redux'

const TopBlock = () => {

  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logOut())
  }

return (
  <div className="container-2">
    <Heading2 to="/" />
    <Filter/>
    <Button id="button-log-out" text="Log Out" handleClick={handleLogout}/>
  </div>
)
}

export default TopBlock