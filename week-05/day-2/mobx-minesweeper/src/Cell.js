import React, { Component } from 'react'
import { decorate, computed, observable } from 'mobx'
import { observer } from 'mobx-react'
import ourGame from './Game'

class Cell extends Component {
  checkCell = event => {
    ourGame.checkCell(this.props.row, this.props.col)
  }

  flagCell = event => {
    event.preventDefault()

    ourGame.flagCell(this.props.row, this.props.col)
  }

  cellClassName = () => {
    const LOOKUP = {
      '*': 'cell-bomb',
      F: 'cell-flag',
      '@': 'cell-flag',
      ' ': 'cell-covered',
      '1': 'cell-1',
      '2': 'cell-2',
      '3': 'cell-3',
      '4': 'cell-4',
      '5': 'cell-5',
      '6': 'cell-6',
      '7': 'cell-7',
      '8': 'cell-8'
    }

    return LOOKUP[this.props.value] || 'cell-exposed'
  }

  lookupValue = () => {
    const LOOKUP = { '*': '💣', F: '⚑', '@': '⚑', _: ' ' }

    let foundValue = LOOKUP[this.props.value] || this.props.value

    return foundValue
  }

  render() {
    return (
      <td
        className={this.cellClassName()}
        onClick={this.checkCell}
        onContextMenu={this.flagCell}
      >
        {this.lookupValue()}
      </td>
    )
  }
}

export default observer(Cell)
