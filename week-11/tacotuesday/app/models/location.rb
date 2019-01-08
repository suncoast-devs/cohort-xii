class Location < ApplicationRecord
  belongs_to :company

  geocoded_by :address

  after_validation :geocode
end
