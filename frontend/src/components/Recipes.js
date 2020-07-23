import React from 'react'
import Gallery from 'react-grid-gallery';



const Recipes = ({ recipes }) => {

  return (
    <Gallery images={ recipes }/>
  )
}

export default Recipes

