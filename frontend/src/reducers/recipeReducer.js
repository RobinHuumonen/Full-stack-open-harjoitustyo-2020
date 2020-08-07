import recipeService from '../services/recipeService'
import { setNotification } from './notificationReducer'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_RECIPES':
      return [...action.data]
    case 'CREATE_RECIPE':
      return [...state, action.data]
/*     case 'REMOVE_RECIPE':
      return [...state].filter(r => r.id !== action.object) */
    case 'UPDATE_RECIPE':
      return [...state].map(r =>
        r.id === action.data.id ? action.data : r
      )
    default:
      return state
  }
}

export const updateRecipe = (recipe) => {
  return async dispatch => {
    try {
      const updatedRecipe = await recipeService.update(recipe)

      dispatch({
        type: "UPDATE_RECIPE",
        data: updateRecipe
      })

      dispatch(setNotification(`${recipe.thumbnailCaption}'s name changed to ${updatedRecipe.thumbnailCaption}`, 5))

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
          thumbnailWidth: 258,
          thumbnailHeight: 258,
          caption: thumbnailCaption,
          thumbnailCaption
        }
        
        const data = await recipeService.create(dataToServer)
        dispatch({
          type: 'CREATE_RECIPE',
          data
        })
      }
    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }
}


export const initRecipes = () => {
  return async dispatch => {
    try {
      const data = await recipeService.getAll()
      dispatch({
        type: 'INIT_RECIPES',
        data
      })
    } catch (error) {
      dispatch(setNotification(error.message, 5))
    }
  }
}


export default reducer