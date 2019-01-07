import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  state = {
    allCars: [],
    allDealers: []
  }

  render() {
    return (
      <div className="App">

        {/* <input type="radio" name="demo" value="one" id="radio-one" className="form-radio"/><label htmlFor="radio-one">Radio</label> */}

        <br />

        <form onSubmit={this.addCarToApi}>
          <div class="form-group">
            <label for="yearInput">Car Year</label>
            <input
              type="text"
              name="year"
              class="form-control"
              id="yearInput"
              aria-describedby="yearHelp"
              placeholder="Enter year" onChange={this.handleChange} />
          </div>
          <div class="form-group">
            <label for="colorInput">Car Color</label>
            <input
              type="text"
              name="color"
              class="form-control"
              id="colorInput"
              aria-describedby="yearHelp"
              placeholder="Car Color" onChange={this.handleChange} />
          </div>
          <div class="form-group">
            <label for="yearInput">Current Milage</label>
            <input
              type="number"
              name="currentMilage"
              class="form-control"
              id="currentMilageInput"
              aria-describedby="yearHelp"
              placeholder="Enter Current Milage" onChange={this.handleChange} />
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" onChange={this.handleCheckBoxChange} name="isNew" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">Is New Car?</label>
          </div>
          {/* <input type="number" placeholder="Dealer Id" name="dealerId" onChange={this.handleChange} /> */}
          <select name="dealerId" class="custom-select" onChange={this.handleDropDownChange}>
            {/* // display all the dealers */}
            <option value="0">Select a Dealer</option>
            {this.state.allDealers.map(dealer => {
              return <option value={dealer.id} key={dealer.id}>{dealer.name}</option>
            })}
          </select>

          <div class="form-group">
            <label for="yearInput">Model Id Milage</label>
            <input
              type="number"
              name="modelId"
              class="form-control"
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
