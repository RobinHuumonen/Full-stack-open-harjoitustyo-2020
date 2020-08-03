import React from 'react'
import './Heading.css'
import { withRouter } from 'react-router'

export const Heading = () => {
  return (
      <h1 className="h1-heading">Recipet</h1>
  )
}

const LinkHeading = (props) => {
  const {
    history,
    to,
    onClick,
  } = props
  return (
    <h1 className="h1-heading"
    onClick={(event) => {
        onClick && onClick(event)
        history.push(to)
      }}
    >Recipet</h1>
  )
}

const Heading2 = (props) => {
  const {
    history,
    to,
    onClick,
  } = props
  return (
    <h2 className="h2-heading"
    onClick={(event) => {
        onClick && onClick(event)
        history.push(to)
      }}
    >Recipet</h2>
  )
}

export const Heading3 = () => {
  return (
    <h2 className="h3-heading">About</h2>
  )
}
export const H1LinkHead = withRouter(LinkHeading)
export default withRouter(Heading2)
