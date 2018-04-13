# Cool-Name
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
After logging in, users can view key portfolio performance metrics on their personal dashboard.

![cool-name-dashboard](app/assets/images/cool-name_asset_detail-hd.gif)

### Asset Research & Trade
![cool-name-dashboard](app/assets/images/cool-name_asset_detail-hd.gif)

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

### Portfolio Snapshot Cron Job
In order to chart portfolio performance over time, Cool-Name will run a cron job that creates a new `PortfolioSnapshot` for each user's portfolio.

### Collections
Assets will be grouped by tag (e.g., `Food` or `Finance`) to create a sortable/filterable index.

### "More Like This"
Asset Detail containers could display a carousel of similar Assets Properties used to determine similarity could include `tags`, `market_cap`, or assets added by similar users.

### Detailed Asset Research
The [IEX API](https://iextrading.com/developer/docs/) includes detailed asset information on earnings, dividends, and financials. Cool-Name could leverage this data to display more detailed asset research information in the Asset About container.

### Additional Assets
Cool-Name will continue to list new assets from IPOs or exchange transfers. Please contact the administrator for more information on how to be listed on Cool-Name.
