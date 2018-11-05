const addPersonToUL = person => {
  // Find the UL
  let theUL = document.querySelector('ul')

  // Create a new LI
  let newLI = document.createElement('li')

  // make the text content of the LI the NAME of the person
  newLI.textContent = person.name

  // add the LI to the UL
  theUL.appendChild(newLI)
}

const main = () => {
  // Lets get that object *LIVE* from the website
  fetch('http://api.open-notify.org/astros.json')
    .then(response => {
      return response.json()
    })
    .then(peopleInSpace => {
      peopleInSpace.people.forEach(addPersonToUL)
    })

  addPersonToUL({
    name: 'Gavin Stark',
    craft: 'ISS'
  })
  console.log('DONE')
}

document.addEventListener('DOMContentLoaded', main)
