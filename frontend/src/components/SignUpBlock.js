import React, { useState } from 'react'
import { Heading } from './Heading'
import UserForm from './UserForm'
import './SignUpBlock.css'

const SignUpBlock = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleAccountCreation = () => {
    console.log("signup");
    return (
      null
    )
  }

  return (
    <div className="log-in-and-sign-up-block">
      <Heading/>
      <UserForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleAccountCreation}
        buttonText="Sign Up"
        to="/"
      />
    </div>
  )
}

export default SignUpBlock