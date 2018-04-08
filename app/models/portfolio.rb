# == Schema Information
#
# Table name: portfolios
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Portfolio < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id

  has_many :fills,
    class_name: 'Fill',
    primary_key: :id,
    foreign_key: :portfolio_id

  has_many :assets,
    through: :fills,
    source: :asset

  def holdings
    holdings = Hash.new(0)

    self.fills.each do |fill|
      if fill.side == "buy"
        holdings[fill.id] += fill.size
      else
        holdings[fill.id] -= fill.size
      end
    end

    holdings
  end

  def value
    value = 0

    self.get_holdings.each do |asset, num_shares|
      holdings_value = Asset.find_by(id: asset).latest_price * num_shares
      value += holdings_value
    end

    value
  end

end
