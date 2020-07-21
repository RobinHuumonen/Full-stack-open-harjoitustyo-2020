import React from 'react'
import PropTypes from 'prop-types'
import '../index.css'

const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password
}) => {
  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
          <div >
            <input
            id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        <button id="login-button" className="blue-box-button" type="submit">login</button>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm