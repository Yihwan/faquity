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

  // from https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript
  

  renderSummaryStats() {
    return(
      <div>
        <h2>Portfolio Cash Value:</h2>
        <h3>{this.props.currentUser.buying_power}</h3>
      </div>
    );
  }

  renderAssetIndex() {
    let assetIndex = this.props.assets.map((asset) => (
      <li key={asset.id}>
        {asset.name} &nbsp;
        {asset.symbol} &nbsp;
        {asset.latest_price} &nbsp;
        {asset.tags} &nbsp;
      </li>
    ));

    return assetIndex;
  }

  render() {


    return(
      <div>
        {this.renderGreeting()}
        {this.renderSummaryStats()}
        <ul>
          {this.renderAssetIndex()}
        </ul>
      </div>
    );
  }
}

export default Dashboard;
