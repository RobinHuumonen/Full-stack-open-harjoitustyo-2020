import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <p>
            {new Date().getFullYear()} Recipet | Full Stack Open -harjoitustyö |
            <button className="blue-text-button">About</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
