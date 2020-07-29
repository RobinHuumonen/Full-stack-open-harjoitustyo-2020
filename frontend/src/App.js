import React, {useState, useEffect } from 'react'
import './App.css'
import recipeService from './services/recipeService'
import userService from './services/userService'



import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom"

import LogInBlock from './components/LogInBlock'
import SignUpBlock from './components/SignUpBlock'
import Recipes from './components/Recipes'
import LoggedInBlock from './components/LoggedInBlock'
import About from './components/About'
import Footer from './components/Footer'
import TopBlock from './components/TopBlock'
import Upload from './components/Upload'

const App = () => {
  const [recipes, setRecipes] = useState([]) 
  const [user, setUser] = useState(null)
  const [renderAbout, setRenderAbout] = useState(false)
  const [users, setUsers] = useState([])
  const [usersRecipeCount, setUsersRecipeCount] = useState([]) 

  useEffect(() => {
    userService
      .getAll()
      .then(initialUsers => {
        setUsers(initialUsers)
      })
  }, [])

/*   useEffect((users) => {
    const user = users.find(u => u.username === user.username)
    async function fetchCount () {
      const usersRecipeCount = await userService.getUsers(user.id)
      setUsersRecipeCount(usersRecipeCount.recipes.length)
    }
    fetchCount()
    }, []) */

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

  const HomePage = () => {
    return (
      <div>
        <TopBlock renderAbout={renderAbout} setUser={setUser} setRenderAbout={setRenderAbout}/>
        <LoggedInBlock user={user} users={users}/>
        <Recipes recipes={recipes}/>
        <Footer setRenderAbout={setRenderAbout}/>
      </div>
    )
  }

  const LoginPage = () => {
    return (
      <div>
        <LogInBlock setUser={setUser}/>
        <Footer setRenderAbout={setRenderAbout}/>
      </div>
    )
  }

  const SignUpPage = () => {
    return (
      <div>
        <SignUpBlock/>
        <Footer setRenderAbout={setRenderAbout}/>
      </div>
    )
  }

  const UploadPage = () => {
    return (
      <div>
        <Upload user={user} setUser={setUser}/>
        <Footer setRenderAbout={setRenderAbout}/>
      </div>
    )
  }

  const AboutPage = () => {
    setRenderAbout(true)
    return (
      <div>
        <TopBlock renderAbout={renderAbout} setUser={setUser} setRenderAbout={setRenderAbout} user={user}/>
        <About/>
        <Footer setRenderAbout={setRenderAbout}/>
      </div>
    )
  }

  return (
    <div className="page-container">
      <div className="content-wrap">
          <Router>
            <Switch>

              <Route path="/login">
                <LoginPage/>
              </Route>

              <Route path="/signup">
                <SignUpPage/>
              </Route>

              <Route path="/upload">
                <UploadPage/>
              </Route> 

              <Route path="/about">
                <AboutPage />
              </Route>

              <Route path="/">
                {user === null ?
                  <LoginPage/> :
                  <HomePage/>
                }
              </Route>

            </Switch>
          </Router>
        </div>
    </div>
  )
}

export default App
