class Api::LocationsController < ApplicationController
  def index
    latitude = params[:latitude]
    longitude = params[:longitude]

    if latitude && longitude
      all_the_locations = Location.near([latitude, longitude])
    else
      # get all the locations
      all_the_locations = Location.all
    end

    # make some json to return
    render json: {
      locations: all_the_locations.map do |location|
        {
          id: location.id,
          company_name: location.company.name,
          address: location.address,
          rating: location.rating,
          hours: location.hours,
          latitude: location.latitude,
          longitude: location.longitude,
          image: url_for(location.image)
        }
      end
    }

    # locations: [
    #   {
    #     id: 1,
    #     company_name: 'Suncoast Tacos',
    #     address: '260 1st Ave South, St Petersburg, FL, 33701',
    #     hours: '24 Hours',
    #     rating: 1,
    #     latitude: 27.7700989,
    #     longitude: -82.6364093
    #   },
    #   {
    #     id: 2,
    #     company_name: 'Casita',
    #     address: '2701 4th St N, St. Petersburg, FL 33704',
    #     hours: '9-10 M-F',
    #     rating: 4,
    #     latitude: 27.79698595,
    #     longitude: -82.6381713870011
    #   }
    # ] 
  end
end
