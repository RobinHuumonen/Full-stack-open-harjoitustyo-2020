import React, { useState } from 'react'
import { H1LinkHead } from '../Heading'
import UserForm from '../UserForm'
import '../../index.css'
import { signUpUser } from '../../reducers/signUpReducer'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../reducers/notificationReducer'

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
      if (username.length < 3) {
        throw new Error("Username's minimum length is 3")
      }
      dispatch(signUpUser({username, password}))
      setUsername('')
      setPassword('')
    } catch (error) {
        dispatch(setNotification(error.message, 5))
    }
  }

  return (
    <div className="container-1">
      <H1LinkHead  to="/"/>
      <UserForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleSignUp}
        buttonText="Sign Up"
        to="/"
        namePlaceholder = "Username (min. length 3)"
        passwordPlaceHolder = "Password (min. length 3)"
      />
    </div>
  )
}

export default SignUpBlock