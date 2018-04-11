import React from 'react';
import { connect } from 'react-redux';
import AssetDetail from './asset_detail';
import { fetchAsset, watchAsset, unwatchAsset, fetchAssets, updateAssetPrice } from '../../../actions/asset_actions';
import { fetchPrices, fetchStats, fetchLatestPrice } from '../../../actions/iex_actions';
import { fetchPortfolio } from '../../../actions/portfolio_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  asset: state.entities.assets[ownProps.match.params.assetId],
  stats: state.entities.iex.stats,
  latestPrice: state.entities.iex.latestPrice
});

const mapDispatchToProps = (dispatch) => ({
  fetchAssets: () => dispatch(fetchAssets()),
  fetchAsset: (id) => dispatch(fetchAsset(id)),
  watchAsset: (id) => dispatch(watchAsset(id)),
  unwatchAsset: (id) => dispatch(unwatchAsset(id)),
  fetchLatestPrice: (symbol) => dispatch(fetchLatestPrice(symbol)),
  fetchStats: (symbol) => dispatch(fetchStats(symbol)),
  updateAssetPrice: (asset) => dispatch(updateAssetPrice(asset))

});

// completeFill: (fill)
// fill { type: buy, size: 10, } // asset detail

export default connect(mapStateToProps, mapDispatchToProps)(AssetDetail);
