import React, { Component } from 'react'

class Counter extends Component {
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
      <div>
        <p>{this.state.value}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default Counter
