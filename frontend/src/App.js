import React, {useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import LogInBlock from './components/LogInBlock'
import SignUpBlock from './components/SignUpBlock'
import Recipes from './components/Recipes'
import LoggedInBlock from './components/LoggedInBlock'
import About from './components/About'
import TopBlock from './components/TopBlock'

const App = () => {
  const [recipes, setRecipes] = useState([]) 

  useEffect(() => {
    axios
      .get('https://picsum.photos/v2/list')
      .then(response => {
        setRecipes(response.data)
      })
  }, [])

  return (
    <>
        <Router>
        {/* <LogInBlock/> */}
        {/* <SignUpBlock/> */}
        <TopBlock/>
        <LoggedInBlock/>
        <Recipes recipes={recipes}/>
        </Router>
{/*         <div id="about-button">
          <About/>
        </div> */}
    </>
  )
}

export default App

