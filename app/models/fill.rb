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

class Fill < ApplicationRecord

  validates :asset_id, :portfolio_id, :price, :size,
            :side, presence: true

  belongs_to :portfolio,
    class_name: 'Portfolio',
    primary_key: :id,
    foreign_key: :portfolio_id

  belongs_to :asset,
    class_name: 'Asset',
    primary_key: :id,
    foreign_key: :asset_id

  has_one :user,
    class_name: 'User',
    through: :portfolio,
    source: :user


  def validate(portfolio_id)
    if self.side == "buy"
      ensure_buying_power(portfolio_id)
    else self.side == "sell"
      ensure_portfolio_holdings(portfolio_id)
    end
  end

  def ensure_portfolio_holdings
  end

  def ensure_buying_power(portfolio_id)
    if (self.price * self.size) < User.find(portfolio_id).buying_power
      return true
    else
      errors[:size].push("Insufficient buying power")
      return false
    end
  end

end
