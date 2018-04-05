class CreateAssets < ActiveRecord::Migration[5.1]
  def change
    create_table :assets do |t|
      t.string :symbol, null: false
      t.string :name, null: false, unique: true
      t.string :description
      t.string :ceo
      t.integer :num_employees
      t.integer :year_founded
      t.string :headquarters
      t.decimal :latest_price, null: false

      t.timestamps
    end

    add_index :assets, [:symbol], unique: true
  end
end
