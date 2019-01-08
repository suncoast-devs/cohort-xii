import React, { Component } from 'react'
import MapGL, { Marker, NavigationControl } from 'react-map-gl'

class LocationMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
        bearing: 0,
        pitch: 0
      }
    }
  }

  _updateViewport = newViewport => {
    this.setState({ viewport: newViewport })
  }

  render() {
    const { viewport } = this.state

    const navStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      padding: '10px'
    }

    return (
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZ2F2aW5zdGFyayIsImEiOiIxZjVmODFhYWQ2NjIyZGY1MTQ5MzM3ZTE2MWNkMDkxMiJ9.HG1IbUfea4FfcJ0WrY7Pqg"
        onViewportChange={this._updateViewport}
      >
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this._updateViewport} />
        </div>

        {this.props.locations.map(location => {
          return (
            <Marker
              key={location.id}
              longitude={location.longitude}
              latitude={location.latitude}
            >
              <img
                width="64"
                src="http://chittagongit.com//images/free-map-pin-icon/free-map-pin-icon-6.jpg"
              />
            </Marker>
          )
        })}
      </MapGL>
    )
  }
}

export default LocationMap
