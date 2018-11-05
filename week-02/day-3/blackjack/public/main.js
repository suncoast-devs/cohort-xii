// This is our list of 52 cards
let deck = [
  { face: '2', value: 2, suit: 'spades' },
  { face: '3', value: 3, suit: 'spades' },
  { face: '4', value: 4, suit: 'spades' },
  { face: '5', value: 5, suit: 'spades' },
  { face: '6', value: 6, suit: 'spades' },
  { face: '7', value: 7, suit: 'spades' },
  { face: '8', value: 8, suit: 'spades' },
  { face: '9', value: 9, suit: 'spades' },
  { face: '10', value: 10, suit: 'spades' },
  { face: 'jack', value: 10, suit: 'spades' },
  { face: 'queen', value: 10, suit: 'spades' },
  { face: 'king', value: 10, suit: 'spades' },
  { face: 'ace', value: 11, suit: 'spades' },
  { face: '2', value: 2, suit: 'hearts' },
  { face: '3', value: 3, suit: 'hearts' },
  { face: '4', value: 4, suit: 'hearts' },
  { face: '5', value: 5, suit: 'hearts' },
  { face: '6', value: 6, suit: 'hearts' },
  { face: '7', value: 7, suit: 'hearts' },
  { face: '8', value: 8, suit: 'hearts' },
  { face: '9', value: 9, suit: 'hearts' },
  { face: '10', value: 10, suit: 'hearts' },
  { face: 'jack', value: 10, suit: 'hearts' },
  { face: 'queen', value: 10, suit: 'hearts' },
  { face: 'king', value: 10, suit: 'hearts' },
  { face: 'ace', value: 11, suit: 'hearts' },
  { face: '2', value: 2, suit: 'clubs' },
  { face: '3', value: 3, suit: 'clubs' },
  { face: '4', value: 4, suit: 'clubs' },
  { face: '5', value: 5, suit: 'clubs' },
  { face: '6', value: 6, suit: 'clubs' },
  { face: '7', value: 7, suit: 'clubs' },
  { face: '8', value: 8, suit: 'clubs' },
  { face: '9', value: 9, suit: 'clubs' },
  { face: '10', value: 10, suit: 'clubs' },
  { face: 'jack', value: 10, suit: 'clubs' },
  { face: 'queen', value: 10, suit: 'clubs' },
  { face: 'king', value: 10, suit: 'clubs' },
  { face: 'ace', value: 11, suit: 'clubs' },
  { face: '2', value: 2, suit: 'diamonds' },
  { face: '3', value: 3, suit: 'diamonds' },
  { face: '4', value: 4, suit: 'diamonds' },
  { face: '5', value: 5, suit: 'diamonds' },
  { face: '6', value: 6, suit: 'diamonds' },
  { face: '7', value: 7, suit: 'diamonds' },
  { face: '8', value: 8, suit: 'diamonds' },
  { face: '9', value: 9, suit: 'diamonds' },
  { face: '10', value: 10, suit: 'diamonds' },
  { face: 'jack', value: 10, suit: 'diamonds' },
  { face: 'queen', value: 10, suit: 'diamonds' },
  { face: 'king', value: 10, suit: 'diamonds' },
  { face: 'ace', value: 11, suit: 'diamonds' }
]

// This code will build the deck dynamically
//
// // This will eventually be our deck of 52 cards
// let deck = []
//
// // A list of all the suits we have
// let suits = ['spades', 'hearts', 'clubs', 'diamonds']
//
// // The 13 cards that are in each suit
// let cards = [
//   { face: '2', value: 2 },
//   { face: '3', value: 3 },
//   { face: '4', value: 4 },
//   { face: '5', value: 5 },
//   { face: '6', value: 6 },
//   { face: '7', value: 7 },
//   { face: '8', value: 8 },
//   { face: '9', value: 9 },
//   { face: '10', value: 10 },
//   { face: 'jack', value: 10 },
//   { face: 'queen', value: 10 },
//   { face: 'king', value: 10 },
//   { face: 'ace', value: 11 }
// ]
//
// for (let index = 0; index < suits.length; index++) {
//   for (let cardIndex = 0; cardIndex < cards.length; cardIndex++) {
//     deck.push({
//       face: cards[cardIndex].face,
//       value: cards[cardIndex].value,
//       suit: suits[index]
//     })
//   }
// }

