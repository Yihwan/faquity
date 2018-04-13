# Cool-name
[Live Demo](https://yihwan-marketsim.herokuapp.com/#/)

## Features
* User authentication: end-to-end using BCrypt.
* Asset search: by ticker symbol or asset name.
* Watchlist: "follow" assets without committing to a buy.
* Personal dashboard: View portfolio value over time, current cash allocation, and holdings diversity.
* Asset Research: View key financial metrics about an asset and its price over time.
* Portfolio: Buy and sell assets at the latest market price.

## Technologies
* Backend: Rails/ActiveRecord
* Frontend: React/Redux
* [Recharts](https://github.com/recharts/recharts)
* [IEX API](https://iextrading.com/developer/docs/)
* SAAS

## Data Schema

![cool-name db schema](https://i.imgur.com/hd7EIOm.png)

## Demos
### Dashboard Metrics
![cool-name-dashboard](https://media.giphy.com/media/22PyXTCGeRrN3Awvwd/giphy.gif)

### Asset Research & Trade
![cool-name-dashboard](https://media.giphy.com/media/fVbVppcJusHvqHFWWP/giphy.gif)

## Code Sample

```RUBY
# /app/models/fill.rb

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
    if self.size <= 0
      errors[:size].push("Trade size cannot be 0.")
      return false
    end

    if self.side == "buy"
      ensure_buying_power(portfolio_id)
    else 
      ensure_portfolio_holdings(portfolio_id)
    end
  end

  def ensure_portfolio_holdings(portfolio_id)
    portfolio = Portfolio.find(portfolio_id)
    if self.size <= portfolio.holdings[self.asset_id]
      return true
    else
      errors[:size].push("Insufficient shares")
      return
      false
    end
  end

  def ensure_buying_power(portfolio_id)
    if (self.price * self.size) <= User.find(portfolio_id).buying_power
      return true
    else
      errors[:size].push("Insufficient buying power")
      return false
    end
  end

end
```

## Future Development
