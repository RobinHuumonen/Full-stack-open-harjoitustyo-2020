import React from 'react'
import Gallery from 'react-grid-gallery';
import { connect } from 'react-redux'
import { set, unset } from '../../reducers/renderModReducer'
import ModifyOptions from './ModifyOptions'
import '../../index.css'
import { setNotification } from '../../reducers/notificationReducer'

const createHandlers = function(dispatch) {
  const disSet = function() {
    dispatch(set())
  };

  const disUnset = function() {
    dispatch(unset())
  };

  const disSetNotification = function(content, time) {
    dispatch(setNotification(content, time))
  };

  return {
    disSet,
    disUnset,
    disSetNotification
  };
}

class Recipes extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      recipes: this.props.recipes,
      renderModifyOptions: false,
      selectedImg: {},
      top: window.pageYOffset || document.documentElement.scrollTop,
      left:  window.pageXOffset || document.documentElement.scrollLeft,
    };
    this.handlers = createHandlers(this.props.dispatch);
    this.onSelectImage = this.onSelectImage.bind(this);

  }

  getRecipes() {
    const usersRecipes = this.state.recipes.filter(r => r.user.username === this.props.user.username)
    return usersRecipes.filter(r => r.thumbnailCaption.toLowerCase().indexOf(this.props.search.toLowerCase()) > -1)
  }

  onSelectImage(index) {
    this.setState({
      top: window.pageYOffset || document.documentElement.scrollTop,
      left:  window.pageXOffset || document.documentElement.scrollLeft
    })
    const recipes = this.state.recipes.slice();
    const img = recipes[index];

    if (img.hasOwnProperty("isSelected")) {
      img.isSelected = !img.isSelected;
    } else {
      img.isSelected = true;
    }

    if (!this.props.renderMod) {
      this.handlers.disSet()
      window.scrollTo(0, 0)
    } else if (this.props.renderMod) {
      this.handlers.disUnset()
    }

    let allSelected = recipes.filter(e => e.hasOwnProperty("isSelected") && e.isSelected === true)

    if (allSelected.length > 1) {
      allSelected.forEach(e => e.isSelected = false)
      this.handlers.disSetNotification("Select only 1 image for modification", 5)
    }

    this.setState({
      recipes: recipes,
      selectedImg: img,
    });
  }

  updateStateFromChild = (object) => {
    this.setState({
      recipes: object
    })
  }

  render () {

    if (!this.props.renderMod) {
      return (
        <div>
          <Gallery rowHeight={436} margin={26} backdropClosesModal={true} onSelectImage={this.onSelectImage} 
            images={ this.getRecipes() } showImageCount={false}
          />
        </div>
      )
    } else {
      return (
        <div>
          <ModifyOptions updateStateFromChild={this.updateStateFromChild} recipes={this.state.recipes} 
            recipe={this.state.selectedImg} top={this.state.top} left={this.state.left}
          />
          <Gallery rowHeight={436} margin={22.5} backdropClosesModal={true} onSelectImage={this.onSelectImage} 
            images={ this.getRecipes() } showImageCount={false}
          />
        </div>
      )
    }
}

}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    renderMod: state.renderMod,
    search: state.filter
  }
}

export default connect(
  mapStateToProps,
)(Recipes);