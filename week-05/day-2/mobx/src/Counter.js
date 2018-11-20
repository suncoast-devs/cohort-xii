import React, { Component } from 'react'
import { observer } from 'mobx-react'

import x from './DataStore'

class Counter extends Component {
  render() {
    return (
      <div>
        <p>{x.value}</p>
        <button onClick={x.increment}>Increment</button>
        <button onClick={x.decrement}>Decrement</button>
      </div>
    )
  }
}

export default observer(Counter)
