import React, { Component } from 'react'
import axios from 'axios'
import LocationMap from './LocationMap'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      url: '/api/locations',
      userLocation: null,
      locations: [],
      selectedLocation: null
    }
  }

  getLocations = () => {
    axios.get(this.state.url).then(response => {
      this.setState({
        locations: response.data.locations
      })
    })
  }

  componentDidMount() {
    // Ask the browser to allow the user to choose to share it's location with us
    navigator.geolocation.getCurrentPosition(position => {
      // When they do, we will get a `position` variable

      // Set the userLocation in state to where the user is!
      this.setState(
        {
          userLocation: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          },
          url: `/api/locations?latitude=${position.coords.latitude}&longitude=${
            position.coords.longitude
          }`
        },
        () => {
          this.getLocations()
        }
      )
    })

    this.getLocations()
  }

  renderSelectedLocation() {
    if (!this.state.selectedLocation) {
      return
    }

    return (
      <div>
        <p>{this.state.selectedLocation.company_name}</p>
        <p>{this.state.selectedLocation.address}</p>
        <p>{this.state.selectedLocation.hours}</p>
        <p>{this.state.selectedLocation.rating}</p>
      </div>
    )
  }

  setSelectedLocation = location => {
    this.setState({ selectedLocation: location })
  }

  render() {
    return (
      <>
        <h1>Hello, World!</h1>
        <div className="map">
          <LocationMap
            userLocation={this.state.userLocation}
            locations={this.state.locations}
            onClickMarker={this.setSelectedLocation}
          />
        </div>
        {this.renderSelectedLocation()}
      </>
    )
  }
}

export default App
