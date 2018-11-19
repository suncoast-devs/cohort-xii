import React, { Component } from 'react'

class Cell extends Component {
  checkCell = event => {
    this.props.checkCell(this.props.row, this.props.col)
  }

  flagCell = event => {
    event.preventDefault()

    this.props.flagCell(this.props.row, this.props.col)
  }


  lookupValue = () => {
    const LOOKUP = { '*': '💣', F: '⚑', '@': '⚑', _: ' ' }

    let foundValue = LOOKUP[this.props.value] || this.props.value

    return foundValue
  }

  render() {
    return (
      <td onClick={this.checkCell} onContextMenu={this.flagCell}>
        {this.props.value}
      <td
        onClick={this.checkCell}
        onContextMenu={this.flagCell}
      >
        {this.lookupValue()}
      </td>
    )
  }
}

export default Cell
