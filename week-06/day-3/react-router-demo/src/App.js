import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

import Math from './Math'

const Home = props => {
  return <p>HOME</p>
}

const About = props => {
  return (
    <p>
      About
      <img src="https://images.unsplash.com/photo-1538755775552-ab005e33597c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cccc08868496bdb438e947f055961a62&auto=format&fit=crop&w=1567&q=80" />
    </p>
  )
}

// const Math = props => {
//   return <p>Math is awesome {props.match.params.number}</p>
// }

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/home">Go to Home</Link>
          <Link to="/about">Go to About</Link>
          <Link to="/math/100/42">Go to Math</Link>

          <Route path="/" exact component={Home} />
          <Route path="/home/" component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/math/:a/:b" component={Math} />
        </div>
      </Router>
    )
  }
}

export default App
