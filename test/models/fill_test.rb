# == Schema Information
#
# Table name: fills
#
#  id           :integer          not null, primary key
#  asset_id     :integer          not null
#  portfolio_id :integer          not null
#  price        :decimal(, )      not null
#  size         :integer          not null
#  side         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class FillTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
