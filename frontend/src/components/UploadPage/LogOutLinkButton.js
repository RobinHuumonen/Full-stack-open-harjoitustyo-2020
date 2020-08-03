import React from 'react'
import { withRouter } from 'react-router'
import '../LinkButton.css'
import { logOut } from '../../reducers/userReducer'
import { useDispatch } from 'react-redux'

const LogOutLinkButton = (props) => {
  const {
    history,
    to,
    id,
    className,
    text,
    type,
  } = props
  const dispatch = useDispatch()
  const onClick = () => {
    dispatch(logOut())
  }
  return (
    <button
    type={type}
    id={id} className={className}
    onClick={(event) => {
        onClick && onClick(event)
        history.push(to)
      }}
    >
      {text}
    </button>
  )
}

export default withRouter(LogOutLinkButton)