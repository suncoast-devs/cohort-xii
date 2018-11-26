import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Enjoy the game',
      currentPlayer: 'X',
      board: ['', '', '', '', '', '', '', '', '']
    }
  }

  detectWinner = player => {
    const winningCombinations = [
      // Horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // Vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // Diagonals
      [0, 4, 8],
      [2, 4, 6]
    ]

    let isWinner = winningCombinations.some(combination => {
      // combination will be like    [0, 1, 2]
      return (
        this.state.board[combination[0]] === player &&
        this.state.board[combination[1]] === player &&
        this.state.board[combination[2]] === player
      )
    })

    return isWinner
  }

  detectTieGame = () => {
    // A game where X isn't a winner
    if (this.detectWinner('X')) {
      // GTFO
      return
    }

    // A game where O isn't a winner
    if (this.detectWinner('O')) {
      // GTFO
      return
    }

    // A game where every square is occupied
    const isEverySquareOccupied = this.state.board.every(square => {
      return square === 'X' || square === 'O'
    })

    if (isEverySquareOccupied) {
      this.setState({
        message: 'Tie Game!'
      })
    }
  }

  _click = event => {
    // Be explicit and say we want numbers
    const index = parseInt(event.target.dataset.index)

    // defensive programming
    // What *IF* the dataset.index isn't
    // really a number
    if (isNaN(index)) {
      // GTFO
      return
    }

    // If this position in the board already has a value
    // then GTFO and don't do any of the work below
    // aka guard clause
    if (this.state.board[index] !== '') {
      // GTFO
      return
    }

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

    this.setState(
      {
        board: this.state.board
      },
      () => {
        if (this.detectWinner('X')) {
          // say "X Wins" -- message
          this.setState({
            message: 'X Wins'
          })
        }

        // Same for O
        if (this.detectWinner('O')) {
          // say "O Wins" -- message
          this.setState({
            message: 'O Wins'
          })
        }
        // This code is called after the state is updated
        this.detectTieGame()
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <h2>{this.state.message}</h2>
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
