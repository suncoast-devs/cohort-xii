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

const main = () => {
  //

  fetch('https://swapi.co/api/people/?page=4')
    .then(response => response.json())
    .then(rawData => {
      let characters = rawData.results.map(rawCharacterData => {
        let newCharacter = new Character(rawCharacterData)

        return newCharacter
      })

      characters.forEach(character => {
        let ul = document.querySelector('ul')

        let newLI = document.createElement('li')
        newLI.textContent = character.description()

        ul.appendChild(newLI)
      })
    })
}

document.addEventListener('DOMContentLoaded', main)
