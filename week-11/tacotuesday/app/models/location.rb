class Location < ApplicationRecord
  belongs_to :company

  geocoded_by :address

  after_validation :geocode

  has_one_attached :image
end
