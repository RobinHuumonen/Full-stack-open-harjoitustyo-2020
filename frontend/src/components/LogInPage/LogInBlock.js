import React, { useState } from 'react'
import { Heading } from '../Heading'
import UserForm from '../UserForm'
import SignUpLink from './SignUpLink'
import { logInUser } from '../../reducers/userReducer'
import { nullSignUpUser } from '../../reducers/signUpReducer'
import { useDispatch } from 'react-redux'
import '../../index.css'

const LogInBlock = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      dispatch(nullSignUpUser())
      dispatch(logInUser({username, password}))
      setUsername('')
      setPassword('')
    } catch (error) {
    }
  }

  return (
      <div className="container-1">
      <Heading/>
      <UserForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleLogin}
        buttonText="Log In"
        namePlaceholder = "Username"
        passwordPlaceHolder = "Password"
      />
      <SignUpLink/>
    </div>
    
  )
}

export default LogInBlock