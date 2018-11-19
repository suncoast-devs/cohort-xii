import React, { Component } from 'react'

class Cell extends Component {
  checkCell = event => {
    console.log(`Clicked at row ${this.props.row} column ${this.props.col}`)
    // Wish we could call the api here

    this.props.checkCell(this.props.row, this.props.col)
  }

  render() {
    return <td onClick={this.checkCell}>{this.props.value}</td>
  }
}

export default Cell
