export const fetchPrices = (time, symbol) => (
  $.ajax({
    url: `https://api.iextrading.com/1.0/stock/${symbol}/chart/${time}?filter=date,label,high`,
    method: 'GET'
  })
);

export const fetchStats = (symbol) => (
  $.ajax({
    url: `https://api.iextrading.com/1.0/stock/aapl/stats?filter=marketcap,%20week52high,%20week52low,%20dividendYield,%20year5ChangePercent,%20year2ChangePercent,%20year1ChangePercent,%20month3ChangePercent,%20month1changePercent,%20day5ChangePercent,%20peRatioLow`,
    method: 'GET'
  })
);

export const fetchOhlc = (symbol) => (
  $.ajax({
    url: `https://api.iextrading.com/1.0/stock/${symbol}/ohlc`,
    method: 'GET'
  })
);

export const fetchLatestPrice = (symbol) => (
  $.ajax({
    url: `https://api.iextrading.com/1.0/stock/${symbol}/price`,
    method: 'GET'
  })
);
