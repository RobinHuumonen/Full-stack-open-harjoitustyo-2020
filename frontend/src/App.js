import React from 'react'
import styled from 'styled-components'
import './index.css'

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import LogInBlock from './components/LogInBlock'
import About from './components/About'

const Canvas = styled.div`
position: absolute;
width: 100%;
height: 100%;
background: #F7F9F9
`


const App = () => {
  return (
    <>
      <Canvas>
        <Router>
        <LogInBlock/>
        </Router>
        <div id="about-button">
          <About/>
        </div>
      </Canvas>
    </>
  )
}

export default App