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

const renderTableRows = (holdings, fetchAsset) =>  {

  // Object.keys(holdings).forEach((assetId, idx) => {
  //   let asset = fetchAsset(assetId);
  //   let numShares = holdings[assetId];
  //
  //   return(
  //     <tr key={idx} className="main-table-row">
  //       <td className="asset-name">{asset.name}</td>
  //       <td className="asset-symbol">hello</td>
  //       <td className="asset-price">latest_price</td>
  //     </tr>
  //   );
  // });

};


// with help from menubar.io, creating react tables
const renderAssetIndex = (holdings, fetchAsset) => (
  <table className="sidebar-table">
    <tbody>
      {renderTableRows(holdings, fetchAsset)}
    </tbody>
  </table>
);

const PortfolioSidebar = ({ portfolio, fetchAsset }) => {
  console.log(fetchAsset);
  return(
    <aside className="sidebar-element">
      <h3 className="sidebar-header-one">Stocks</h3>
      <div className="sidebar-data">
        {renderAssetIndex(portfolio.holdings, fetchAsset)}
      </div>
    </aside>
  );
};


export default PortfolioSidebar;
