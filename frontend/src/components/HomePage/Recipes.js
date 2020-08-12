import React from 'react'
import Gallery from 'react-grid-gallery';
import { connect } from 'react-redux'
import { updateRecipe, removeRecipe } from '../../reducers/recipeReducer'
import ModifyOptions from './ModifyOptions'
import '../../index.css'

class Recipes extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      recipes: this.props.recipes,
      renderModifyOptions: false,
      selectedImg: {},
    };

    this.onSelectImage = this.onSelectImage.bind(this);

  }

  getRecipes() {
    const usersRecipes = this.state.recipes.filter(r => r.user.username === this.props.user.username)
    return usersRecipes.filter(r => r.thumbnailCaption.toLowerCase().indexOf(this.props.search.toLowerCase()) > -1)
  }

  onSelectImage(index) {
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

    window.scrollTo(0, 0)
    
    this.setState({
      recipes: recipes,
      renderModifyOptions: newModRenderState,
      selectedImg: img
    });
  }

  render () {

    if (!this.state.renderModifyOptions) {
      return (
        <div>
          <Gallery rowHeight={436} margin={26} backdropClosesModal={true} onSelectImage={this.onSelectImage} images={ this.getRecipes() } showImageCount={false}/>
        </div>
      )
    } else {
      return (
        <div>
          <ModifyOptions recipe={this.state.selectedImg}/>
          <Gallery rowHeight={436} margin={22.5} backdropClosesModal={true} onSelectImage={this.onSelectImage} images={ this.getRecipes() } showImageCount={false}/>
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