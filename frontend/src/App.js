import React, { useEffect } from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Switch, Route, Redirect
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
import { initUser} from './reducers/userReducer'
import { initUsers} from './reducers/usersReducer'
import { signUpUser } from './reducers/signUpReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initRecipes())
    dispatch(initUser())
    dispatch(initUsers())
  }, [dispatch])

  const recipes = useSelector(state => state.recipes)
  const user = useSelector(state => state.user)
  const users = useSelector(state => state.users)
  const signUpUser = useSelector(state => state.signUpUser)

  const HomePage = () => {
    const usersRecipes = recipes.filter(r => r.user.username === user.username)
    const search = useSelector(state => state.filter)
    const searchedRecipes = usersRecipes.filter(r => r.thumbnailCaption.toLowerCase().indexOf(search.toLowerCase()) > -1)
    return (
      <div>
        <HomeTopBlock />
        <LoggedInBlock user={user} users={users}/>
        <Recipes recipes={searchedRecipes}/>
        <Footer/>
      </div>
    )
  }

  const LogInPage = () => {
    return (
      <div>
        <LogInBlock/>
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
        <Upload user={user} />
        <Footer/>
      </div>
    )
  }

  const AboutPage = () => {
    return (
      <div>
        <AboutTopBlock user={user}/>
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
                <LogInPage/>
              </Route>

              <Route path="/signup">
                {signUpUser ? <Redirect to="/"/> : <SignUpPage/>}
              </Route>

              <Route path="/upload">
                <UploadPage/>
              </Route> 

              <Route path="/about">
                <AboutPage />
              </Route>

              <Route path="/">
                {user === null ?
                  <LogInPage/> :
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