// This array will store the player's hand
let playerHand = []

// This array will store the dealer's hand
let dealerHand = []

const getTheValueOfThePlayerHand = () => {
  let valueOfPlayersHand = 0
  playerHand.forEach(card => {
    valueOfPlayersHand = valueOfPlayersHand + card.value
  })

  return valueOfPlayersHand
}

const declareWinnerOrLoser = message => {
  let gameStatus = document.querySelector('header p')
  gameStatus.textContent = message

  let hitButton = document.querySelector('.hit')
  hitButton.disabled = 'disabled'

  let stayButton = document.querySelector('.stay')
  stayButton.disabled = 'disabled'
}

const dealCardToPlayer = () => {
  let playerHandList = document.querySelector('.player-hand')

  // - pop another card
  // - push it to the hand
  // - add the card to the interface
  let card = deck.pop()

  playerHand.push(card)

  let playerHandTotal = document.querySelector('.playerHandTotal')
  playerHandTotal.textContent = getTheValueOfThePlayerHand()

  // If the player goes over 21
  if (getTheValueOfThePlayerHand() > 21) {
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

const getTheValueOfTheDealerHand = () => {
  let valueOfDealerHand = 0
  dealerHand.forEach(card => {
    valueOfDealerHand = valueOfDealerHand + card.value
  })

  return valueOfDealerHand
}

const dealOneCardToTheDealer = () => {
  let card = deck.pop()

  dealerHand.push(card)

  // Add this card to the user interface

  dealerHandList = document.querySelector('.dealer-hand')

  // Create new LI
  let newCardItem = document.createElement('li')

  // Make the text of the LI be the description of the card
  newCardItem.textContent = `The ${card.face} of ${card.suit}`

  // Append that LI to the UL
  dealerHandList.appendChild(newCardItem)

  let dealerHandTotal = document.querySelector('.dealerHandTotal')
  dealerHandTotal.textContent = getTheValueOfTheDealerHand()
}

const dealCardsToDealer = () => {
  let dealerHand = document.querySelector('.dealer-hand')
  dealerHand.classList.add('shown')

  // - When the player stays (when they click on the stay button)
  //   - Have the dealer keep taking cards as long as the total value of their hand is 17 or less
  while (getTheValueOfTheDealerHand() <= 17) {
    dealOneCardToTheDealer()
  }

  //   - See who won
  //     - See if the dealer is over 21, if so, the player wins
  if (getTheValueOfTheDealerHand() > 21) {
    declareWinnerOrLoser('Player Wins')
  } else {
    //     - Compare the player's hand total to the dealers and see which is higher
    if (getTheValueOfThePlayerHand() > getTheValueOfTheDealerHand()) {
      declareWinnerOrLoser('Player Wins')
    } else {
      // The dealer wins!
      declareWinnerOrLoser('Dealer Wins')
    }
  }
}

const main = () => {
  // Shuffle the deck into a random order
  //
  // Uses [Fisher–Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle)
  for (let index = 52 - 1; index > 1; index -= 1) {
    let otherIndex = Math.floor(Math.random() * index)

    let firstCard = deck[index]
    let secondCard = deck[otherIndex]

    deck[index] = secondCard
    deck[otherIndex] = firstCard
  }

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

  console.log(playerHand)
  console.log(deck)
}

document.addEventListener('DOMContentLoaded', main)

// TODO:
// - While the player is hitting cards:
//   X Display the total value of the player's hand
//   X Have the player bust if the value of their hand goes over 21
// X After someone wins, don't allow any more play
// - Deal initial two cards to the dealer
//   X One of these should be face down
