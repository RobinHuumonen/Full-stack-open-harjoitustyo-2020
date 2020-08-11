import React from 'react'
import '../index.css'
import LinkButton from './LinkButton'

const Footer = () => {

  return (
          <p className="footer">
            {new Date().getFullYear()} Recipet | Full Stack Open -harjoitustyö |
            <LinkButton className="blue-text-button" text="About" to="/about"/>
          </p>
  )
}

export default Footer
