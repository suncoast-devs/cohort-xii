import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'
import Hand from './Hand'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      deck_id: '',
      player: [],
      dealer: []
    }
  }

  dealCardsToPlayer = numberOfCards => {
    // put the axios request to get this number of cards
    // and add to the players hand
    axios
      .get(
        `https://deckofcardsapi.com/api/deck/${
          this.state.deck_id
        }/draw/?count=${numberOfCards}`
      )
      .then(response => {
        const newState = {
          player: update(this.state.player, { $push: response.data.cards })
        }

        this.setState(newState)
      })
  }

  whenNewDeckIsShuffled = () => {
    // this will happen after state is updated

    // call the API for "Draw a Card"
    // -- draw two cards
    // -- make sure to supply the deck_id
    // -- console log the result to be sure it
    // -- works the way we want
    this.dealCardsToPlayer(2)

    axios
      .get(
        `https://deckofcardsapi.com/api/deck/${
          this.state.deck_id
        }/draw/?count=2`
      )
      .then(response => {
        const newState = {
          dealer: update(this.state.dealer, { $push: response.data.cards })
        }

        this.setState(newState)
      })
  }

  componentDidMount = () => {
    axios
      .get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => {
        const newState = {
          deck_id: response.data.deck_id
        }

        this.setState(newState, this.whenNewDeckIsShuffled)
      })
  }

  hit = event => {
    console.log('HIT!')

    this.dealCardsToPlayer(1)
  }

  render() {
    return (
      <>
        <h1>Blackjack</h1>
        <div className="center">
          <p className="game-results">Test Your Skills!</p>
        </div>
        <div className="center">
          <button className="reset hidden">Play Again!</button>
        </div>

        <div className="play-area">
          <div className="left">
            <button className="hit" onClick={this.hit}>
              Hit
            </button>
            <p>Your Cards:</p>
            <p className="player-total">Total 0</p>
            <div className="player-hand">
              <Hand cards={this.state.player} />
            </div>
          </div>

          <div className="right">
            <button className="stay">Stay</button>
            <p>Dealer Cards:</p>
            <p className="dealer-total">Facedown</p>
            <div className="dealer-hand">
              <Hand cards={this.state.dealer} />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
