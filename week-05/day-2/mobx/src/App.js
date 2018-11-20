import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './Counter'

import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'

class App extends Component {
  constructor(props) {
    super(props)

    this.value = 0
  }

  increment = event => {
    this.value++
  }

  decrement = event => {
    this.value--
  }

  render() {
    return (
      <div className="App">
        <Counter
          increment={this.increment}
          decrement={this.decrement}
          value={this.value}
        />
        <Counter
          increment={this.increment}
          decrement={this.decrement}
          value={this.value}
        />
        <Counter
          increment={this.increment}
          decrement={this.decrement}
          value={this.value}
        />
      </div>
    )
  }
}

// Tell the App component that it has
// mobx superpowers, and that the `value`
// should be observable
decorate(App, {
  value: observable
})

export default observer(App)
