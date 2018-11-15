import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CryptoCurrencies from './CryptoCurrencies'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      highPrice: 100.0,
      count: 20
    }
  }

  updateHighPrice = event => {
    this.setState({
      highPrice: parseFloat(event.target.value)
    })
  }

  updateCount = event => {
    this.setState({
      count: parseInt(event.target.value)
    })
  }
  render() {
    return (
      <div>
        <h1>Crypto Currencies</h1>
        <h2>Displaying {this.state.count} currencies</h2>
        <h2>Highlight Prices over {this.state.highPrice}</h2>
        <CryptoCurrencies
          count={this.state.count}
          highPrice={this.state.highPrice}
        />
        <input
          type="range"
          min="0"
          max="10000"
          onChange={this.updateHighPrice}
          value={this.state.highPrice}
        />
        <input
          type="range"
          min="5"
          max="50"
          onChange={this.updateCount}
          value={this.state.count}
        />
      </div>
    )
  }
}

export default App
