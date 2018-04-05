class DeleteFillsFromPortfolio < ActiveRecord::Migration[5.1]
  def change
    remove_column :portfolios, :fills
  end
end
