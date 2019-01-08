class Company < ApplicationRecord
  has_many :locations

  geocoded_by :address

  after_validation :geocode
end
