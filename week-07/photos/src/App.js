import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <>
        <h1>Photo Gallery</h1>
        <ul>
          <li>
            <a href="/pandas">Panda Bears</a>
          </li>
          <li>
            <a href="/miniatures">Miniatures</a>
          </li>
        </ul>
      </>
    )
  }
}

export default App
