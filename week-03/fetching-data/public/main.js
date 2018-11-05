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
  let peopleInSpace = {
    people: [
      {
        name: 'Sergey Prokopyev',
        craft: 'ISS'
      },
      {
        name: 'Alexander Gerst',
        craft: 'ISS'
      },
      {
        name: 'Serena Aunon-Chancellor',
        craft: 'ISS'
      }
    ],
    message: 'success',
    number: 3
  }

  peopleInSpace.people.forEach(addPersonToUL)
}

document.addEventListener('DOMContentLoaded', main)
