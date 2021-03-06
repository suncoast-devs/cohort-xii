import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'
import Hand from './Hand'

class App extends Component {
  initialState = {
    gameResults: 'Test Your Skills',
    playing: true,
    dealerCardsHidden: true,
    deck_id: '',
    player: [],
    dealer: []
  }

  constructor(props) {
    super(props)

    this.state = this.initialState
  }

  componentDidMount = () => {
    this.startGame()
  }

  startGame = () => {
    this.setState(this.initialState)

    axios
      .get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(response => {
        const newState = {
          deck_id: response.data.deck_id
        }

        this.setState(newState, this.whenNewDeckIsShuffled)
      })
  }

  componentDidUpdate = () => {
    if (!this.state.playing) {
      return
    }

    if (this.totalHand('player') > 21) {
      this.setState({
        gameResults: 'Player Busted!',
        playing: false
      })
    }
  }

  dealCards = async (numberOfCards, whichHand) => {
    // Don't allow cards to be dealt in a game that is over
    if (!this.state.playing) {
      return
    }

    // put the axios request to get this number of cards
    // and add to the players hand
    await axios
      .get(
        `https://deckofcardsapi.com/api/deck/${
          this.state.deck_id
        }/draw/?count=${numberOfCards}`
      )
      .then(response => {
        const newState = {
          [whichHand]: update(this.state[whichHand], {
            $push: response.data.cards
          })
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
    this.dealCards(2, 'player')

    this.dealCards(2, 'dealer')
  }

  hit = event => {
    this.dealCards(1, 'player')
  }

  stay = async event => {
    this.setState({
      dealerCardsHidden: false
    })

    while (this.totalHand('dealer') < 17) {
      await this.dealCards(1, 'dealer')
    }

    if (
      this.totalHand('dealer') > 21 ||
      this.totalHand('player') > this.totalHand('dealer')
    ) {
      this.setState({
        playing: false,
        gameResults: 'Player Wins!'
      })

      return
    }

    if (this.totalHand('player') <= this.totalHand('dealer')) {
      this.setState({
        playing: false,
        gameResults: 'Dealer Wins!'
      })

      return
    }
  }

  totalHand = whichHand => {
    let total = 0
    this.state[whichHand].forEach(card => {
      // Using object lookup
      const VALUES = {
        ACE: 11,
        KING: 10,
        QUEEN: 10,
        JACK: 10
      }
      total = total + (VALUES[card.value] || parseInt(card.value))
    })

    return total
  }

  buttonClass = () => {
    if (!this.state.playing) {
      return 'hidden'
    }
  }

  renderDealerMessage = () => {
    return this.state.dealerCardsHidden
      ? 'Facedown'
      : `Total: ${this.totalHand('dealer')}`
  }

  render() {
    return (
      <>
        <h1>Blackjack</h1>
        <div className="center">
          <p className="game-results">{this.state.gameResults}</p>
        </div>
        <div className="center">
          <button
            onClick={this.startGame}
            className={`reset ${this.state.playing ? 'hidden' : ''}`}
          >
            Play Again!
          </button>
        </div>

        <div className="play-area">
          <div className="left">
            <button className={`hit ${this.buttonClass()}`} onClick={this.hit}>
              Hit
            </button>
            <p>Your Cards:</p>
            <p className="player-total">Total {this.totalHand('player')} </p>
            <div className="player-hand">
              <Hand cards={this.state.player} />
            </div>
          </div>

          <div className="right">
            <button
              onClick={this.stay}
              className={`stay ${this.buttonClass()}`}
            >
              Stay
            </button>
            <p>Dealer Cards:</p>
            <p className="dealer-total">{this.renderDealerMessage()}</p>
            <div className="dealer-hand">
              <Hand
                hidden={this.state.dealerCardsHidden}
                cards={this.state.dealer}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
