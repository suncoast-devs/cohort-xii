import React, { Component } from 'react'
import MapGL, { Marker, Popup, NavigationControl } from 'react-map-gl'
import pin from './pin.png'
import userPin from './user-pin.png'

class LocationMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      popupInfo: null,
      viewport: {
        latitude: 27.7700989,
        longitude: -82.6364093,
        zoom: 12.5,
        bearing: 0,
        pitch: 0
      }
    }
  }

  _updateViewport = newViewport => {
    this.setState({ viewport: newViewport })
  }

  renderPopup = () => {
    const popupInfo = this.state.popupInfo

    if (!popupInfo) {
      return
    }

    return (
      <Popup
        tipSize={5}
        anchor="top"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        closeOnClick={false}
        onClose={() => {
          this.props.onClickMarker(null)
          this.setState({ popupInfo: null })
        }}
      >
        <div>
          <p>{popupInfo.company_name}</p>
          <p>{popupInfo.address}</p>
          <p>{popupInfo.hours}</p>
        </div>
      </Popup>
    )
  }

  renderUserMarker = () => {
    if (!this.props.userLocation) {
      return
    }

    return (
      <Marker
        longitude={this.props.userLocation.longitude}
        latitude={this.props.userLocation.latitude}
        offsetTop={-64}
        offsetLeft={-32}
      >
        <img width="64" height="64" src={userPin} />
      </Marker>
    )
  }

  _userClicked = event => {
    console.log('The user clicked at', event.lngLat)
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
        onClick={this._userClicked}
      >
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this._updateViewport} />
        </div>

        {this.renderPopup()}

        {this.renderUserMarker()}

        {this.props.locations.map(location => {
          return (
            <Marker
              key={location.id}
              longitude={location.longitude}
              latitude={location.latitude}
              offsetTop={-64}
              offsetLeft={-32}
            >
              <img
                onClick={() => {
                  this.props.onClickMarker(location)
                  this.setState({ popupInfo: location })
                }}
                width="64"
                height="64"
                src={pin}
              />
            </Marker>
          )
        })}
      </MapGL>
    )
  }
}

export default LocationMap
