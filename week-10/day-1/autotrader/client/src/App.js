import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cars: [
        {
          "id": 1,
          "zip": "33703",
          "price": 1231,
          "milage": 234234,
          "body_style": "coupe",
          "interior_color": "black",
          "exterior_color": "white",
          "model_name": "S",
          "make": "Tesla Motors"
        },
        {
          "id": 2,
          "zip": "44444",
          "price": 123123,
          "milage": 4444,
          "body_style": "couple",
          "interior_color": "green",
          "exterior_color": "yellow",
          "model_name": "Golf",
          "make": "Volkswagen"
        },
        {
          "id": 3,
          "zip": "4444",
          "price": 444,
          "milage": 444,
          "body_style": "44",
          "interior_color": "44",
          "exterior_color": "44",
          "model_name": "S",
          "make": "Tesla Motors"
        },
        {
          "id": 4,
          "zip": "11111",
          "price": 11111,
          "milage": 11111,
          "body_style": "couple",
          "interior_color": "black",
          "exterior_color": "black",
          "model_name": "i3",
          "make": "BMW"
        }
      ]
    }
  }
  render() {
    return <>
      <h1>AutoTrader</h1>
      <ul>
        {this.state.cars.map(car => <li>
          {car.make} {car.model} ${car.price}
        </li>)}
      </ul>
    </>
  }
}

export default App
