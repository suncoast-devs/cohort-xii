import React, { Component } from 'react'

class Button extends Component {
  localFunctionToHandleClick = () => {
    this.props.letterClicked(this.props.letter)
  }

  render() {
    return (
      <button
        value={this.props.letter}
        disabled={this.props.disabled}
        onClick={this.localFunctionToHandleClick}
      >
        {this.props.letter}
      </button>
    )
  }
}

export default Button
