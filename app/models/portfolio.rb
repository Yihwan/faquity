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

  after_create :take_first_snapshot

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

  has_many :snapshots,
    class_name: 'PortfolioSnapshot',
    primary_key: :id,
    foreign_key: :portfolio_id

  attr_reader :holdings, :value

  def holdings
    holdings = Hash.new(0)

    self.fills.each do |fill|
      if fill.side == "buy"
        holdings[fill.asset_id] += fill.size
      else
        holdings[fill.asset_id] -= fill.size
      end
    end

    # remove from holdings if you sold all of a certain asset
    holdings.delete_if { | asset, num_shares| num_shares == 0 }

    holdings
  end

  def value
    value = 0

    self.holdings.each do |asset, num_shares|
      holdings_value = Asset.find_by(id: asset).latest_price * num_shares
      value += holdings_value
    end

    value
  end

  def take_first_snapshot

    snapshot = PortfolioSnapshot.create!(
      portfolio_id: self.id,
      date: Time.now.strftime("%b %d, %Y"),
      value: self.user.buying_power,
    )

  end

end
