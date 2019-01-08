class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :address
      t.text :hours
      t.integer :rating
      t.belongs_to :company, foreign_key: true

      t.timestamps
    end
  end
end
