import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import update from 'immutability-helper'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [],
      editing: false,
      idBeingEdited: undefined,
      indexBeingEdited: undefined,
      newItemText: ''
    }
  }

  reloadItems = () => {
    axios
      .get('https://one-list-api.herokuapp.com/items?access_token=tacotuesday')
      .then(response => {
        this.setState({
          todos: response.data
        })
      })
  }

  componentDidMount = () => {
    this.reloadItems()
  }

  _newItem = event => {
    event.preventDefault()
    if (this.state.editing) {
      axios
        .put(
          `https://one-list-api.herokuapp.com/items/${
            this.state.idBeingEdited
          }?access_token=tacotuesday`,
          {
            item: {
              complete: false,
              text: this.state.newItemText
            }
          }
        )
        .then(response => {
          this.setState({
            editing: false,
            idBeingEdited: undefined,
            newItemText: ''
          })

          // Use update to
          // ... go to the index specified in this.state.indexBeingEdited
          // ... AND ...
          // ... Set it's value to the response of the API
          this.setState({
            todos: update(this.state.todos, {
              [this.state.indexBeingEdited]: {
                $set: response.data
              }
            })
          })
        })
    } else {
      axios
        .post(
          `https://one-list-api.herokuapp.com/items?access_token=tacotuesday`,
          {
            item: {
              complete: false,
              text: this.state.newItemText
            }
          }
        )
        .then(response => {
          this.setState({
            editing: false,
            idBeingEdited: undefined,
            newItemText: ''
          })

          // Make a new variable `newTodos`
          // ... that is a copy of our current state todos
          // ... BUT ...
          // ... Lets push the API result (of the new todo)
          // ... onto the end while we are making the copy
          this.setState({
            todos: update(this.state.todos, { $push: [response.data] })
          })
        })
    }
  }

  _changingText = event => {
    this.setState({
      newItemText: event.target.value
    })
  }

  _startEdit = event => {
    // Get the ID from the data-todid
    const id = parseInt(event.target.dataset.todoid)
    // use array find to get the matching todo
    const todo = this.state.todos.find(todo => todo.id === id)
    const index = this.state.todos.findIndex(todo => todo.id === id)

    // Tell the state we are editing, and which id we are editing
    // and the text to show in the input box
    this.setState({
      editing: true,
      idBeingEdited: id,
      indexBeingEdited: index,
      newItemText: todo.text
    })
    event.preventDefault()
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>One List</h1>
        </header>
        <main>
          <ul className="one-list">
            {this.state.todos.map(todo => {
              const todoClass = todo.complete ? 'completed' : ''
              const editingClass =
                todo.id === this.state.idBeingEdited ? 'editing' : ''
              return (
                <li
                  key={todo.id}
                  data-todoid={todo.id}
                  className={`${todoClass} ${editingClass}`}
                  onContextMenu={this._startEdit}
                >
                  {todo.text}
                </li>
              )
            })}
          </ul>
          <form onSubmit={this._newItem}>
            <input
              value={this.state.newItemText}
              onChange={this._changingText}
              type="text"
              placeholder="Whats up?"
            />
          </form>
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
