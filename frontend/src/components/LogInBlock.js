import React, { useState } from 'react'
import Heading from './Heading'
import LoginForm from './LoginForm'
import SignUpLink from './SignUpLink'

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
    <div className="log-in-and-sign-up-block">
      <Heading/>
      <LoginForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleLogin}
      />
      <SignUpLink/>
    </div>
  )
}

export default LogInBlock