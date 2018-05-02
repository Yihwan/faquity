# Faquity
**[Live Demo](http://faquity.com)** |
[Wiki](https://github.com/Yihwan/faquity/wiki)

Faquity is a browser-based trading platform where users can practice trading with realtime market data without incurring any actual risk. Faquity's design identity was cloned from Robinhood's beta web application.

## Features
* **User authentication:** end-to-end using BCrypt.
* **Asset search:** by ticker symbol or asset name.
* **Watchlist:** "follow" assets without committing to a buy.
* **Dashboard:** View portfolio value over time, current cash allocation, and holdings diversity.
* **Asset Research:** View key financial metrics about an asset and its price over time.
* **Portfolio:** Buy and sell assets at the latest market price.

## Technologies
* **Backend:** Rails/ActiveRecord/PostgreSQL
* **Frontend:** React/Redux
* [Recharts](https://github.com/recharts/recharts)
* [IEX API](https://iextrading.com/developer/docs/)
* SAAS

## Database Schema

![Faquity db schema](https://i.imgur.com/hd7EIOm.png)

## Demos
### Dashboard Metrics
After logging in, users can view key portfolio performance metrics on their personal dashboard. The `PortfolioSnapshot` model generates historical portfolio performance data, while the Cash Allocation and Holdings Diversity charts are generated from `Portfolio` model associations.

Users can also view an index of all assets on the platform as well as their current holdings and watched assets in a sticky sidebar.

![Faquity-dashboard](app/assets/images/Faquity_asset_detail-hd.gif)

### Asset Research & Trade
When navigating to an individual asset page, users can conduct basic research and make trades.

* Asset price history is charted on 1D, 1M, 3M, 1Y, 2Y, and 5Y timeframes.
* Basic data on corporate structure, financials, and trade activity is available through a "Show More" button in the `AssetAbout` component.
* Both buys and sells are filled through the `TradeSidebar` component.
* The `AssetDetail` component's primary colors are set by the global state's `ui.signal` slice, which is in turn determined by the price movement (`bullish` or `bearish`) in the currently displayed `AssetChart`.

![Faquity-dashboard](app/assets/images/Faquity_dashboard-hd.gif)

## Code Samples
### **`fill`**

The `fill` model generates most of the key data for Faquity. For portfolios, the `fill` table calculates the value and distribution of holdings, as well as any other desired insights from the available data fields.

This table could also be used to generate information on the `asset` side (e.g., trade volume, order book distribution) or for the entire market (e.g., data to trigger circuit breakers).

As the data in the `fill` table provides the foundation for all market activities, Faquity validates all incoming data on the database and model level. The platform also creates informative errors when a user attempts to create a fill with invalid inputs.

```RUBY
# /app/models/fill.rb

class Fill < ApplicationRecord

  validates :asset_id, :portfolio_id, :price, :size,
            :side, presence: true

  belongs_to :portfolio,
  # [...]

  belongs_to :asset,
  # [...]

  has_one :user,
  # [...]

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

  def ensure_buying_power(portfolio_id)
    if (self.price * self.size) <= User.find(portfolio_id).buying_power
      true
    else
      errors[:size].push("Insufficient buying power")
      false
    end
  end


  def ensure_portfolio_holdings(portfolio_id)
    portfolio = Portfolio.find(portfolio_id)

    if self.size <= portfolio.holdings[self.asset_id]
        true
    else
      errors[:size].push("Insufficient shares")
      false
    end
  end
end
```

### **`portfolio`**
To ensure database portability and avoid persisting unnecessary information, the `portfolio` model generates key information about a user's portfolio through various associations.

```RUBY
# /app/models/portfolio.rb

class Portfolio < ApplicationRecord

  after_create :take_first_snapshot

  validates :user_id, presence: true

  belongs_to :user,
  # [...]

  has_many :fills,
  # [...]

  has_many :assets,
  # [...]

  has_many :snapshots,
    class_name: 'PortfolioSnapshot',
  # [...]

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

    # remove from holdings if all assets are sold
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
    PortfolioSnapshot.create!(
      portfolio_id: self.id,
      date: Time.now.strftime("%b %d, %Y"),
      value: self.user.buying_power,
    )
  end

end
```

## Future Development

### Portfolio Snapshot Cron Job
In order to chart portfolio performance over time, Faquity will run a cron job that creates a new `PortfolioSnapshot` for each user's portfolio.

### Collections
Assets will be grouped by tag (e.g., `Food` or `Finance`) to create a sortable/filterable index.

### "More Like This"
Asset Detail containers could display a carousel of similar Assets Properties used to determine similarity could include `tags`, `market_cap`, or assets added by similar users.

### Notifications
A dropdown menu in the primary `NavBar` could display notifications of recent actions or key insights about existing holdings.

### Detailed Asset Research
The [IEX API](https://iextrading.com/developer/docs/) includes detailed asset information on earnings, dividends, and financials. Faquity could leverage this data to display more detailed asset research information in the Asset About container.

### Additional Assets
Faquity will continue to list new assets from IPOs or exchange transfers. Please contact the administrator for more information on how to be listed on Faquity.
