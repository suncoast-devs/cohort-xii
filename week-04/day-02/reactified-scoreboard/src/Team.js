import React, { Component } from 'react'

class Team extends Component {
  constructor(props) {
    super(props)

    this.state = {
      teamName: props.teamName,
      score: props.initialScore
    }
  }

  addOneToScore = event => {
    this.setState({
      score: this.state.score + 1
    })
  }

  subtractOneFromScore = event => {
    this.setState({
      score: this.state.score - 1
    })
  }

  updateTeamName = event => {
    this.setState({
      teamName: event.target.value
    })
  }

  render() {
    return (
      <section>
        <h2>{this.state.teamName}</h2>
        <p>{this.state.score}</p>
        <ul>
          <li>
            <label>Update Team 1 Name</label>
            <input
              type="text"
              value={this.state.teamName}
              onChange={this.updateTeamName}
            />
            <button>Update</button>
          </li>
          <li>
            <label>Update Team 1 Score</label>
            <button onClick={this.addOneToScore}>Add 1</button>
            <button onClick={this.subtractOneFromScore}>Subtract 1</button>
          </li>
        </ul>
      </section>
    )
  }
}

export default Team
