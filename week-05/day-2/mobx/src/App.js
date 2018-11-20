import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }
  }

  increment = event => {
    this.setState({
      value: this.state.value + 1
    })
  }

  decrement = event => {
    this.setState({
      value: this.state.value - 1
    })
  }

  render() {
    return (
      <div className="App">
        <Counter
          increment={this.increment}
          decrement={this.decrement}
          value={this.state.value}
        />
        <Counter
          increment={this.increment}
          decrement={this.decrement}
          value={this.state.value}
        />
        <Counter
          increment={this.increment}
          decrement={this.decrement}
          value={this.state.value}
        />
      </div>
    )
  }
}

export default App
