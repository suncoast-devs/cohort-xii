import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './Home'
import About from './About'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      route: window.location.pathname
    }
  }

  page = () => {
    if (this.state.route === '/home') {
      return <Home />
    }

    if (this.state.route === '/about') {
      return <About />
    }
  }

  goHome = event => {
    event.preventDefault()

    this.setState({
      route: '/home'
    })

    window.history.pushState(undefined, 'Home', '/home')
  }

  goAbout = event => {
    event.preventDefault()

    this.setState({
      route: '/about'
    })

    window.history.pushState(undefined, 'About', '/about')
  }

  render() {
    return (
      <div className="App">
        <a href="#" onClick={this.goHome}>
          Go to Home
        </a>
        <a href="#" onClick={this.goAbout}>
          Go to About
        </a>
        {this.page()}
      </div>
    )
  }
}

export default App
