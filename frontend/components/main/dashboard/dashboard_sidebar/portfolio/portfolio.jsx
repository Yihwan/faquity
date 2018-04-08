import React from 'react';
// assets.map((asset, idx) => {
//   return(
//     <tr key={idx} className="main-table-row">
//       <td className="asset-name">symbol</td>
//       <td className="asset-symbol">num_shares</td>
//       <td className="asset-price">latest_price</td>
//     </tr>
//   );
// })

const renderTableRows = (holdings, assets) =>  (
  Object.keys(holdings).map((assetId, idx) => {
    let numShares = holdings[assetId];

    return(
      <tr key={idx} className="main-table-row">
        <td className="asset-name">{assetId}</td>
        <td className="asset-symbol">{numShares}</td>
        <td className="asset-price">latest_price</td>
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
