import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      locations: []
    }
  }

  componentDidMount() {
    axios.get('/api/locations').then(response => {
      this.setState({ locations: response.data.locations })
    })
  }

  render() {
    return (
      <>
        <h1>Hello, World!</h1>
        <ul>
          {this.state.locations.map(location => (
            <li key={location.id}>
              {location.company_name} - {location.address} - {location.hours} -{' '}
              {location.rating} - {location.latitude} - {location.longitude}
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default App
