import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import CategoryList from './CategoryList'
import PhotoList from './PhotoList'
import PhotoDetail from './PhotoDetail'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <h1>Photo Gallery</h1>
          <Route exact path="/" component={CategoryList} />
          <Route exact path="/:category" component={PhotoList} />
          <Route path="/pandas/1" component={PhotoDetail} />
        </>
      </Router>
    )
  }
}

export default App
