class Car < ApplicationRecord
  belongs_to :model, required: false
  has_one_attached :picture

  validates :zipcode, presence: true
  validates :price, presence: true, numericality: true
  validates :milage, presence: true, numericality: true
  validates :body_style, presence: true
  validates :interior_color, presence: true
  validates :exterior_color, presence: true
end