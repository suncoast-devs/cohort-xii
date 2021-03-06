import React, { Component } from 'react'
import axios from 'axios'
import Board from './Board'

class Game extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playing: false,
      difficulty: 0,

      game: {
        id: 1,
        board: [
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ],
        state: 'new',
        mines: 10
      }
    }

    if (this.props.match.params.id) {
      this.loadExistingGame(this.props.match.params.id)
    }
  }

  loadExistingGame = id => {
    axios
      .get(`https://minesweeper-api.herokuapp.com/games/${id}`)
      .then(response => {
        this.setState({
          playing: true,
          game: response.data
        })
      })
  }

  newGame = event => {
    axios
      .post('https://minesweeper-api.herokuapp.com/games', {
        difficulty: this.state.difficulty
      })
      .then(response => {
        console.log(response.data)
        this.setState({
          playing: true,
          game: response.data
        })
      })
  }

  // Need:
  //   id:  Get from the state
  //   row: argument
  //   col: argument
  flagCell = (row, col) => {
    //- POST /games/{id}/check

    // If we are not playing the game, return and do not call the API
    if (!this.state.playing) {
      console.log('Nope, not playing a game')
      return
    }

    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${
          this.state.game.id
        }/flag`,
        {
          id: this.state.game.id,
          row: row,
          col: col
        }
      )
      .then(response => {
        this.setState({
          game: response.data
        })
      })
  }

  // Need:
  //   id:  Get from the state
  //   row: argument
  //   col: argument
  checkCell = (row, col) => {
    //- POST /games/{id}/check

    // If we are not playing the game, return and do not call the API`

    // Guard clause
    if (!this.state.playing || row < 0 || col < 0) {
      console.log('Nope, not playing a game')
      return
    }

    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${
          this.state.game.id
        }/check`,
        {
          id: this.state.game.id,
          row: row,
          col: col
        }
      )
      .then(response => {
        this.setState({
          game: response.data
        })
      })
  }

  headerText = () => {
    if (this.state.playing) {
      if (this.state.game.state === 'won') {
        return 'You win!'
      }

      if (this.state.game.state === 'lost') {
        return 'You lose!'
      }

      return `Game #${this.state.game.id}`
    } else {
      return 'Start a new game!!!'
    }
  }

  minesText = () => {
    if (this.state.playing) {
      return `${this.state.game.mines} mines left`
    } else {
      return ''
    }
  }

  buttonText = () => {
    if (this.state.game.state === 'lost') {
      return '😫'
    } else {
      return '😄'
    }
  }

  chooseDifficulty = event => {
    this.setState({
      difficulty: parseInt(event.target.value)
    })
  }

  boardSize = () => {
    return this.state.game.board[0].length
  }
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td className="header" colSpan={this.boardSize()}>
              <select
                value={this.state.difficulty}
                onChange={this.chooseDifficulty}
              >
                <option value="0">Easy</option>
                <option value="1">Intermediate</option>
                <option value="2">Expert</option>
              </select>
              <button onClick={this.newGame}>{this.buttonText()}</button>
            </td>
          </tr>
          <tr>
            <td className="header" colSpan={this.boardSize()}>
              {this.headerText()}
            </td>
          </tr>
          <Board
            board={this.state.game.board}
            checkCell={this.checkCell}
            flagCell={this.flagCell}
          />
          <tr>
            <td className="header" colSpan={this.boardSize()}>
              {this.minesText()}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Game
