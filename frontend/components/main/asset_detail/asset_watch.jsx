import React from 'react';
// inspired by bluebird
export default ({ asset, watchAsset, unwatchAsset, watchlist }) => {

  let watchText = `Add to Watchlist`;
  let watchAction = () => watchAsset(asset.id);

  if (asset.watched_by_current_user) {
    watchText = `Remove from Watchlist`;
    watchAction = () => unwatchAsset(asset.id);
  }

  return(
    <div className="asset-watch-btn" onClick={watchAction}>
      {watchText}
    </div>
  );
};
