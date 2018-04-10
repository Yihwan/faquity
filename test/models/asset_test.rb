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
#  tags          :string           is an Array
#  latest_price  :decimal(, )      not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  fake_symbol   :string
#

require 'test_helper'

class AssetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
