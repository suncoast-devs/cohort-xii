let playerOneThrows = ''
let playerTwoThrows = ''

const playerOneClickedRock = () => {
  //   - remember that player one threw rock
  playerOneThrows = 'rock'

  // Find the section with the class Player-One
  let playerOneSection = document.querySelector('.Player-One')
  // add the class name 'hidden' so it goes away
  playerOneSection.classList.toggle('hidden')

  whoWon()
}

const playerOneClickedPaper = () => {
  playerOneThrows = 'paper'
  whoWon()

  // Find the section with the class Player-One
  let playerOneSection = document.querySelector('.Player-One')
  // add the class name 'hidden' so it goes away
  playerOneSection.classList.toggle('hidden')
}

const playerOneClickedScissors = () => {
  playerOneThrows = 'scissors'
  whoWon()

  // Find the section with the class Player-One
  let playerOneSection = document.querySelector('.Player-One')
  // add the class name 'hidden' so it goes away
  playerOneSection.classList.toggle('hidden')
}

const playerTwoClickedRock = () => {
  //   - remember that player Two threw rock
  playerTwoThrows = 'rock'
  whoWon()

  // Find the section with the class Player-Two
  let playerTwoSection = document.querySelector('.Player-Two')
  // add the class name 'hidden' so it goes away
  playerTwoSection.classList.toggle('hidden')
}

const playerTwoClickedPaper = () => {
  playerTwoThrows = 'paper'
  whoWon()

  // Find the section with the class Player-Two
  let playerTwoSection = document.querySelector('.Player-Two')
  // add the class name 'hidden' so it goes away
  playerTwoSection.classList.toggle('hidden')
}

const playerTwoClickedScissors = () => {
  playerTwoThrows = 'scissors'
  whoWon()

  // Find the section with the class Player-Two
  let playerTwoSection = document.querySelector('.Player-Two')
  // add the class name 'hidden' so it goes away
  playerTwoSection.classList.toggle('hidden')
}

const whoWon = () => {
  let winner = ''

  //   Player One      Player Two         Winner
  //   paper           rock               One
  if (playerOneThrows === 'paper' && playerTwoThrows === 'rock') {
    winner = 'Player One'
  }

  //   paper           paper              Tie
  if (playerOneThrows === 'paper' && playerTwoThrows === 'paper') {
    winner = 'Tie'
  }

  //   paper           scissors           Two
  if (playerOneThrows === 'paper' && playerTwoThrows === 'scissors') {
    winner = 'Player Two'
  }
  //   rock            rock               Tie
  //   rock            paper              Two
  //   rock            scissors           One
  //   scissors        rock               Two
  //   scissors        paper              One
  //   scissors        scissors           Tie

  // Update the screen to show who is the winner
  // Find the H1
  let header = document.querySelector('h2')

  // Change the text of the H1 to say who the winner is
  header.textContent = winner
}

const main = () => {
  // Player One
  // - find player one rock

  // - add a click event listener for a function that does:
  let playerOneRockButton = document.querySelector('.Player-One  .rock')
  playerOneRockButton.addEventListener('click', playerOneClickedRock)

  let playerOnePaperButton = document.querySelector('.Player-One  .paper')
  playerOnePaperButton.addEventListener('click', playerOneClickedPaper)

  let playerOneScissorsButton = document.querySelector('.Player-One  .scissors')
  playerOneScissorsButton.addEventListener('click', playerOneClickedScissors)

  let playerTwoRockButton = document.querySelector('.Player-Two  .rock')
  playerTwoRockButton.addEventListener('click', playerTwoClickedRock)

  let playerTwoPaperButton = document.querySelector('.Player-Two  .paper')
  playerTwoPaperButton.addEventListener('click', playerTwoClickedPaper)

  let playerTwoScissorsButton = document.querySelector('.Player-Two  .scissors')
  playerTwoScissorsButton.addEventListener('click', playerTwoClickedScissors)

  // - find player one paper
  // - add a click event listener for a function that does:
  //   - remember that player one threw paper
  // - clicks on scissors
  //   - remember that player one threw scissors
  // Player two
  // - clicks on rock
  //   - remember that player two threw rock
  // - clicks on paper
  // - clicks on scissors
}

document.addEventListener('DOMContentLoaded', main)
