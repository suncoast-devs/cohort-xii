class Api::CarsController < ApplicationController
  def index
    @cars = Car.all

    render json: @cars.map { |car|
      {
        id: car.id,
        zip: car.zipcode,
        price: car.price,
        milage: car.milage,
        body_style: car.body_style,
        interior_color: car.interior_color,
        exterior_color: car.exterior_color,
        model_name: car.model.name,
        make: car.model.make.company_name,
      }
    }
  end
end
