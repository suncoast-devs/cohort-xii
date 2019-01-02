import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    allCars: []
  }

  componentDidMount() {
    this.loadAllCars();
  }

  loadAllCars = () => {
    axios.get("https://localhost:5001/api/car")
      .then(resp => {
        this.setState({
          allCars: resp.data
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

  render() {
    return (
      <div className="App">

{/* <input type="radio" name="demo" value="one" id="radio-one" className="form-radio"/><label htmlFor="radio-one">Radio</label> */}

        <br />

        <form onSubmit={this.addCarToApi}>
          <input type="text" placeholder="Year" name="year" onChange={this.handleChange} />
          <input type="text" placeholder="Color" name="color" onChange={this.handleChange} />
          <input type="number" placeholder="CurrentMilage" name="currentMilage" onChange={this.handleChange} />
          <input type="checkbox" name="isNew" onChange={this.handleCheckBoxChange}/> Is New
          <input type="number" placeholder="Dealer Id" name="dealerId" onChange={this.handleChange} />
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
