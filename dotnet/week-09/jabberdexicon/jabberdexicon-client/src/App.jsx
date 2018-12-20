import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends Component {

  state = {
    words: []
  }

  loadLetter = letter => {
    console.log(letter)
    Axios
      .get(`https://localhost:5001/api/words/${letter}`)
      .then(resp => {
        console.log({ resp })
        this.setState({
          words: resp.data
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Jabberdexicon
          </p>
        </header>
        <main>
          <section>

            {"abcdefghijklmnopqrstuvwxyz".split('').map(letter => {
              return (
                <button key={letter} onClick={() => this.loadLetter(letter)}>{letter}</button>
              )
            })}
          </section>
          <section>
            <header>words</header>
            <ul>
              {this.state.words.map(word => {
                return (
                  <li key={word.id}>{word.value}</li>
                )
              })}
            </ul>
          </section>

        </main>
      </div>
    );
  }
}

export default App;
