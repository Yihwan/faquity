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
//
export const watchAsset = (id) => (
  $.ajax({
    url: `/api/watches`,
    method: 'POST',
    data: { id }
  })
);

export const unwatchAsset = (id) => (
  $.ajax({
    url: `/api/watches`,
    method: 'DELETE',
    data: { id }
  })
);

export const updateAssetPrice = (asset) => (
  $.ajax({
    url: `/api/assets/${asset.id}`,
    method: 'PATCH',
    data: { asset }
  })
);
