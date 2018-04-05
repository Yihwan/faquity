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

  renderTags() {
    return("tag");
  }

  // with help from menubar.io, creating react tables
  renderAssetIndex(assets) {
    return(
      <table>

        <thead>
          <tr key="0">
            <td>Name</td>
            <td>Symbol</td>
            <td>Price</td> 
            <td>Tags</td>
          </tr>
        </thead>
        <tbody>
        {assets.map(asset => {
          return(
            <tr key={asset.id}>
              <td key={asset.name}>{asset.name}</td>
              <td key={asset.price}>{asset.symbol}</td>
              <td key={asset.price}>{asset.latest_price}</td>
              <td key={asset.price}>{asset.tags}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    );
  }

  render() {


    return(
      <div>
        {this.renderGreeting()}
        {this.renderSummaryStats()}
        {this.renderAssetIndex(this.props.assets)}
      </div>
    );
  }
}

export default Dashboard;
