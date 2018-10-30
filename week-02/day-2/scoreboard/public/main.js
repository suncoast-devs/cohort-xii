let count = 0

let addOnePointForTeamOne = () => {
  console.log('Hurray, we clicked!')
  count = count + 1
  let ptagCount = document.querySelector('p')
  console.log(ptagCount)

  //make ptag content the value of count
  ptagCount.textContent = count
}

const main = () => {
  //find the ptag
  let ptagCount = document.querySelector('p')
  console.log(ptagCount)

  //make ptag content the value of count
  ptagCount.textContent = count

  //find add 1 button for team 1
  let addOneButton = document.querySelector('button.add-for-team-one')
  console.log(addOneButton)
  //when the add buttom for team 1 is clicked, increment count and update ptag
  addOneButton.addEventListener('click', addOnePointForTeamOne)
}

document.addEventListener('DOMContentLoaded', main)
