import React, { Component } from 'react';
import axios from 'axios';


export class Home extends Component {
  static displayName = Home.name;

  state = {
    allCars: [],
    allDealers: []
  }

  componentDidMount() {
    this.loadDealers();
    this.loadAllCars();
  }

  loadDealers = () => {
    axios.get("/api/dealer")
      .then(resp => {
        this.setState({
          allDealers: resp.data
        })
      })
  }

  loadAllCars = () => {
    axios.get("/api/car")
      .then(resp => {
        this.setState({
          allCars: resp.data
        })
      })
  }

  addCarToApi = (e) => {
    e.preventDefault()
    axios.post("/api/car", {
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

        {/* <input type="radio" name="demo" value="one" id="radio-one" className="form-radio"/><label htmlhtmlFor="radio-one">Radio</label> */}

        <br />

        <form onSubmit={this.addCarToApi}>
          <div className="form-group">
            <label htmlFor="yearInput">Car Year</label>
            <input
              type="text"
              name="year"
              className="form-control"
              id="yearInput"
              aria-describedby="yearHelp"
              placeholder="Enter year" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="colorInput">Car Color</label>
            <input
              type="text"
              name="color"
              className="form-control"
              id="colorInput"
              aria-describedby="yearHelp"
              placeholder="Car Color" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="yearInput">Current Milage</label>
            <input
              type="number"
              name="currentMilage"
              className="form-control"
              id="currentMilageInput"
              aria-describedby="yearHelp"
              placeholder="Enter Current Milage" onChange={this.handleChange} />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" onChange={this.handleCheckBoxChange} name="isNew" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Is New Car?</label>
          </div>
          {/* <input type="number" placeholder="Dealer Id" name="dealerId" onChange={this.handleChange} /> */}
          <select name="dealerId" className="custom-select" onChange={this.handleDropDownChange}>
            {/* // display all the dealers */}
            <option value="0">Select a Dealer</option>
            {this.state.allDealers.map(dealer => {
              return <option value={dealer.id} key={dealer.id}>{dealer.name}</option>
            })}
          </select>

          <div className="form-group">
            <label htmlFor="yearInput">Model Id Milage</label>
            <input
              type="number"
              name="modelId"
              className="form-control"
              id="modelIdInput"
              aria-describedby="yearHelp"
              placeholder="Enter Model Id" onChange={this.handleChange} />
          </div>
          <button className="btn btn-primary">Add Car</button>
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
