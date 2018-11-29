import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css'

import Game from './Game'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Game} />
          <Route path="/game/:id" component={Game} />
        </div>
      </Router>
    )
  }
}

export default App
