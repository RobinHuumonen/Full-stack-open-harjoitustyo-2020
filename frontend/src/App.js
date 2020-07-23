import React, {useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import LogInBlock from './components/LogInBlock'
import SignUpBlock from './components/SignUpBlock'
import Recipes from './components/Recipes'
import LoggedInBlock from './components/LoggedInBlock'
import About from './components/About'
import Footer from './components/Footer'
import TopBlock from './components/TopBlock'

const App = () => {
  const [recipes, setRecipes] = useState([]) 

  useEffect(() => {
    axios
      .get('http://localhost:3001/recipes')
      .then(response => {
        setRecipes(response.data)
      })
  }, [])

  const renderAbout = true

  return (
    <div className="page-container">
      <div className="content-wrap">
          <Router>
          {/*<LogInBlock/>*/}
           {/*<SignUpBlock/>*/}
            <TopBlock renderAbout={renderAbout} buttonText="isLoggedIn"/>
            <About/>
{/*             <LoggedInBlock/>
            <Recipes recipes={recipes}/> */}
          </Router>
        </div>
        <Footer/>
    </div>
  )
}

export default App

