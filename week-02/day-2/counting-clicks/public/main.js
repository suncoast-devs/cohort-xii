let count = 0

const counter = event => {
  event.preventDefault()

  // The function does this:
  // - increment the value of count
  count = count + 1

  // - change the p tag to show what is inside the variable count
  const ptag = document.querySelector('p')
  ptag.textContent = count
}

const reset = event => {
  // Don't do the default functionality that this event
  // would have done (in this case right click)
  event.preventDefault()

  // Set the count to 0
  count = 0

  // - change the p tag to show what is inside the variable count
  const ptag = document.querySelector('p')
  ptag.textContent = count
}

const main = () => {
  // write all our code here inside main

  // Find the p tag
  const ptag = document.querySelector('p')
  console.log(ptag)

  // Change the p tag text into whatever is inside of the variable count
  ptag.textContent = count

  // Any time the user clicks on the button
  // - find the button

  const button = document.querySelector('button')
  console.log(button)

  // - tell the button any time you are clicked, call a function
  button.addEventListener('click', counter)

  // - tell the p tag, any time you are clicked, call the reset function
  ptag.addEventListener('click', reset)
  // ...
  //
  //
  //
}

document.addEventListener('DOMContentLoaded', main)
