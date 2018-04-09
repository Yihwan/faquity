class CreateWatchlists < ActiveRecord::Migration[5.1]
  def change
    create_table :watches do |t|
      t.integer :user_id, null: false
      t.integer :asset_id, null: false

      t.timestamps
    end

    add_index :watches, [:asset_id, :user_id], unique: true
  end
end
