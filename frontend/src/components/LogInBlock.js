import React, { useState } from 'react'
import Heading from './Heading'
import UserForm from './UserForm'
import SignUpLink from './SignUpLink'
import './LogInBlock.css'

const LogInBlock = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleLogin = () => {
    return (
      null
    )
  }

  return (
    <div>
      <div className="log-in-and-sign-up-block">
      <Heading/>
      <UserForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleLogin}
        buttonText="Log In"
      />
      <SignUpLink/>
    </div>
    </div>
    
  )
}

export default LogInBlock