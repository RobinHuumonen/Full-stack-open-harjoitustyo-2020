import React from 'react'
import './Footer.css'
import LinkButton from './LinkButton'

const Footer = () => {

  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <p>
            {new Date().getFullYear()} Recipet | Full Stack Open -harjoitustyö |
            <LinkButton className="blue-text-button" text="About" to="/about"/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
