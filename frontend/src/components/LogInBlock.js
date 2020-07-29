import React, { useState } from 'react'
import { Heading } from './Heading'
import UserForm from './UserForm'
import SignUpLink from './SignUpLink'
import './LogInBlock.css'
import loginService from '../services/login' 
import recipeService from '../services/recipeService'

const LogInBlock = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedRecipetUser', JSON.stringify(user)
      ) 

      recipeService.setToken(user.token)
      props.setUser(user)
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