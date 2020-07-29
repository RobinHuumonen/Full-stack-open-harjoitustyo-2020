import React from 'react' 
import './SignUpLink.css'
import LinkButton from './LinkButton'

const SignUpLink = () => {
  return (
    <div className="center"> 
       <p className="black-text">Don't have an account?
        {/* <button className="blue-text-button">Sign up</button> */}
        <LinkButton className="blue-text-button" text="Sign up" to="/signup"/>
      </p>
    </div>
   
  )
}

export default SignUpLink

{/* <LinkButton className="blue-text-button" text="About" handleClick={handleAboutClick} to="/about"/> */}