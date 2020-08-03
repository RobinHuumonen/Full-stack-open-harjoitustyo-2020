import userService from '../services/userService'

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'INIT_USERS':
      return action.users
    default:
      return state
  }
}

export const initUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
      dispatch({
        type: 'INIT_USERS',
        users
      })
    
  }
}

export default reducer