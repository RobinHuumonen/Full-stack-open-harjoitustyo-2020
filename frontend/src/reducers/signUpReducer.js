import userService from '../services/userService'

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'SIGNUP_USER':
      return action.createdUser
    case 'NULL_SIGN_UP_USER':
      return null
    default:
      return state
  }
}

export const signUpUser = (signUpData) => {
  return async dispatch => {
    try {
      const createdUser = await userService.signUp(signUpData)
      dispatch({
        type: 'SIGNUP_USER',
        createdUser
      })
/*       dispatch(
        setNotification({
          message: `user: ${createdUser.username} signed Up successfully`
        })
      ) */
    } catch (error) {
      console.log(error);
/*       dispatch(
        setNotification({
          message: 'ValidationError'
        })
      ) */
    }
  }

}

export const nullSignUpUser = () => {
  return {
    type: 'NULL_SIGN_UP_USER',
  }
}

export default reducer