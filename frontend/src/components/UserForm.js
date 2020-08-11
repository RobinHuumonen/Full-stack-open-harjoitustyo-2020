import React from 'react'
import PropTypes from 'prop-types'
import LinkButton from './LinkButton'
import '../index.css'

const UserForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password,
  buttonText,
  namePlaceholder,
  passwordPlaceHolder
}) => {
  return (
      <form onSubmit={handleSubmit}>
          <div >
            <input
            placeholder={namePlaceholder}
            className="grey-input"
            id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <input
              placeholder={passwordPlaceHolder}
              className="grey-input"
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        <LinkButton id="login-button" text={buttonText} className="blue-box-button"  type="submit"/>
      </form>
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