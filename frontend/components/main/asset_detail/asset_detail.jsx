import React from 'react';
import { Link } from 'react-router-dom';
import TradeSidebar from './trade_sidebar/trade_sidebar';
import AssetSummary from './asset_research/asset_summary';
import AssetAbout from './asset_research/asset_about';
import AssetChart from './asset_research/asset_chart';
import AssetWatch from './asset_watch';
import { ScaleLoader } from 'halogenium';

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

  componentWillReceiveProps(nextProps) {
    if ( nextProps.asset && (nextProps.asset.id !== parseInt(this.props.match.params.assetId))) {
      this.setState({ loading: true },
        () => this.props.fetchAsset(this.props.match.params.assetId)
        .then(() => this.props.fetchLatestPrice(this.props.asset.fake_symbol))
        .then(() => this.setState({loading: false})));
    }
  }

  render() {

    return(
      this.state.loading ?
      <div>
        <ScaleLoader
          className="loading-spinner"
          color="#21ce99"
          size="16px"
          margin="4px"/>
      </div>
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
