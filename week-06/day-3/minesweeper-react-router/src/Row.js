import React, { Component } from 'react'

import Cell from './Cell'

class Row extends Component {
  render() {
    return (
      <tr>
        {this.props.row.map((whatGoesInTheSpace, index) => {
          return (
            <Cell
              key={index}
              checkCell={this.props.checkCell}
              flagCell={this.props.flagCell}
              row={this.props.rowIndex}
              col={index}
              value={whatGoesInTheSpace}
            />
          )
        })}
      </tr>
    )
  }
}

export default Row
