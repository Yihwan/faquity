import React from 'react';

export default ({ asset, watchAsset, unwatchAsset, watchlist }) => {

  let watchText = `Add to Watchlist`;
  let watchAction = () => watchAsset(asset.id);

  if (watchlist.includes(asset.id)) {
    watchText = `Remove from Watchlist`;
    watchAction = () => unwatchAsset(asset.id);
  }

  return(
    <button className="asset-watch-btn" onClick={watchAction}>
      {watchText}
    </button>
  );
};
