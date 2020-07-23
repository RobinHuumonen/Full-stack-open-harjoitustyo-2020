import React from 'react'
import PropTypes from 'prop-types'
import './UserForm.css'

const UserForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password,
  buttonText
}) => {
  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
          <div >
            <input
            className="grey-input"
            id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <input
              className="grey-input"
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        <button id="login-button" className="blue-box-button" type="submit">{buttonText}</button>
      </form>
    </div>
  )
}

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default UserForm