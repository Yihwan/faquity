import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAssets();
  }

  renderGreeting() {
    return(
      <h1>Hello, {this.props.currentUser.first_name}</h1>
    );
  }

  // from http://jsfiddle.net/hAfMM/
  formatCurrency(n, currency) {
    return currency + " " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }

  renderSummaryStats() {
    return(
      <div>
        <h2>Portfolio Cash Value:</h2>
      </div>
    );
  }

  renderAssetIndex() {
    let assetIndex = this.props.assets.map((asset) => (
      <li className="trElement" key={asset.id}>
        <div className="tdElement">{asset.name}</div>
        <div className="tdElement">{asset.symbol}</div>
        <div className="tdElement">{asset.latest_price}</div>
        <div className="tdElement">{asset.tags}</div>
      </li>
    ));

    assetIndex.unshift(
      <li key="0"className="trElement">
        <div className="thElement">Name</div>
        <div className="thElement">Symbol</div>
        <div className="thElement">Price</div>
        <div className="thElement">Tags</div>
      </li>
    );

    return assetIndex;
  }

  render() {


    return(
      <div>
        {this.renderGreeting()}
        {this.renderSummaryStats()}
        <ul className="tableElement">
          {this.renderAssetIndex()}
        </ul>
      </div>
    );
  }
}

export default Dashboard;
