import React, { Component } from 'react'

class Math extends Component {
  render() {
    console.log(this.props)

    const a = parseInt(this.props.match.params.a)
    const b = parseInt(this.props.match.params.b)
    return <p>Math from a component is awesome {a + b}</p>
  }
}

export default Math
