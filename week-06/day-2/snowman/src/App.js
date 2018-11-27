import React, { Component } from 'react'
import snowman_step_7 from './images/step_7.png'
import words from './words.json'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    let randomIndex = Math.floor(Math.random() * 1024)

    this.state = {
      secretWord: words[randomIndex],

      // what state variable will we add to keep track of the letters chosen?
      lettersChosen: []
    }
    console.log(words[randomIndex])
  }

  shouldShowLetter = letter => {
    // if we should not show the letter, return _

    // if lettersChosen doeS contain letter
    // then return an letter
    if (this.state.lettersChosen.includes(letter)) {
      return letter
    }

    // If we should show the letter, return '_'
    return '_'
  }

  letterClicked = event => {
    console.log('clicked')
    let newLettersChosen = this.state.lettersChosen

    newLettersChosen.push(event.target.value)

    // Tell react that the state has changed
    this.setState({
      lettersChosen: newLettersChosen
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Do you want to build a Snowman?</h1>

        <img src={snowman_step_7} alt="snowman" />
        <ul>
          {this.state.secretWord.split('').map(letter => {
            return <li>{this.shouldShowLetter(letter)}</li>
          })}
        </ul>

        <div className="Alphabet">
          <button value="a" onClick={this.letterClicked}>
            A
          </button>
          <button value="b" onClick={this.letterClicked}>
            B
          </button>
          <button value="c" onClick={this.letterClicked}>
            C
          </button>
          <button value="d" onClick={this.letterClicked}>
            D
          </button>
          <button value="e" onClick={this.letterClicked}>
            E
          </button>
          <button value="f" onClick={this.letterClicked}>
            F
          </button>
          <button value="g" onClick={this.letterClicked}>
            G
          </button>
          <button value="h" onClick={this.letterClicked}>
            H
          </button>
          <button value="i" onClick={this.letterClicked}>
            I
          </button>
          <button value="j" onClick={this.letterClicked}>
            J
          </button>
          <button value="k" onClick={this.letterClicked}>
            K
          </button>
          <button value="l" onClick={this.letterClicked}>
            L
          </button>
          <button value="m" onClick={this.letterClicked}>
            M
          </button>
          <button value="n" onClick={this.letterClicked}>
            N
          </button>
          <button value="o" onClick={this.letterClicked}>
            O
          </button>
          <button value="p" onClick={this.letterClicked}>
            P
          </button>
          <button value="q" onClick={this.letterClicked}>
            Q
          </button>
          <button value="r" onClick={this.letterClicked}>
            R
          </button>
          <button value="s" onClick={this.letterClicked}>
            S
          </button>
          <button value="t" onClick={this.letterClicked}>
            T
          </button>
          <button value="u" onClick={this.letterClicked}>
            U
          </button>
          <button value="v" onClick={this.letterClicked}>
            V
          </button>
          <button value="w" onClick={this.letterClicked}>
            W
          </button>
          <button value="x" onClick={this.letterClicked}>
            X
          </button>
          <button value="y" onClick={this.letterClicked}>
            Y
          </button>
          <button value="z" onClick={this.letterClicked}>
            Z
          </button>
        </div>
      </div>
    )
  }
}

export default App
