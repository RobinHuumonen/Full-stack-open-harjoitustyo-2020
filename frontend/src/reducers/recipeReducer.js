import recipeService from '../services/recipeService'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_RECIPES':
      return [...action.recipes]
    case 'CREATE_RECIPE':
      if (state.find(r => r.id === action.object.id)) {
        return [...state]
      }
      return [...state, action.object]
    case 'REMOVE_RECIPE':
      return [...state].filter(r => r.id !== action.object)
    case 'UPDATE_RECIPE':
      return [...state].map(r =>
        r.id === action.object.id ? action.object : r
      )
    default:
      return state
  }
}

export const initRecipes = () => {
  return async dispatch => {
    try {
      const recipes = await recipeService.getAll()
      dispatch({
        type: 'INIT_RECIPES',
        recipes
      })
    } catch (error) {
      console.log(error.message)
/*       dispatch(
        setNotification({
          message: error.message
        })
      ) */
    }
  }
}

export default reducer