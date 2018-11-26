import React, { Component } from 'react'

import Cell from './Cell'
import Row from './Row'

class Board extends Component {
  render() {
    return (
      <>
        {this.props.board.map((row, index) => (
          <Row
            key={index}
            checkCell={this.props.checkCell}
            flagCell={this.props.flagCell}
            row={row}
            rowIndex={index}
          />
        ))}
      </>
    )
  }
}

export default Board
