import React, { Component } from 'react'
import axios from 'axios'
import CreateCar from './CreateCar'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cars: [],
      zipcode: '',
      showingFullsize: false
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

  handleClickThumbnail = event => {
    this.setState({ showingFullsize: !this.state.showingFullsize })
  }

  _zipcode = event => {
    this.setState({ zipcode: event.target.value })
  }

  _searchByZipCode = event => {
    event.preventDefault()

    console.log(this.state.zipcode)
    axios
      .get(`/api/cars/search?zipcode=${this.state.zipcode}`)
      .then(response => {
        console.log(response.data)
        this.setState({
          cars: response.data
        })
      })
  }

  _all = event => {
    axios.get('/api/cars/index').then(response => {
      this.setState({
        cars: response.data
      })
    })
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            AutoTrader
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Admin
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/admin/makes">
                    Makes
                  </a>
                  <a className="dropdown-item" href="/admin/models">
                    Models
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="/admin/cars">
                    Cars
                  </a>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                value={this.state.zipcode}
                onChange={this._zipcode}
                placeholder="Search"
                aria-label="Search"
              />

              <button
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={this._searchByZipCode}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className="jumbotron">
          <h3 className="display-7">Auto Trader</h3>
          <p className="lead">Welcome to our car listing site</p>
        </div>

        <ul className="list-group">
          {this.state.cars.map(car => (
            <li key={car.id} className="list-group-item">
              {car.make} {car.model_name} ${car.price} - ${car.value_for_money}
              <img
                onClick={this.handleClickThumbnail}
                className="float-right"
                src={car.picture.thumbnail}
              />
              <img
                className={`float-right ${
                  this.state.showingFullsize ? '' : 'hidden'
                } `}
                src={car.picture.fullsize}
              />
            </li>
          ))}
        </ul>

        <CreateCar />
      </div>
    )
  }
}

export default App
