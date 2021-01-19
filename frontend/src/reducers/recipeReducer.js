import recipeService from '../services/recipeService'
import { setNotification } from './notificationReducer'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_RECIPES':
      return [...action.data]
    case 'CREATE_RECIPE':
      return [...state, action.data]
    case 'REMOVE_RECIPE':
      return [...state].filter(r => r.id !== action.data)
    case 'UPDATE_RECIPE':
      return [...state].map(r =>
        r.id === action.data.id ? action.data : r
      )
    default:
      return state
  }
}

export const removeRecipe = (id, name) => {
  return async dispatch => {
    try {
      await recipeService.remove(id)

      dispatch({
        type: 'REMOVE_RECIPE',
        data: id
      })

      dispatch(setNotification(`${name} removed`, 5))

    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }
}

export const updateRecipe = (recipe, oldName) => {
  return async dispatch => {
    try {

      const data = await recipeService.update(recipe)
      dispatch({
        type: "UPDATE_RECIPE",
        data
      })

      dispatch(setNotification(`${oldName}'s name changed`, 5))

    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }
}

export const createRecipe = (imageData, name = null) => {
  return async dispatch => {

    const uploadImage = async () => {
      const data = new FormData()
      data.append('file', imageData)
      data.append('upload_preset', 'recipetPreset')
      const res = await fetch(
        '	https://api.cloudinary.com/v1_1/recipet/image/upload',
        {
          method: 'POST',
          body: data
        }
      )
      const file = await res.json()
      return file.secure_url
    }

    try {

      let thumbnailCaption

      if (name) {
        thumbnailCaption = name
      } else {
        thumbnailCaption = imageData.name
      }

      const src = await uploadImage()

      if (src && thumbnailCaption) {
        const dataToServer = {
          src,
          thumbnail: src,
          thumbnailWidth: 436,
          thumbnailHeight: 436,
          caption: thumbnailCaption,
          thumbnailCaption
        }
        
        const data = await recipeService.create(dataToServer)
        dispatch({
          type: 'CREATE_RECIPE',
          data
        })
        dispatch(setNotification(`Recipe '${data.thumbnailCaption}' added!`, 5))
      }
    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }
}


export const initRecipes = (user) => {
  return async dispatch => {
    try {
      const data = await recipeService.getAll()
      if (user) {
        dispatch({
          type: 'INIT_RECIPES',
          data: data.filter(r => r.user.username === user.username)
        })
      }
    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }
}


export default reducer