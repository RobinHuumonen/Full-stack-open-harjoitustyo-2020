import recipeService from '../services/recipeService'
import login from '../services/login' 
import { setNotification } from './notificationReducer'

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

export const logInUser = loginData => {
  return async dispatch => {
    try {
      const user = await login.login(loginData)
      window.localStorage.setItem('loggedRecipetUser', JSON.stringify(user))
      recipeService.setToken(user.token)
      dispatch(
        setNotification(
          `User ${user.username} signed in successfully`, 5)
      )
      dispatch({
        type: 'LOGIN_USER',
        user
      })
    } catch (error) {
      dispatch(
        setNotification('Invalid username or password', 5)
      )
    }
  }
}

export const logOut = () => {
  return async dispatch => {
    window.localStorage.removeItem('loggedRecipetUser')
    recipeService.nullToken()
    dispatch({ type: 'LOGOUT_USER' })
  }
}
export default reducer