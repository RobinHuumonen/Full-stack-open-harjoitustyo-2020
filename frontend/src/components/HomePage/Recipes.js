import React, { useState } from 'react'
import Gallery from 'react-grid-gallery';
import './Recipes.css'
import { useDispatch } from 'react-redux'
import { updateRecipe } from '../../reducers/recipeReducer'


const Recipes = ({ recipes }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const handleRenaming = (recipe) => {
    const newRecipe = { ...recipe, thumbnailCaption: name, caption: name}
    dispatch(updateRecipe(newRecipe))
  }

  return (
    <div>
    {recipes.map(recipe => {
    return (
      <div key={recipe.id}>
        <Gallery images={ [recipe] } showImageCount={false}/>
        <button className="delete-button">Delete</button>
        <form onSubmit={() => handleRenaming(recipe)}>
          <input
            className="white-input"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <button type="submit" className="rename-button">Rename</button>
        </form>
      </div>
    )
    }
      
    )}
    </div>

  )
}

export default Recipes

