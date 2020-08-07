import React, { useState, } from 'react'
import Gallery from 'react-grid-gallery';
import { useDispatch, connect } from 'react-redux'
import { updateRecipe, removeRecipe } from '../../reducers/recipeReducer'
import ModifyOptions from './ModifyOptions'

class Recipes extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      recipes: this.props.recipes,
      renderModifyOptions: false,
      selectedImg: {}
    };

    this.onSelectImage = this.onSelectImage.bind(this);

  }

  onSelectImage (index) {
    let newModRenderState
    let recipes = this.state.recipes.slice();
    let img = recipes[index];
    if (img.hasOwnProperty("isSelected"))
      img.isSelected = !img.isSelected;
    else
      img.isSelected = true;

    if (this.state.renderModifyOptions) 
      newModRenderState = false
    else 
      newModRenderState = true
    this.setState({
      recipes: recipes,
      renderModifyOptions: newModRenderState,
      selectedImg: img
    });
  }

  render () {

    if (!this.state.renderModifyOptions) {
      return (
        <Gallery onSelectImage={this.onSelectImage} images={ this.props.recipes } showImageCount={false}/>
      )
    } else {
      return (
        <div>
          <Gallery onSelectImage={this.onSelectImage} images={ this.props.recipes } showImageCount={false}/>
          <ModifyOptions recipe={this.state.selectedImg}/>
        </div>
      )
    }
}

}

const mapDispatchToProps = () => {
  return {
    updateRecipe, removeRecipe

  };
};

const mapStateToProps = state => ({
  recipes: state.recipes
});

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(Recipes);


/* const Recipes = ({ recipes }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const handleRenaming = (recipe) => {
    const newRecipe = { ...recipe, thumbnailCaption: name, caption: name}
    dispatch(updateRecipe(newRecipe, recipe.thumbnailCaption))
  }

  const handleDelete = (id, name) => {
    dispatch(removeRecipe(id, name))
  }

  const ModifyOptions = (recipe) => {
    return (
      <div>
        <button className="delete-button" onClick={() => handleDelete(recipe.id, recipe.thumbnailCaption)}>Delete</button>
          <input
            className="white-input"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <button onClick={() => handleRenaming(recipe)} className="rename-button">Rename</button>
      </div>
    )
  }

  return (
    <div>
    {recipes.map(recipe => {
    return (
      <div key={recipe.id}>
        <Gallery recipes={ [recipe] } showImageCount={false}/>
      </div>
    )
    }
      
    )}
    </div>

  )
}

export default Recipes */

/* import React, { useState } from 'react'
import Gallery from 'react-grid-gallery';
import './Recipes.css'
import { useDispatch } from 'react-redux'
import { updateRecipe, removeRecipe } from '../../reducers/recipeReducer'


const Recipes = ({ recipes }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const handleRenaming = (recipe) => {
    const newRecipe = { ...recipe, thumbnailCaption: name, caption: name}
    dispatch(updateRecipe(newRecipe, recipe.thumbnailCaption))
  }

  const handleDelete = (id, name) => {
    dispatch(removeRecipe(id, name))
  }

  const handleImageSelection = () => {
    console.log(this.isSelected);
  }

  if (recipes.length === 1) {
    const recipe = recipes[0]
    return (
      <div>
        <Gallery recipes={ [recipe] } showImageCount={false}/>
        <button className="delete-button" onClick={() => handleDelete(recipe.id, recipe.thumbnailCaption)}>Delete</button>
          <input
            className="white-input"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <button onClick={() => handleRenaming(recipe)} className="rename-button">Rename</button>
      </div>
    )
  } else {
    return (
      <Gallery onSelectImage={handleImageSelection} recipes={ recipes } showImageCount={false}/>
    )
  }
}

export default Recipes

// onSubmit={() => handleRenaming(recipe)} */