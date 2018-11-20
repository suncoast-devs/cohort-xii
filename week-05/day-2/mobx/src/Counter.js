import React, { Component } from 'react'
import { observer } from 'mobx-react'

class Counter extends Component {
  render() {
    return (
      <div>
        <p>{this.props.value}</p>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    )
  }
}

export default observer(Counter)
