export const fetchPrices = (time, symbol) => (
  $.ajax({
    url: `https://api.iextrading.com/1.0/stock/${symbol}/chart/${time}?filter=date,label,high`,
    method: 'GET'
  })
);

export const fetchStats = (symbol) => (
  $.ajax({
    url: `https://api.iextrading.com/1.0/stock/${symbol}/stats`,
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
