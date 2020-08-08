import React from 'react'
import PropTypes from 'prop-types'
import './UserForm.css'
import LinkButton from './LinkButton'

const UserForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password,
  buttonText,
}) => {
  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
          <div >
            <input
            placeholder="Username (min. length 3)"
            className="grey-input"
            id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <input
              placeholder="Password (min. length 3)"
              className="grey-input"
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        <LinkButton id="login-button" text={buttonText} className="blue-box-button"  type="submit"/>
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