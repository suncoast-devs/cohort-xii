import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cars: [
      ]
    }
  }

  componentDidMount() {
    axios.get('/api/cars/index').then(response => {
      console.log(response.data)
      this.setState({
        cars: response.data
      })
    })
  }

  render() {
    return <>
      <h1>AutoTrader</h1>
      <ul>
        {this.state.cars.map(car => <li>
          {car.make} {car.model_name} ${car.price}
        </li>)}
      </ul>
    </>
  }
}

export default App
