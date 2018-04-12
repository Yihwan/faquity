import React from 'react';
// inspired by bluebird
export default ({ asset, watchAsset, unwatchAsset, watchlist, signal }) => {

  let watchText = `Add to Watchlist`;
  let watchAction = () => watchAsset(asset.id);

  let className = "asset-watch-btn";
  if (signal === "bullish") {
    className += " bullish";
  } else {
    className += " bearish";
  }

  if (asset.watched_by_current_user) {
    watchText = `Remove from Watchlist`;
    watchAction = () => unwatchAsset(asset.id);
  }

  return(
    <div className={className} onClick={watchAction}>
      {watchText}
    </div>
  );
};
