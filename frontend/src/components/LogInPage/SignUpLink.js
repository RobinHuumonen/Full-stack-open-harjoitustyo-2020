import React from 'react' 
import '../../index.css'
import LinkButton from '../LinkButton'
import { nullSignUpUser } from '../../reducers/signUpReducer'
import { useDispatch } from 'react-redux'

const SignUpLink = () => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(nullSignUpUser())
  }
  return (
       <p className="black-text">Don't have an account?
        <LinkButton className="blue-text-button" onClick={handleClick} text="Sign up" to="/signup"/>
      </p>
   
  )
}

export default SignUpLink