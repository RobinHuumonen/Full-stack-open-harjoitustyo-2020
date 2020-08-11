import React, { useState, } from 'react'
import '../../index.css'
import { useDispatch } from 'react-redux'
import { updateRecipe, removeRecipe } from '../../reducers/recipeReducer'


const ModifyOptions = ({ recipe }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const handleRenaming = (recipe) => {
    const newRecipe = { ...recipe, thumbnailCaption: name, caption: name}
    dispatch(updateRecipe(newRecipe, recipe.thumbnailCaption))
  }

  const handleDelete = (id, name) => {
    dispatch(removeRecipe(id, name))
  }

  return (
    <div className="container-4">
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