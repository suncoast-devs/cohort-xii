class Make < ApplicationRecord
  has_many :models

  validates :company_name, presence: true
  validates :company_name, uniqueness: true
end
