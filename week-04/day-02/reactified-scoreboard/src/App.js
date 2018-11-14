import React, { Component } from 'react'
import './App.css'
import Team from './Team'

class App extends Component {
  render() {
    let teams = [
      {
        id: 'all-star',
        teamName: 'SDG All Stars',
        initialScore: 0
      },
      {
        id: 'c11',
        teamName: 'Cohort XI',
        initialScore: 42
      },
      {
        id: 'c12',
        teamName: 'Cohort XII',
        initialScore: 3
      },
      {
        id: 'staff',
        teamName: 'Staff',
        initalScore: 5
      }
    ]

    return (
      <div>
        <h1>My Scoreboard</h1>
        <main>
          {teams.map(team => (
            <Team
              key={team.id}
              teamName={team.teamName}
              initialScore={team.initialScore}
            />
          ))}
        </main>
      </div>
    )
  }
}

export default App
