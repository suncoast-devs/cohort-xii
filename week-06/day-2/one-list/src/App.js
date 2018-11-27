import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  componentDidMount = () => {
    axios
      .get('https://one-list-api.herokuapp.com/items?access_token=tacotuesday')
      .then(response => {
        this.setState({
          todos: response.data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>One List</h1>
        </header>
        <main>
          <ul className="one-list">
            {this.state.todos.map((todo, index) => {
              const todoClass = todo.complete ? 'completed' : ''
              return (
                <li key={index} className={todoClass}>
                  {todo.text}
                </li>
              )
            })}
          </ul>
          <input type="text" placeholder="Whats up?" />
        </main>
        <footer>
          <p>
            <img src={logo} height="42" alt="logo" />
          </p>
          <p>&copy; 2018 Suncoast Developers Guild</p>
        </footer>
      </div>
    )
  }
}

export default App
