import React from 'react';
import { currencyFormatter } from '../../../../../utils/helpers';
import { Link, withRouter } from 'react-router-dom';

const handleClick = (id, history) => {
  return (e) => {
    history.push(`/assets/${id}`);
  };
};

const renderTableRows = (holdings, assets, history) =>  (
  Object.keys(holdings).map((assetId, idx) => {
    let numShares = holdings[assetId];

    if (numShares > 0) {
      return(
        <tr key={idx} className="main-table-row"
          onClick={handleClick(assetId, history)}>
          <td className="portfolio-symbol">{assets[assetId - 1].symbol}</td>
          <td className="portfolio-numshares">{numShares} shares</td>
          <td className="asset-price">
            {currencyFormatter.format(assets[assetId - 1].latest_price)}
          </td>
        </tr>
      );
    }
  })
);

// with help from menubar.io, creating react tables
const renderAssetIndex = (holdings, assets, history) => (
  <table className="sidebar-table">
    <tbody>
      {renderTableRows(holdings, assets, history)}
    </tbody>
  </table>
);

const PortfolioSidebar = ({ holdings, assets, history }) => {

  return(
    <aside className="sidebar-element">
      <h3 className="sidebar-header-one">Stocks</h3>
      <div className="sidebar-data">
        {renderAssetIndex(holdings, assets, history)}
      </div>
    </aside>
  );
};


export default withRouter(PortfolioSidebar);
