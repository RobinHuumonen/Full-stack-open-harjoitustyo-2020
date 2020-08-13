import React, { useState, } from 'react'
import '../../index.css'
import { useDispatch } from 'react-redux'
import { updateRecipe, removeRecipe } from '../../reducers/recipeReducer'
import { unset } from '../../reducers/renderModReducer'


const ModifyOptions = ({ 
  recipe, 
  top, 
  left,
  recipes,
  updateStateFromChild
}) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const handleRenaming = (recipe) => {
    const newRecipe = { ...recipe, thumbnailCaption: name, caption: name}
    dispatch(updateRecipe(newRecipe, recipe.thumbnailCaption))
    dispatch(unset())
  }

  const handleDelete = (id, name) => {
    dispatch(removeRecipe(id, name))
    dispatch(unset())
  }

  const handleUnselect = () => {
    const newState = recipes.map(e => {
      if (e.hasOwnProperty("isSelected")) {
        e.isSelected = false
        return e
      }
      return e
    })
    updateStateFromChild(newState)
    window.scrollTo(left, top)
    dispatch(unset())
  } 

  return (
    <div className="container-5">
      <button id="unselect-button" onClick={() => handleUnselect(recipe)}>Unselect</button>
      <button id="delete-button" onClick={() => handleDelete(recipe.id, recipe.thumbnailCaption)}>Delete</button>
        <input
          className="white-input"
          placeholder="Filename"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <button onClick={() => handleRenaming(recipe)} id="rename-button">Rename</button>
    </div>
    )
} 

export default ModifyOptions