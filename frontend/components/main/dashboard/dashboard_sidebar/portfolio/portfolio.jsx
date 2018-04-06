import React from 'react';

const renderTableRows = (assets) => (
  assets.map(asset => {
    return(
      <tr className="main-table-row">
        <td className="asset-name">name</td>
        <td className="asset-symbol">symbol</td>
        <td className="asset-price">latest_price</td>
      </tr>
    );
  })
);

// with help from menubar.io, creating react tables
const renderAssetIndex = (assets) => (
  <table className="sidebar-table">
    <thead>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </thead>

    <tbody>
      {renderTableRows(assets)}
    </tbody>
  </table>
);

const PortfolioSidebar = () => (

  <aside className="sidebar-element">
    <h3 className="sidebar-header-one">Stocks</h3>
    <div className="sidebar-data">
      {renderAssetIndex([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1])}
    </div>
  </aside>
);

export default PortfolioSidebar;
