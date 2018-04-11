# == Schema Information
#
# Table name: portfolio_snapshots
#
#  id           :integer          not null, primary key
#  portfolio_id :integer          not null
#  date         :string           not null
#  value        :decimal(, )      not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class PortfolioSnapshotTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
