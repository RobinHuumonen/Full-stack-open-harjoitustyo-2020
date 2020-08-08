import React from 'react'
import Gallery from 'react-grid-gallery';
import { connect } from 'react-redux'
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
        <Gallery backdropClosesModal={true} onSelectImage={this.onSelectImage} images={ this.props.recipes } showImageCount={false}/>
      )
    } else {
      return (
        <div>
          <Gallery backdropClosesModal={true} onSelectImage={this.onSelectImage} images={ this.props.recipes } showImageCount={false}/>
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