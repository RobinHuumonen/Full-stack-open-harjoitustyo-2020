import userService from '../services/userService'

const reducer = (state = null, action) => {
  switch (action.type) {
    case 'INIT_USERS':
      return action.users
    default:
      return state
  }
}

export const initUsers = (user) => {
  return async dispatch => {
    const users = await userService.getAll()
    if (user) {
      const useri = users.find(u => u.username === user.username)
      console.log(useri.recipes.length);
      dispatch({
        type: 'INIT_USERS',
        users: useri.recipes.length
      })
    }

    
  }
}

export default reducer