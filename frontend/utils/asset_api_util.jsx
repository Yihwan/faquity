export const fetchAssets = () => (
  $.ajax({
    url: '/api/assets',
    method: 'GET'
  })
);

export const fetchAsset = (id) => (
  $.ajax({
    url: `/api/assets/${id}`,
    method: 'GET'
  })
);
