import React from 'react';
import { currencyFormatter } from '../../../../../utils/helpers';

const renderTableRows = (holdings, assets) =>  (
  Object.keys(holdings).map((assetId, idx) => {
    let numShares = holdings[assetId];

    return(
      <tr key={idx} className="main-table-row">
        <td className="portfolio-symbol">{assets[assetId].symbol}</td>
        <td className="portfolio-numshares">{numShares} shares</td>
        <td className="asset-price">
          {currencyFormatter.format(assets[assetId].latest_price)}
        </td>
      </tr>
    );
  })
);

// with help from menubar.io, creating react tables
const renderAssetIndex = (holdings, assets) => (
  <table className="sidebar-table">
    <tbody>
      {renderTableRows(holdings, assets)}
    </tbody>
  </table>
);

const PortfolioSidebar = ({ holdings, assets }) => {

  return(
    <aside className="sidebar-element">
      <h3 className="sidebar-header-one">Stocks</h3>
      <div className="sidebar-data">
        {renderAssetIndex(holdings, assets)}
      </div>
    </aside>
  );
};


export default PortfolioSidebar;
