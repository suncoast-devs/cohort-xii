let personalGreeting = (personName, personNumber) => {
  let foundElement = document.querySelector('h1.location')

  let message = `Hello ${personName} your favorite number is ${personNumber}`

  if (personNumber === 42) {
    foundElement.textContent = message
  } else {
    foundElement.textContent = 'Not so good'
  }
}

personalGreeting('Gavin', 42)
