import React from 'react';
import { Link } from 'react-router-dom';
import TradeSidebar from './trade_sidebar/trade_sidebar';
import AssetSummary from './asset_research/asset_summary';
import AssetAbout from './asset_research/asset_about2';
import AssetChart from './asset_research/asset_chart';
import AssetWatch from './asset_watch';

class AssetDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
     };
  }

  smokeAndMirrors() {
    let newAsset = Object.assign({}, this.props.asset);
    newAsset.latest_price = this.props.latestPrice;
    this.props.updateAssetPrice(newAsset);
  }

  componentDidMount() {
    this.props.fetchAsset(this.props.match.params.assetId)
      .then(() => this.props.fetchLatestPrice(this.props.asset.fake_symbol))
      .then(() => this.props.fetchStats(this.props.asset.fake_symbol))
      .then(() => this.smokeAndMirrors())
      .then(() => this.setState({loading: false}));
  }

  componentDidUpdate(prevProps) {

    if ( prevProps.asset && (prevProps.asset.id !== parseInt(this.props.match.params.assetId))) {
      this.setState({ loading: true });
      this.props.fetchAsset(this.props.match.params.assetId)
        .then(() => this.setState({loading: false}));

    }
  }

  render() {

    return(
      this.state.loading ?
        <div>Loading...</div>
      :
        <section className="main">
          <div className="left">
            <AssetSummary
              asset={this.props.asset}
              signal={this.props.signal}
            />
            <AssetChart
              asset={this.props.asset}
              latestPrice={this.props.latestPrice}
              stats={this.props.stats}
            />
            <AssetAbout
              asset={this.props.asset}
              stats={this.props.stats}
              signal={this.props.signal}
            />
          </div>
          <div className="right">
            <TradeSidebar
              asset={this.props.asset}
              latestPrice={this.props.latestPrice}
              signal={this.props.signal}
            />

          <div className="asset-watch">
            <AssetWatch
              watchAsset = {this.props.watchAsset}
              unwatchAsset = {this.props.unwatchAsset}
              asset = {this.props.asset}
              watchlist = {this.props.currentUser.watchlist}
              signal = {this.props.signal}
            />
          </div>
          </div>
        </section>

    );
  }
}

export default AssetDetail;
