class Deck {
  async shuffle() {
    let url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

    await fetch(url)
      .then(response => response.json())
      .then(data => {
        this.deck_id = data.deck_id
      })
  }

  async deal() {
    // Deal one card
    let url = `https://deckofcardsapi.com/api/deck/${
      this.deck_id
    }/draw/?count=1`

    let newCard = await fetch(url)
      .then(response => response.json())
      .then(data => {
        let card = data.cards[0]

        let face
        let value

        switch (card.value) {
          case 'JACK':
            face = 'jack'
            value = 10
            break
          case 'QUEEN':
            face = 'queen'
            value = 10
            break
          case 'KING':
            face = 'king'
            value = 10
            break
          case 'ACE':
            face = 'ace'
            value = 10
            break
          default:
            face = card.value
            value = parseInt(card.value)
            break
        }

        let newCard = {
          face: face,
          value: value,
          suit: card.suit.toLowerCase()
        }

        return newCard
      })

    return newCard
  }
}

class Hand {
  // Special method/function that is called
  // when we make a "new Hand()"
  constructor() {
    this.cards = []
  }

  totalValue() {
    let value = 0
    this.cards.forEach(card => {
      value = value + card.value
    })

    return value
  }

  dealerShouldKeepTakingCards() {
    return this.totalValue() <= 17
  }

  busted() {
    // This hand is considered busted
    //
    // IF
    //
    // the total value of the hand is more than 21
    return this.totalValue() > 21
  }

  takeCard(card) {
    // Take a card as an argument
    //
    // Then we push that card onto the array of cards
    // given by 'this.cards'
    this.cards.push(card)
  }
}

// Make a deck of cards
let deck = new Deck()

// This Hand will store the player's hand
let playerHand = new Hand()

// This Hand will store the dealer's hand
let dealerHand = new Hand()

const declareWinnerOrLoser = message => {
  let gameStatus = document.querySelector('header p')
  gameStatus.textContent = message

  let hitButton = document.querySelector('.hit')
  hitButton.disabled = 'disabled'

  let stayButton = document.querySelector('.stay')
  stayButton.disabled = 'disabled'
}

const dealCardToPlayer = async () => {
  let playerHandList = document.querySelector('.player-hand')

  // - pop another card
  // - push it to the hand
  // - add the card to the interface
  let card = await deck.deal()
  playerHand.takeCard(card)

  let playerHandTotal = document.querySelector('.playerHandTotal')
  playerHandTotal.textContent = playerHand.totalValue()

  // If the player goes over 21
  if (playerHand.busted()) {
    // Display the player busted
    declareWinnerOrLoser('Player Busted')
  }

  // Add this card to the user interface

  // Create new LI
  let newCardItem = document.createElement('li')

  // Make the text of the LI be the description of the card
  newCardItem.textContent = `The ${card.face} of ${card.suit}`

  // Append that LI to the UL
  playerHandList.appendChild(newCardItem)
}

const dealOneCardToTheDealer = async () => {
  let card = await deck.deal()
  dealerHand.takeCard(card)

  // Add this card to the user interface
  dealerHandList = document.querySelector('.dealer-hand')

  // Create new LI
  let newCardItem = document.createElement('li')

  // Make the text of the LI be the description of the card
  newCardItem.textContent = `The ${card.face} of ${card.suit}`

  // Append that LI to the UL
  dealerHandList.appendChild(newCardItem)

  let dealerHandTotal = document.querySelector('.dealerHandTotal')
  dealerHandTotal.textContent = dealerHand.totalValue()
}

const dealCardsToDealer = async () => {
  let dealerHandDOM = document.querySelector('.dealer-hand')
  dealerHandDOM.classList.add('shown')

  // - When the player stays (when they click on the stay button)
  //   - Have the dealer keep taking cards as long as the total value of their hand is 17 or less
  while (dealerHand.dealerShouldKeepTakingCards()) {
    await dealOneCardToTheDealer()
  }

  //   - See who won
  //     - See if the dealer is over 21, if so, the player wins
  if (dealerHand.busted()) {
    declareWinnerOrLoser('Player Wins')
  } else {
    //     - Compare the player's hand total to the dealers and see which is higher
    if (playerHand.totalValue() > dealerHand.totalValue()) {
      declareWinnerOrLoser('Player Wins')
    } else {
      // The dealer wins!
      declareWinnerOrLoser('Dealer Wins')
    }
  }
}

const main = async () => {
  await deck.shuffle()

  for (let count = 0; count < 2; count++) {
    dealCardToPlayer()
  }

  for (let count = 0; count < 2; count++) {
    dealOneCardToTheDealer()
  }

  // Find the hit button
  let hitButton = document.querySelector('.hit')
  // Add an event listener on 'click' that does:
  hitButton.addEventListener('click', dealCardToPlayer)

  let stayButton = document.querySelector('.stay')
  stayButton.addEventListener('click', dealCardsToDealer)
}

document.addEventListener('DOMContentLoaded', main)

// TODO:
// - While the player is hitting cards:
//   X Display the total value of the player's hand
//   X Have the player bust if the value of their hand goes over 21
// X After someone wins, don't allow any more play
// - Deal initial two cards to the dealer
//   X One of these should be face down
