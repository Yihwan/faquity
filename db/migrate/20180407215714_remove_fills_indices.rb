class RemoveFillsIndices < ActiveRecord::Migration[5.1]
  def change
    remove_index :fills, :asset_id
    remove_index :fills, :portfolio_id
  end
end
