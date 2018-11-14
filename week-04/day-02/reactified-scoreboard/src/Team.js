import React, { Component } from 'react'

class Team extends Component {
  constructor(props) {
    super(props)

    this.state = {
      score: props.initialScore
    }
  }

  addOneToScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

  subtractOneFromScore = () => {
    this.setState({
      score: this.state.score - 1
    })
  }
  render() {
    return (
      <section class="team-one">
        <h2 class="name">Team {this.props.teamNumber}</h2>
        <p class="score-for-team-one">{this.state.score}</p>
        <ul>
          <li>
            <label for="new-team-one-name">Update Team 1 Name</label>
            <input id="new-team-one-name" type="text" />
            <button class="update-team-one-name">Update</button>
          </li>
          <li>
            <label>Update Team 1 Score</label>
            <button class="add" onClick={this.addOneToScore}>
              Add 1
            </button>
            <button class="subtract" onClick={this.subtractOneFromScore}>
              Subtract 1
            </button>
          </li>
        </ul>
      </section>
    )
  }
}

export default Team
