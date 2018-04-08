class ChangeBuyingPowerToDecimal < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :buying_power, :decimal
  end
end
