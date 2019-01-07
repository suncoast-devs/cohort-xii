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

  _createCar = (event) => {
    event.preventDefault()

    // The event target is the form we are submitting
    const form = event.target
    console.log(form)

    // Bundle up all the fields in that form into one object
    const formData = new FormData(form)
    console.log(formData)

    // POST that object to the API
    axios.post("/api/cars/create", formData).then(response => {
      this._all()
      form.reset()
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
    return <div className='container'>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">AutoTrader</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/admin/makes">Admin Makes</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
      <div class="jumbotron">
        <h1 class="display-4">Auto Trader</h1>
        <p class="lead">Welcome to our car listing site</p>
      </div>
      
      <form onSubmit={this._createCar}>
        <div class="form-group">
          <label for="zipcode">Zip Code</label>
          <input type="text" class="form-control" id="zipcode" name="car[zipcode]"/>
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input type="number" class="form-control" id="price" name="car[price]"/>
        </div>
        <div class="form-group">
          <label for="milage">Milage</label>
          <input type="number" class="form-control" id="milage" name="car[milage]"/>
        </div>
        <div class="form-group">
          <label for="body_style">Body Style</label>
          <input type="text" class="form-control" id="body_style" name="car[body_style]"/>
        </div>
        <div class="form-group">
          <label for="interior_color">Interior Color</label>
          <input type="text" class="form-control" id="interior_color" name="car[interior_color]"/>
        </div>
        <div class="form-group">
          <label for="exterior_color">Exterior Color</label>
          <input type="text" class="form-control" id="exterior_color" name="car[exterior_color]"/>
        </div>
        <div class="form-group">
          <label for="model">model</label>
          <input type="text" class="form-control" id="model" name="car[model_id]"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>


      <ul className="list-group">
        {this.state.cars.map(car => <li key={car.id} className='list-group-item'>
          {car.make} {car.model_name} ${car.price} - ${car.value_for_money}
        </li>)}
      </ul>


      <div class="card">
        <div class="card-body">
          <p>Search:</p>
          <input type="text" value={this.state.zipcode} onChange={this._zipcode} placeholder="zipcode"/>
          <div className="btn-group" role="group" aria-label="Search/All">
            <button class="btn btn-primary" onClick={this._searchByZipCode}>Search</button>
            <button class="btn btn-primary" onClick={this._all}>ALL</button>
          </div>
        </div>
      </div>

    </div>
  }
}

export default App
