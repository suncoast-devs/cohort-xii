import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CryptoCurrencies from './CryptoCurrencies'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Crypto Currencies</h1>
        <CryptoCurrencies />
      </div>
    )
  }
}

export default App
