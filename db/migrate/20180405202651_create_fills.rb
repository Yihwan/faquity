class CreateFills < ActiveRecord::Migration[5.1]
  def change
    create_table :fills do |t|
      t.integer :asset_id, null: false
      t.integer :portfolio_id, null: false
      t.decimal :price, null: false
      t.integer :size, null: false
      t.string :side, null: false

      t.timestamps
    end

    add_index :fills, [:asset_id], unique: true
    add_index :fills, [:portfolio_id], unique: true 
  end
end
