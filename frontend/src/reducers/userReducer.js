import userService from '../services/userService'
import recipeService from '../services/recipeService'

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'INIT_USER':
      return action.loggedUser
    case 'LOGIN_USER':
      return { ...action.user }
    case 'LOGOUT_USER':
      return null
    default:
      return state
  }
}

export const initUser = () => {
  return async dispatch => {
    const loggedUser = JSON.parse(window.localStorage.getItem('loggedRecipetUser'))
    if (loggedUser) {
      recipeService.setToken(loggedUser.token)
      dispatch({
        type: 'INIT_USER',
        loggedUser
      })
    }
  }
}

export const login = loginData => {
  return async dispatch => {
    try {
      const user = await userService.loginUser(loginData)
      window.localStorage.setItem('loggedRecipetUser', JSON.stringify(user))
      recipeService.setToken(user.token)
/*       dispatch(
        setNotification({
          message: `user ${user.username} signed in successfully`
        })
      ) */
      dispatch({
        type: 'LOGIN_USER',
        user
      })
    } catch (error) {
      console.log(error)
/*       dispatch(
        setNotification({
          message: 'invalid username or password'
        })
      ) */
    }
  }
}

export const logout = () => {
  return async dispatch => {
    window.localStorage.removeItem('loggedRecipetUser')
    recipeService.nullToken()
    dispatch({ type: 'LOGOUT_USER' })
/*     dispatch(
      setNotification({
        message: 'user logged out successfully'
      })
    ) */
  }
}
export default reducer