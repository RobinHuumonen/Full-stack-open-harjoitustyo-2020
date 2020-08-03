import React, { useState } from 'react'
import { Heading } from './Heading'
import UserForm from './UserForm'
import SignUpLink from './SignUpLink'
import './LogInBlock.css'
import { logInUser } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'

const LogInBlock = (props) => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      dispatch(logInUser({username, password}))
      setUsername('')
      setPassword('')
    } catch (exception) {
        console.log('exception')
/*       setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000) */
    }
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