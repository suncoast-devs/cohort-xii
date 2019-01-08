class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.string :zipcode
      t.integer :price
      t.integer :milage
      t.string :body_style
      t.string :interior_color
      t.string :exterior_color
      t.belongs_to :model, foreign_key: true

      t.timestamps
    end
  end
end
