import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAssets();
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
        <ul>
          {this.renderAssetIndex()}
        </ul>
      </div>
    );
  }
}

export default Dashboard;
