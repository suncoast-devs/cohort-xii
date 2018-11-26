import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      board: ['', '', '', '', '', '', '', '', '']
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <h2 />
        <div class="board">
          <div class="row">
            <div>X</div>
            <div />
            <div>O</div>
          </div>
          <div class="row">
            <div />
            <div />
            <div />
          </div>
          <div class="row">
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    )
  }
}

export default App
