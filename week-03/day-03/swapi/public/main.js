class Character {
  // Method that is called when we
  // make a new Character
  constructor(rawCharacterData) {
    this.characterName = rawCharacterData.name
    this.filmCount = rawCharacterData.films.length
  }

  name() {
    return this.characterName
  }

  numberOfFilms() {
    return this.filmCount
  }

  description() {
    return `${this.characterName} has been in ${this.filmCount} films`
  }
}

let page = 1

const nextPage = () => {
  page += 1

  let ul = document.querySelector('ul')
  ul.innerHTML = ''

  let newLI = document.createElement('li')
  newLI.textContent = 'Loading...'
  ul.appendChild(newLI)

  fetch(`https://swapi.co/api/people/?page=${page}`)
    .then(response => response.json())
    .then(rawData => {
      render(rawData)
    })
}

const render = rawData => {
  document.querySelector('h3').textContent = `Page ${page}`

  let ul = document.querySelector('ul')
  ul.innerHTML = ''

  let characters = rawData.results.map(rawCharacterData => {
    let newCharacter = new Character(rawCharacterData)

    return newCharacter
  })

  characters.forEach(character => {
    let newLI = document.createElement('li')
    newLI.textContent = character.description()

    ul.appendChild(newLI)
  })
}

const main = () => {
  //

  document.querySelector('button').addEventListener('click', nextPage)

  fetch(`https://swapi.co/api/people/?page=${page}`)
    .then(response => response.json())
    .then(rawData => {
      render(rawData)
    })
}

document.addEventListener('DOMContentLoaded', main)
