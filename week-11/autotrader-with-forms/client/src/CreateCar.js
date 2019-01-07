import React, { Component } from 'react'
import axios from 'axios'

class CreateCar extends Component {
  _createCar = event => {
    event.preventDefault()

    // The event target is the form we are submitting
    const form = event.target

    // Bundle up all the fields in that form into one object
    const formData = new FormData(form)

    // POST that object to the API
    axios.post('/api/cars/create', formData).then(response => {
      console.log(response)
      // form.reset()
    })
  }

  render() {
    return (
      <form onSubmit={this._createCar}>
        <div className="form-group">
          <label htmlFor="zipcode">Zip Code</label>
          <input
            type="text"
            className="form-control"
            id="zipcode"
            name="car[zipcode]"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="car[price]"
          />
        </div>
        <div className="form-group">
          <label htmlFor="milage">Milage</label>
          <input
            type="number"
            className="form-control"
            id="milage"
            name="car[milage]"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body_style">Body Style</label>
          <input
            type="text"
            className="form-control"
            id="body_style"
            name="car[body_style]"
          />
        </div>
        <div className="form-group">
          <label htmlFor="interior_color">Interior Color</label>
          <input
            type="text"
            className="form-control"
            id="interior_color"
            name="car[interior_color]"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exterior_color">Exterior Color</label>
          <input
            type="text"
            className="form-control"
            id="exterior_color"
            name="car[exterior_color]"
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">model</label>
          <input
            type="text"
            className="form-control"
            id="model"
            name="car[model_id]"
          />
        </div>
        <div className="form-group">
          <label hmlFor="picture">Picture of your car</label>
          <input
            type="file"
            className="form-control"
            id="picture"
            name="car[picture]"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    )
  }
}

export default CreateCar
