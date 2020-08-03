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
import HomeTopBlock from './components/HomeTopBlock'
import Upload from './components/Upload'
import AboutTopBlock from './components/AboutTopBlock'

import { useDispatch, useSelector } from 'react-redux'
import { initRecipes} from './reducers/recipeReducer'



const App = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [usersRecipeCount, setUsersRecipeCount] = useState([])

  useEffect(() => {
    dispatch(initRecipes())
  }, [dispatch])

  const recipes = useSelector(state => state.recipes)

  useEffect(() => {
    let isMounted = true
    async function fetchRecipeCount(user) {
      const users = await userService.getAll()
      if (isMounted) {
        setUsers(users)
        const useri = users.find(u => u.username === user.username)
        setUsersRecipeCount(useri.recipes.length)
      }
      return () => { isMounted = false }
    }

    const loggedUserJSON = window.localStorage.getItem('loggedRecipetUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      recipeService.setToken(user.token)
      fetchRecipeCount(user)
    }
    
  }, []) 

  const HomePage = () => {
    const [search, setSearch] = useState('')
    const searchedRecipes = recipes.filter(r => r.thumbnailCaption.toLowerCase().indexOf(search.toLowerCase()) > -1)
    return (
      <div>
        <HomeTopBlock setUser={setUser} search={search} setSearch={setSearch}/>
        <LoggedInBlock user={user} users={users} usersRecipeCount={usersRecipeCount}/>
        <Recipes recipes={searchedRecipes}/>
        <Footer/>
      </div>
    )
  }

  const LoginPage = () => {
    return (
      <div>
        <LogInBlock setUser={setUser}/>
        <Footer/>
      </div>
    )
  }

  const SignUpPage = () => {
    return (
      <div>
        <SignUpBlock/>
        <Footer/>
      </div>
    )
  }

  const UploadPage = () => {
    return (
      <div>
        <Upload user={user} setUser={setUser}/>
        <Footer/>
      </div>
    )
  }

  const AboutPage = () => {
    return (
      <div>
        <AboutTopBlock setUser={setUser} user={user}/>
        <About/>
        <Footer/>
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
