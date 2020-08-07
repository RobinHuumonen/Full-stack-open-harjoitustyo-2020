import React, { useEffect } from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom"

import LogInBlock from './components//LogInPage/LogInBlock'
import SignUpBlock from './components//SignUpPage/SignUpBlock'
import Recipes from './components//HomePage/Recipes'
import LoggedInBlock from './components//HomePage/LoggedInBlock'
import About from './components//AboutPage/About'
import Footer from './components/Footer'
import HomeTopBlock from './components//HomePage/HomeTopBlock'
import Upload from './components//UploadPage/Upload'
import AboutTopBlock from './components//AboutPage/AboutTopBlock'
import Notification from './components/Notification'

import { useDispatch, useSelector } from 'react-redux'
import { initRecipes} from './reducers/recipeReducer'
import { initUser} from './reducers/userReducer'
import { initUsers} from './reducers/usersReducer'

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
  const notification = useSelector(state => state.notification) 

  const HomePage = () => {
    const usersRecipes = recipes.filter(r => r.user.username === user.username)
    const search = useSelector(state => state.filter)
    const searchedRecipes = usersRecipes.filter(r => r.thumbnailCaption.toLowerCase().indexOf(search.toLowerCase()) > -1)
    return (
      <div>
        <Notification notification={notification}/>
        <HomeTopBlock />
        <LoggedInBlock user={user} users={users}/>
        <Recipes recipes={searchedRecipes}/>
       {/*  <Footer/> */}
      </div>
    )
  }

  const LogInPage = () => {
    return (
      <div>
        <Notification notification={notification}/>
        <LogInBlock/>
        <Footer/>
      </div>
    )
  }

  const SignUpPage = () => {
    return (
      <div>
        <Notification notification={notification}/>
        <SignUpBlock/>
        <Footer/>
      </div>
    )
  }

  const UploadPage = () => {
    return (
      <div>
        <Notification notification={notification}/>
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
