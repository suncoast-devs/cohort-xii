import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    allCars: [],
    allDealers:[]
  }

  componentDidMount() {
    this.loadAllCars();
    // GET all the dealers, (API call)
    this.loadDealers();
  }

  loadAllCars = () => {
    axios.get("https://localhost:5001/api/car")
      .then(resp => {
        this.setState({
          allCars: resp.data
        })
      })
  }

  loadDealers = () => {
    axios.get("https://localhost:5001/api/dealer")
      .then(resp => {
        this.setState({
          allDealers: resp.data
        })
      })
  }

  addCarToApi = (e) => {
    e.preventDefault()
    axios.post("https://localhost:5001/api/car", {
      currentMilage: this.state.currentMilage,
      year: this.state.year,
      dealerId: this.state.dealerId,
      modelId: this.state.modelId,
      color: this.state.color,
      isNew: this.state.isNew
    })
      .then(resp => {
        this.loadAllCars();
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCheckBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.checked
    })
  }

  handleDropDownChange = (e) => {
    console.log({ selected: e.target.value });
    // add selected dealer to state
    this.setState({
      dealerId: e.target.value
    })
  }

  render() {
    return (
      <div className="App">

        {/* <input type="radio" name="demo" value="one" id="radio-one" className="form-radio"/><label htmlFor="radio-one">Radio</label> */}

        <br />

        <form onSubmit={this.addCarToApi}>
          <input type="text" placeholder="Year" name="year" onChange={this.handleChange} />
          <input type="text" placeholder="Color" name="color" onChange={this.handleChange} />
          <input type="number" placeholder="CurrentMilage" name="currentMilage" onChange={this.handleChange} />
          <input type="checkbox" name="isNew" onChange={this.handleCheckBoxChange} /> Is New
          {/* <input type="number" placeholder="Dealer Id" name="dealerId" onChange={this.handleChange} /> */}
          <select name="dealerId" onChange={this.handleDropDownChange}>
            {/* // display all the dealers */}
            <option value="0">Select a Dealer</option>
            {this.state.allDealers.map(dealer => {
              return <option value={dealer.id} key={dealer.id}>{dealer.name}</option>
            })}
          </select>
          <input type="number" placeholder="Model Id" name="modelId" onChange={this.handleChange} />
          <br />
          <button>Add Car</button>
        </form>
        <section>
          <ul>
            {this.state.allCars.map(car => {
              return <li key={car.id}>
                {car.isNew ? "new" : "used"} {car.color} {car.year} {car.model.make.name} {car.model.name} located at {car.dealer.name}
              </li>
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
