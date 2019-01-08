class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :address
      t.string :name
      t.integer :year_founded

      t.timestamps
    end
  end
end
