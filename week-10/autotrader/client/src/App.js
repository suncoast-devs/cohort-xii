import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cars: [
      ],
      zipcode: ""
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

  _zipcode = (event) => {
    this.setState({zipcode: event.target.value})
  }

  _searchByZipCode = (event) => {
    console.log(this.state.zipcode)
    axios.get(`/api/cars/search?zipcode=${this.state.zipcode}`).
    then(response => {
      console.log(response.data)
      this.setState({
        cars: response.data
      })
    })
  }

  _all = (event) => {
    axios.get('/api/cars/index').then(response => {
      this.setState({
        cars: response.data
      })
    })
  }

  render() {
    return <>
      <h1>AutoTrader</h1>
      <ul>
        {this.state.cars.map(car => <li key={car.id}>
          {car.make} {car.model_name} ${car.price} - ${car.value_for_money}
        </li>)}
      </ul>

      <p>Search:</p>
      <input type="text" value={this.state.zipcode} onChange={this._zipcode} placeholder="zipcode"/>
      <button onClick={this._searchByZipCode}>Search</button>

      <button onClick={this._all}>ALL</button>
    </>
  }
}

export default App
