import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'

import axios from 'axios'

class Game {
  constructor() {
    this.playing = false
    this.difficulty = 0

    this.api = {
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

  newGame = () => {
    axios
      .post('https://minesweeper-api.herokuapp.com/games', {
        difficulty: this.difficulty
      })
      .then(response => {
        this.playing = true
        this.api = response.data
      })
  }

  // Need:
  //   id:  Get from the state
  //   row: argument
  //   col: argument
  flagCell = (row, col) => {
    //- POST /games/{id}/check

    // If we are not playing the game, return and do not call the API
    if (!this.playing) {
      console.log('Nope, not playing a game')
      return
    }

    axios
      .post(`https://minesweeper-api.herokuapp.com/games/${this.api.id}/flag`, {
        id: this.api.id,
        row: row,
        col: col
      })
      .then(response => {
        this.api = response.data
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
    if (!this.playing || row < 0 || col < 0) {
      console.log('Nope, not playing a game')
      return
    }

    axios
      .post(
        `https://minesweeper-api.herokuapp.com/games/${this.api.id}/check`,
        {
          id: this.api.id,
          row: row,
          col: col
        }
      )
      .then(response => {
        this.api = response.data
      })
  }

  chooseDifficulty = event => {
    this.difficulty = event.target.value
  }
}

decorate(Game, {
  difficulty: observable,
  playing: observable,
  api: observable
})

let ourOneAndOnlyGame = new Game()
export default ourOneAndOnlyGame
