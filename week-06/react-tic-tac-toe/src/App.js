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

  _click = event => {
    console.log('a square was clicked')
  }

  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <h2 />
        <div class="board">
          <div class="row">
            <div onClick={this._click}>{this.state.board[0]}</div>
            <div>{this.state.board[1]}</div>
            <div>{this.state.board[2]}</div>
          </div>
          <div class="row">
            <div>{this.state.board[3]}</div>
            <div>{this.state.board[4]}</div>
            <div>{this.state.board[5]}</div>
          </div>
          <div class="row">
            <div>{this.state.board[6]}</div>
            <div>{this.state.board[7]}</div>
            <div>{this.state.board[8]}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
