import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPlayer: 'X',
      board: ['', '', '', '', '', '', '', '', '']
    }
  }

  _click = event => {
    const index = parseInt(event.target.dataset.index)

    this.state.board[index] = this.state.currentPlayer

    if (this.state.currentPlayer === 'X') {
      this.setState({
        currentPlayer: 'O'
      })
    }

    if (this.state.currentPlayer === 'O') {
      this.setState({
        currentPlayer: 'X'
      })
    }

    this.setState({
      board: this.state.board
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <h2 />
        <div class="board">
          <div class="row">
            <div data-index="0" onClick={this._click}>
              {this.state.board[0]}
            </div>
            <div data-index="1" onClick={this._click}>
              {this.state.board[1]}
            </div>
            <div data-index="2" onClick={this._click}>
              {this.state.board[2]}
            </div>
          </div>
          <div class="row">
            <div data-index="3" onClick={this._click}>
              {this.state.board[3]}
            </div>
            <div data-index="4" onClick={this._click}>
              {this.state.board[4]}
            </div>
            <div data-index="5" onClick={this._click}>
              {this.state.board[5]}
            </div>
          </div>
          <div class="row">
            <div data-index="6" onClick={this._click}>
              {this.state.board[6]}
            </div>
            <div data-index="7" onClick={this._click}>
              {this.state.board[7]}
            </div>
            <div data-index="8" onClick={this._click}>
              {this.state.board[8]}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
