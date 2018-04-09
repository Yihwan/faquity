import React from 'react';
import { currencyFormatter } from '../../../../../utils/helpers';
import { Link, withRouter } from 'react-router-dom';

const handleClick = (id, history) => {
  return (e) => {
    history.push(`/assets/${id}`);
  };
};

const renderTableRows = (watchlist, assets, history) => (
  watchlist.map((assetId, idx) => {
    return(

        <tr key={idx} className="main-table-row"
          onClick={handleClick(assetId, history)}>
          <td className="portfolio-symbol">{assets[assetId - 1].symbol}</td>
          <td className="portfolio-numshares">Watching</td>
          <td className="asset-price">
            {currencyFormatter.format(assets[assetId - 1].latest_price)}
          </td>
        </tr>
    );
  })
);

// with help from menubar.io, creating react tables
const renderAssetIndex = (watchlist, assets, history) => (
  <table className="sidebar-table">

    <tbody>
      {renderTableRows(watchlist, assets, history)}
    </tbody>
  </table>
);

const WatchlistSidebar = ({ watchlist, assets, history }) => (
  <aside className="sidebar-element">
    <h3 className="sidebar-header-two">Watchlist</h3>
    <div className="sidebar-data">
      {renderAssetIndex(watchlist, assets, history)}
    </div>
  </aside>
);

export default withRouter(WatchlistSidebar);
