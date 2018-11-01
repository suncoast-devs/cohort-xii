const main = () => {
  let name = 'Gavin'
  console.log(name)

  let favoriteNumber = 42

  let secondFavoriteNumber = 100
  let thirdFavoriteNumber = 3.1415
  console.log(thirdFavoriteNumber)
  console.log(favoriteNumber)
  console.log(secondFavoriteNumber)

  let favoriteNumbers = [42, 100, 3.1415, 0]
  console.log(favoriteNumbers)

  // What is in index 3 of the array, should be a zero
  console.log(favoriteNumbers[3])

  // Change the 0 to a 9
  // the zero is at index 3
  favoriteNumbers[3] = 9

  console.log(favoriteNumbers)

  // Lets add something to the end of the array
  favoriteNumbers.push(17)
  console.log(favoriteNumbers)

  // Lets take something OFF the array
  let lastNumber = favoriteNumbers.pop()
  console.log(lastNumber)

  // Takes something off the end of the array
  // But doesn't put it in a variable, so we
  // can log it, but we can't keep a reference
  // to it...
  console.log(favoriteNumbers.pop())
  console.log(favoriteNumbers)

  // Take something off the front of the array
  let firstNumber = favoriteNumbers.shift()
  console.log(firstNumber)
  console.log(favoriteNumbers)

  // Lets add something to the beginning of the array
  favoriteNumbers.unshift(84)
  console.log(favoriteNumbers)

  favoriteNumbers.push(`Gavin's favorite number is "42" -- isn't that great!`)
  console.log(favoriteNumbers)
  // .
  // .
  // .
  // .

  // Lets talk about the for loop
  for (let count = 0; count < 10; count = count + 1) {
    // code here
    console.log('The value of count is ')
    console.log(count)
  }

  console.log('All done with the for lop')

  // Lets use the for loop to go through our array

  for (let index = 0; index < favoriteNumbers.length; index = index + 1) {
    let elementAtTheIndex = favoriteNumbers[index]
    console.log(`We are at index ${index}`)
    console.log(`The element at index ${index} is ${elementAtTheIndex}`)
  }

  // Lets learn about JavaScript "Object"
  let person = {
    //key   value
    name: 'Gavin',

    // key        : value
    favoriteNumber: 42,

    // key       :  value
    favoriteColor: 'Blue',

    job: 'Teacher',

    // This is kinda bad form. It is hard to use these keys
    'a key with a space in it': 100,

    // This is better form, we can use either [] or .
    aKeyWithASpaceInIt: 100
  }

  // Lets ask the person object for it's job
  console.log(person['job'])

  // Lets ask the person object for it's job
  // This is the *PREFERRED* way, but we should know about the [] way too
  console.log(person.job)

  console.log(person['a key with a space in it'])
  // This won't work
  // console.log(person.a key with a space in it)

  // Lets use arrays and objects together!

  // Make people an array (see how the variable name is plural!)
  let people = [
    // The first thing in this array is going to be an object!
    {
      name: 'Gavin',
      favoriteNumber: 42
    },

    // This is our second element in the array, it is also an object
    {
      name: 'Jason',
      favoriteNumber: 13
    },

    {
      name: 'Mark',
      favoriteNumber: 100
    }
  ]
  console.log('---------------------')
  console.log(people)

  // Lets go through the people array, and print every person
  // index++ is a shortcut for saying index = index + 1
  //
  // index += 2 is a shortcut for saying index = index + 2
  for (let index = 0; index < people.length; index++) {
    // Go get the person at the position (index) given by the index variable
    let person = people[index]

    console.log(
      `Hi there ${person.name}, your favorite number is ${
        person.favoriteNumber
      }`
    )
  }

  let cards = [
    {
      suit: 'hearts',
      face: '2',
      value: 2
    },

    {
      suit: 'hearts',
      face: '3',
      value: 3
    },

    {
      suit: 'clubs',
      face: '7',
      value: 7
    },

    // other cards here...

    {
      suit: 'hearts',
      face: 'J',
      value: 10
    },

    {
      suit: 'hearts',
      face: 'Q',
      value: 10
    }
  ]

  // Make a new card
  let newCard = {
    face: 'ace',
    suit: 'spades',
    value: 11
  }
  // PUSH this card on the end of our cards
  cards.push(newCard)

  // First, we need to find the UL to add to
  //    ^ querySelector
  let ul = document.querySelector('ul')
  // For every card in my array of cards
  //    ^ for loop
  for (let index = 0; index < cards.length; index++) {
    let card = cards[index]

    console.log(`this is the ${card.face} of ${card.suit}`)
    // - Build a new LI with the text equal to a description of the card
    //    ^ brand new thing
    let newLI = document.createElement('li')
    newLI.textContent = `The ${card.face} of ${card.suit}`

    // - Inside of the LI, also build an IMG
    //   - Make the src of the image the name of the file in our images folder
    let src = `/images/${card.face}_of_${card.suit}.svg`
    let newImage = document.createElement('img')
    newImage.src = src
    newLI.appendChild(newImage)

    // - APPEND that new LI to the UL
    //    ^ brand new thing
    ul.appendChild(newLI)
  }
  console.log(cards)

  // .
  // .
  // .
  // .
  // .
}

document.addEventListener('DOMContentLoaded', main)
