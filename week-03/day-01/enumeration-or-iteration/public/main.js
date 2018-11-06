const greetEmployee = employee => {
  console.log(`Welcome to our company ${employee}`)
}

// Determine if this is a long name
// .. and by a long name we mean any name
// .. that is more than 5 letters
const isNameLong = employee => {
  // long hand way
  // if (employee.length > 4) {
  // return true
  // } else {
  // return false
  // }

  // short hand
  return employee.length > 4
}

const upperCaseTheName = employee => {
  return employee.toUpperCase()
}

// Takes in a name of an employee
// .. and returns how long their name is
const lengthOfName = employee => {
  return employee.length
}

const addUpThePassingScores = scores => {
  // Now lets do this with filter and forEach
  // first I want an array of just the passing scores
  return scores
    .filter(filterScore => {
      // return a boolean if this is a passing score
      let theAnswerToTheQuestion = filterScore > 50

      return theAnswerToTheQuestion
    })
    .reduce((accumulator, reduceScore) => {
      return accumulator + reduceScore
    }, 0)
}

const main = () => {
  document.querySelector('h1').textContent += '?'

  let employees = ['Gavin', 'Jason', 'Toni', 'Mark', 'Katherine']

  // Long hand way to iterate (e.g. go through) an
  // array, one element at a time, and call a function
  // and give that function the current employee
  for (let index = 0; index < employees.length; index++) {
    let employee = employees[index]

    greetEmployee(employee)
  }

  // short hand way of doing the same thing

  // Hey, employees array, for each element of you
  // please call the function I'm giving you and
  // call it with an argument of the current employee
  employees.forEach(greetEmployee)

  // forEach does work with each element
  //
  // We can even write the method RIGHT INLINE
  //
  const ul = document.querySelector('ul')
  employees.forEach(
    // do some work for each employee
    employee => {
      let employeeTheGreat = employee + ' the great'

      let newLI = document.createElement('li')
      newLI.textContent = employeeTheGreat
      ul.appendChild(newLI)

      let secondLI = document.createElement('li')
      secondLI.textContent = employeeTheGreat
      ul.appendChild(secondLI)

      return 42
    }
  )

  employees.forEach(isNameLong)
  let employeesWithLongNames = employees.filter(isNameLong)

  console.log('Employees with Long Names is')
  console.log(employeesWithLongNames)

  let employeesYelling = employees.map(upperCaseTheName)
  console.log('Employees after calling map upperCaseTheName')
  console.log(employeesYelling)

  let employeeNameLengths = employees.map(lengthOfName)
  console.log(employeeNameLengths)

  const repeatTheName = employee => {
    return `${employee} ${employee}`
  }

  let employeeNamesRepeated = employees.map(repeatTheName)
  console.log('employeeNamesRepeated is')
  console.log(employeeNamesRepeated)

  let employeeNamesRepeatedAlso = employees.map(employee => {
    return `${employee} ${employee}`
  })

  console.log('employeeNamesRepeatedAlso is')
  console.log(employeeNamesRepeatedAlso)

  let scores = [10, 49, 62, 100, 15]

  // What is the total of all the scores that are passing
  // .. in this class passing means > 50

  // lets do it with a plain old for loop
  let forLoopTotal = 0
  for (let index = 0; index < scores.length; index++) {
    let score = scores[index]

    if (score > 50) {
      forLoopTotal += score
    }
  }
  console.log(forLoopTotal)

  let answer = addUpThePassingScores(scores)
  console.log(`The answer from addUpThePassingScores is ${answer}`)
}

document.addEventListener('DOMContentLoaded', main)

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
