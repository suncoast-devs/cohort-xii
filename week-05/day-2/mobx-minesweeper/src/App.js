import React, { Component } from 'react'

import './App.css'

import Cell from './Cell'

import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'

import ourGame from './Game'

class App extends Component {
  headerText = () => {
    if (ourGame.playing) {
      if (ourGame.api.state === 'won') {
        return 'You win!'
      }

      if (ourGame.api.state === 'lost') {
        return 'You lose!'
      }

      return `Game #${ourGame.api.id}`
    } else {
      return 'Start a new game!!!'
    }
  }

  minesText = () => {
    if (ourGame.playing) {
      return `${ourGame.api.mines} mines left`
    } else {
      return ''
    }
  }

  buttonText = () => {
    if (ourGame.api.state === 'lost') {
      return '😫'
    } else {
      return '😄'
    }
  }

  boardRows = () => {
    return ourGame.api.board.map((row, rowIndex) => {
      return (
        <tr key={rowIndex}>
          {row.map((whatGoesInTheSpace, index) => {
            return (
              <Cell
                key={index}
                row={rowIndex}
                col={index}
                value={whatGoesInTheSpace}
              />
            )
          })}
        </tr>
      )
    })
  }

  boardSize = () => {
    return ourGame.api.board[0].length
  }

  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <td className="header" colSpan={this.boardSize()}>
                <select
                  value={ourGame.difficulty}
                  onChange={ourGame.chooseDifficulty}
                >
                  <option value="0">Easy</option>
                  <option value="1">Intermediate</option>
                  <option value="2">Expert</option>
                </select>
                <button onClick={ourGame.newGame}>{this.buttonText()}</button>
              </td>
            </tr>
            <tr>
              <td className="header" colSpan={this.boardSize()}>
                {this.headerText()}
              </td>
            </tr>
            {this.boardRows()}
            <tr>
              <td className="header" colSpan={this.boardSize()}>
                {this.minesText()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default observer(App)
