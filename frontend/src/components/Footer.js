import React from 'react'
import './Footer.css'
import Button from './Button'
import LinkButton from './LinkButton'
import About from './About'



const Footer = (props) => {

  const handleAboutClick = () => {
    return props.setRenderAbout(true)
  }

  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <p>
            {new Date().getFullYear()} Recipet | Full Stack Open -harjoitustyö |
            <LinkButton className="blue-text-button" text="About" handleClick={handleAboutClick} to="/about"/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
