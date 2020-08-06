import React, { useState } from 'react'
import { Heading } from '../Heading'
import UserForm from '../UserForm'
import SignUpLink from './SignUpLink'
import '../Log-in-and-sign-up-block.css'
import { logInUser } from '../../reducers/userReducer'
import { nullSignUpUser } from '../../reducers/signUpReducer'
import { useDispatch } from 'react-redux'

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