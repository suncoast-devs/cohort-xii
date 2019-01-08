class Car < ApplicationRecord
  belongs_to :model

  validates :zipcode, presence: true
  validates :price, presence: true, numericality: true
  validates :milage, presence: true, numericality: true
  validates :body_style, presence: true
  validates :interior_color, presence: true
  validates :exterior_color, presence: true
end