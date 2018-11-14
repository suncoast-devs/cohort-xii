let count = 0
let countForTeamTwo = 0

let addOnePointForTeamOne = () => {
  count = count + 1

  //make ptag content the value of count
  document.querySelector('.score-for-team-one').textContent = count
}

let subtractOnePointFromTeamOne = () => {
  count = count - 1
  document.querySelector('.score-for-team-one').textContent = count
}

let addOnePointForTeamTwo = () => {
  countForTeamTwo = countForTeamTwo + 1

  document.querySelector('.score-for-team-two').textContent = countForTeamTwo
}

let subtractOnePointFromTeamTwo = () => {
  countForTeamTwo = countForTeamTwo - 1

  document.querySelector('.score-for-team-two').textContent = countForTeamTwo
}

let updateTeamOneName = () => {
  // Find the team one name input element
  let teamOneNameInput = document.querySelector('#new-team-one-name')

  // Read whatever is in that input
  let newName = teamOneNameInput.value

  // Change the team one name to that value
  // find that element, change it's textContent
  let teamOneName = document.querySelector('.team-one .name')
  teamOneName.textContent = newName
}

const main = () => {
  //find the class score-for-team-one and change it's text content to equal whatever is in the variable count
  document.querySelector('.team-one .score').textContent = count

  document.querySelector('.team-two .score').textContent = countForTeamTwo

  //find add 1 button for team 1
  //when the add buttom for team 1 is clicked, increment count and update ptag
  document
    .querySelector('.team-one .add')
    .addEventListener('click', addOnePointForTeamOne)

  document
    .querySelector('.team-one .subtract')
    .addEventListener('click', subtractOnePointFromTeamOne)

  //find add 1 button for team 2
  document
    .querySelector('.team-two .add')
    .addEventListener('click', addOnePointForTeamTwo)

  document
    .querySelector('.team-two .subtract')
    .addEventListener('click', subtractOnePointFromTeamTwo)

  document
    .querySelector('.update-team-one-name')
    .addEventListener('click', updateTeamOneName)
}

document.addEventListener('DOMContentLoaded', main)
