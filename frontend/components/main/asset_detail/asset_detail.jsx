import React from 'react';
import { Link } from 'react-router-dom';
import TradeSidebar from './trade_sidebar/trade_sidebar';
import AssetSummary from './asset_research/asset_summary';
import AssetAbout from './asset_research/asset_about';
import AssetWatch from './asset_watch';

class AssetDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchAssets();
    this.props.fetchAsset(this.props.match.params.assetId);
    this.props.fetchPortfolio(this.props.currentUser.id);
  }

  render() {
    // render trade form container pass in fill info as props,
    // probably a class because it needs a state

    return(
      this.props.asset === undefined ?
        <div>Loading...</div>
      :
        <section className="main">
          <div className="left">
            <AssetSummary asset={this.props.asset}/>
            <AssetAbout
              asset={this.props.asset}
              fetchAsset={this.props.fetchAsset}
            />
          </div>
          <div className="right">
            <TradeSidebar
              asset={this.props.asset}
              portfolio={this.props.portfolio}
            />

          <div className="asset-watch">
            <AssetWatch
              watchAsset = {this.props.watchAsset}
              unwatchAsset = {this.props.unwatchAsset}
              asset = {this.props.asset}
              watchlist = {this.props.currentUser.watchlist}
            />
          </div>
          </div>
        </section>

    );
  }
}

export default AssetDetail;
