import React, {useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import recipeService from './services/recipeService'


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
  const [user, setUser] = useState(null)
  const [renderAbout, setRenderAbout] = useState(false)

  useEffect(() => {
    recipeService
      .getAll()
      .then(initialRecipes => {
        setRecipes(initialRecipes)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedRecipetUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      recipeService.setToken(user.token)
    }
  }, [])

  const returnAbout = () => {
    return 
  }

  if (renderAbout) {
    return (
      <div>
        <TopBlock renderAbout={renderAbout} buttonText="isLoggedIn" setUser={setUser}/>
        <About/>
        <Footer setRenderAbout={setRenderAbout}/>
      </div>
    )
  }

  return (
    <div className="page-container">
      <div className="content-wrap">
          <Router>
          {user === null && renderAbout === false ?
            <LogInBlock setUser={setUser}/> :
            <div>
              <TopBlock renderAbout={renderAbout} buttonText="isLoggedIn" setUser={setUser}/>
              <Recipes recipes={recipes}/>
            </div>
          }
           {/*<SignUpBlock/>*/}
            {/*<TopBlock renderAbout={renderAbout} buttonText="isLoggedIn"/>*/}
            {/* <About/>*/}
           {/* <LoggedInBlock/>*/}
            {/*<Recipes recipes={recipes}/>*/}
          </Router>
        </div>
        <Footer setRenderAbout={setRenderAbout}/>
    </div>
  )
}

export default App