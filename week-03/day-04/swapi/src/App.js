import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class Character {
  // Method that is called when we
  // make a new Character
  constructor(rawCharacterData) {
    this.characterName = rawCharacterData.name
    this.filmCount = rawCharacterData.films.length
  }

  name() {
    return this.characterName
  }

  numberOfFilms() {
    return this.filmCount
  }

  description() {
    return `${this.characterName} has been in ${this.filmCount} films`
  }
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 1,
      characters: [],
      loading: false
    }

    this.getCharactersFromAPI()
  }

  getCharactersFromAPI = () => {
    this.setState({ loading: true })

    fetch(`https://swapi.co/api/people/?page=${this.state.page}`)
      .then(response => response.json())
      .then(rawData => {
        let characters = rawData.results.map(rawCharacterData => {
          let newCharacter = new Character(rawCharacterData)

          return newCharacter
        })

        this.setState({
          characters: characters,
          loading: false
        })
      })
  }

  nextPage = () => {
    // Wish we could do this
    // this.state.page = this.state.page + 1

    // ... have to do this
    this.setState(
      () => {
        return { page: this.state.page + 1 }
      },
      () => {
        this.getCharactersFromAPI()
      }
    )
  }

  render() {
    return (
      <div>
        <h1>Star Wars</h1>
        <h2>{this.state.loading ? 'Loading...' : 'Characters'}</h2>

        <h3>Page {this.state.page}</h3>
        <ul>
          {this.state.characters.map(character => {
            return <li>{character.description()}</li>
          })}
        </ul>

        <button onClick={this.nextPage}>Next</button>
      </div>
    )
  }
}

export default App
