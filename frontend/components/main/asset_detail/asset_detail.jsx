import React from 'react';
import { Link } from 'react-router-dom';
import TradeSidebar from './trade_sidebar/trade_sidebar';
import AssetSummary from './asset_research/asset_summary';
import AssetAbout from './asset_research/asset_about';

class AssetDetail extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchAsset(this.props.match.params.assetId);
    this.props.fetchPortfolio(this.props.currentUser.id);
  }

  render() {
    if (this.props.asset === undefined) {
      return "Loading...";
    }
    // render trade form container pass in fill info as props,
    // probably a class because it needs a state
    return(
        <section className="main">
          <div className="left">
            <AssetSummary asset={this.props.asset}/>
            <AssetAbout asset={this.props.asset}/>
          </div>
          <div className="right">
            <TradeSidebar
              asset={this.props.asset}
              portfolio={this.props.portfolio}
            />
          </div>
        </section>

    );
  }
}

export default AssetDetail;
