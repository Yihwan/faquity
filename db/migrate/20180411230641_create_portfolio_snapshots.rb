class CreatePortfolioSnapshots < ActiveRecord::Migration[5.1]
  def change
    create_table :portfolio_snapshots do |t|
      t.integer :portfolio_id, null: false
      t.string :date, null: false
      t.decimal :value, null: false
      
      t.timestamps
    end

    add_index :portfolio_snapshots, [:portfolio_id]
  end
end
