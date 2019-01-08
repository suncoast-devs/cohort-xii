class Api::CarsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
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
        value_for_money: car.price.to_f / car.milage,
        picture: {
          thumbnail: url_for(car.picture.variant(resize: "75x75")),
          fullsize: url_for(car.picture),
        }
      }
    }
  end

  def search
    zipcode = params[:zipcode]

    @cars = Car.all.where("zipcode like ?", "%#{zipcode}%")

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
        value_for_money: car.price.to_f / car.milage,
        picture: {
          thumbnail: url_for(car.picture.variant(resize: "75x75")),
          fullsize: url_for(car.picture),
        }
      }
    }
  end

  def create
    @car = Car.create(car_params)

    if @car.valid?
      render json: @car
    else
      render json: @car.errors
    end
  end

  private

  def car_params
    params.require(:car).permit(:zipcode, :price, :milage, :body_style, :interior_color, :exterior_color, :model_id, :picture)
  end
end
