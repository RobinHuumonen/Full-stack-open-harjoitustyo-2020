import React, { useState } from 'react'
import Heading from './Heading'
import SignUpForm from './SignUpForm'

const SignUpBlock = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleAccountCreation = () => {
    return (
      null
    )
  }

  return (
    <div className="log-in-and-sign-up-block">
      <Heading/>
      <SignUpForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleAccountCreation}
      />
    </div>
  )
}

export default SignUpBlock