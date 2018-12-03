import React, { Component } from 'react'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'
import PhotoDetail from './PhotoDetail'

class App extends Component {
  render() {
    return (
      <>
        <h1>Photo Gallery</h1>
        <PhotoList />
      </>
    )
  }
}

export default App
