import React, { Component } from 'react'
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

    return winningCombinations.some(
      combination =>
        this.state.board[combination[0]] === player &&
        this.state.board[combination[1]] === player &&
        this.state.board[combination[2]] === player
    )
  }

  detectTieGame = () => {
    // Return if every square is occupied without a winner (a tie)
    return (
      !this.detectWinner('X') &&
      !this.detectWinner('O') &&
      this.state.board.every(square => square === 'X' || square === 'O')
    )
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

    // Is there a winner?
    if (this.detectWinner('X') || this.detectWinner('O')) {
      // GTFO
      return
    }

    // Change the index-th element of the board to the current player
    this.state.board[index] = this.state.currentPlayer

    // If X moved, then the player should be O
    if (this.state.currentPlayer === 'X') {
      this.setState({
        currentPlayer: 'O'
      })
    }

    // If O moved, then the player should be X
    if (this.state.currentPlayer === 'O') {
      this.setState({
        currentPlayer: 'X'
      })
    }

    // Update the board
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
        if (this.detectTieGame()) {
          this.setState({
            message: 'Tie Game!'
          })
        }
      }
    )
  }

  renderSquare = index => {
    return (
      <div key={index} data-index={index} onClick={this._click}>
        {this.state.board[index]}
      </div>
    )
  }
  renderRow = (row, index) => {
    return (
      <div key={index} className="row">
        {row.map(index => this.renderSquare(index))}
      </div>
    )
  }

  render() {
    const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]

    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <h2>{this.state.message}</h2>
        <div className="board">
          {rows.map((row, index) => this.renderRow(row, index))}
        </div>
      </div>
    )
  }
}

export default App
