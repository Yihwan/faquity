export const fetchPortfolio = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/portfolios/${id}`
  })
);
