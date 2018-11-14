import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Team from './Team'

class App extends Component {
  render() {
    return (
      <div>
        <h1>My Scoreboard</h1>
        <main>
          <Team teamNumber="1" initialScore={0} />
          <Team teamNumber="2" initialScore={42} />
          <Team teamNumber="3" initialScore={3} />
          <Team teamNumber="4" initialScore={5} />
        </main>
      </div>
    )
  }
}

export default App
