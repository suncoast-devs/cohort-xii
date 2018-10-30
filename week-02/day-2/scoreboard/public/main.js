let count = 0
let countForTeamTwo = 0

let addOnePointForTeamOne = () => {
  count = count + 1
  let ptagCount = document.querySelector('p.score-for-team-one')

  //make ptag content the value of count
  ptagCount.textContent = count
}

let subtractOnePointFromTeamOne = () => {
  count = count - 1
  let ptagCount = document.querySelector('p.score-for-team-one')

  //make ptag content the value of count
  ptagCount.textContent = count
}

let addOnePointForTeamTwo = () => {
  countForTeamTwo = countForTeamTwo + 1
  let ptagCount = document.querySelector('p.score-for-team-two')

  //make ptag content the value of count
  ptagCount.textContent = countForTeamTwo
}

let subtractOnePointFromTeamTwo = () => {
  countForTeamTwo = countForTeamTwo - 1
  let ptagCount = document.querySelector('p.score-for-team-two')

  //make ptag content the value of count
  ptagCount.textContent = countForTeamTwo
}

const main = () => {
  //find the ptag
  let ptagCount = document.querySelector('p.score-for-team-one')

  //make ptag content the value of count
  ptagCount.textContent = count

  let ptagForTeamTwo = document.querySelector('p.score-for-team-two')

  ptagForTeamTwo.textContent = countForTeamTwo

  //find add 1 button for team 1
  let addOneButton = document.querySelector('button.add-for-team-one')

  //when the add buttom for team 1 is clicked, increment count and update ptag
  addOneButton.addEventListener('click', addOnePointForTeamOne)

  let subtractOneButton = document.querySelector('button.subtract-from-team-one')
  subtractOneButton.addEventListener('click', subtractOnePointFromTeamOne)

  //find add 1 button for team 2
  let addOneButtonForTeamTwo = document.querySelector('button.add-for-team-two')

  //when the add buttom for team 2 is clicked, increment count and update ptag
  addOneButtonForTeamTwo.addEventListener('click', addOnePointForTeamTwo)

  let subtractOneButtonFromTeamTwo = document.querySelector('button.subtract-from-team-two')
  subtractOneButtonFromTeamTwo.addEventListener('click', subtractOnePointFromTeamTwo)
}

document.addEventListener('DOMContentLoaded', main)