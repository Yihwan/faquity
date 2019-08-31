const baseUrl = `https://cloud.iexapis.com`;

export const fetchPrices = (time, symbol) => (
  $.ajax({
    url: `${baseUrl}/stock/${symbol}/chart/${time}?filter=date,label,high,marketAverage`,
    method: 'GET'
  })
);

export const fetchStats = (symbol) => (
  $.ajax({
    url: `${baseUrl}/stock/${symbol}/stats`,
    method: 'GET'
  })
);

export const fetchLatestPrice = (symbol) => (
  $.ajax({
    url: `${baseUrl}/stock/${symbol}/price`,
    method: 'GET'
  })
);
