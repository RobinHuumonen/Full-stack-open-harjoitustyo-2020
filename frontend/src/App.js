import React, { useEffect } from 'react'
import './index.css'

import {
  HashRouter as Router,
  Switch, Route, Redirect,
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
    return (
      <div className="site-wrapper">
        <Notification notification={notification}/>
        <HomeTopBlock />
        <LoggedInBlock user={user} users={users}/>
        <main>
          <Recipes recipes={recipes} user={user} dispatch={dispatch}/>
        </main>
        <Footer/>
      </div>
    )
  }

  const LogInPage = () => {
    return (
      <div className="site-wrapper">
        <Notification notification={notification}/>
        <main>
          <LogInBlock/>
        </main>
        <Footer/>
      </div>
    )
  }

  const SignUpPage = () => {
    return (
      <div className="site-wrapper">
        <Notification notification={notification}/>
        <main>
          <SignUpBlock/>
        </main>
        <Footer/>
      </div>
    )
  }

  const UploadPage = () => {
    return (
      <div className="site-wrapper">
        <Notification notification={notification}/>
        <main>
          <Upload user={user} />  
        </main>
        <Footer/>
      </div>
    )
  }

  const AboutPage = () => {
    return (
      <div className="site-wrapper">
        <AboutTopBlock user={user}/>
        <main>
        <About/>
        </main>
        <Footer/>
      </div>
    )
  }

  return (
      <>
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
        </>
  )
}

export default App
