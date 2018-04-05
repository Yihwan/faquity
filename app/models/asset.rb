# == Schema Information
#
# Table name: assets
#
#  id            :integer          not null, primary key
#  symbol        :string           not null
#  name          :string           not null
#  description   :string
#  ceo           :string
#  num_employees :integer
#  year_founded  :integer
#  headquarters  :string
#  latest_price  :decimal(, )      not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Asset < ApplicationRecord

  validates :symbol, :name, :latest_price, presence: true

  
end
