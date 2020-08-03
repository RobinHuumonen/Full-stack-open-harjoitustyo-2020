import React, { useState } from 'react'
import { Heading } from './Heading'
import UserForm from './UserForm'
import './Log-in-and-sign-up-block.css'
import { signUpUser } from '../reducers/signUpReducer'
import { useDispatch } from 'react-redux'

const SignUpBlock = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async (event) => {
    event.preventDefault()
    try {
      if (password.length < 3) {
        throw new Error("Password's minimum length is 3")
      }
      dispatch(signUpUser({username, password}))
      setUsername('')
      setPassword('')
    } catch (error) {
        console.log('error')
/*       setErrorMessage('NN')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000) */
    }
  }

  return (
    <div className="log-in-and-sign-up-block">
      <Heading/>
      <UserForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleSignUp}
        buttonText="Sign Up"
        to="/"
      />
    </div>
  )
}

export default SignUpBlock