class AddFakeSymbolToAssets < ActiveRecord::Migration[5.1]
  def change
    add_column :assets, :fake_symbol, :string
  end
end
