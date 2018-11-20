import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './Counter'
import dataStore from './DataStore'

import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'

class App extends Component {
  decrementTwice = event => {
    dataStore.decrement()
    dataStore.decrement()
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.decrementTwice}>LESS PLEASE x 2</button>
        <Counter />
        <Counter />
        <Counter />
      </div>
    )
  }
}

export default observer(App)
