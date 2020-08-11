import React from 'react'
import '../index.css'

const Notification = ({ notification }) => {

  if (!notification) {
    return null
  }
  
  return (
    <div className="notification">
      {notification}
    </div>
  )
}

export default Notification