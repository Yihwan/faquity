import React from 'react';
import { connect } from 'react-redux';
import AssetDetail from './asset_detail';
import { fetchAsset, watchAsset, unwatchAsset, fetchAssets } from '../../../actions/asset_actions';
import { fetchPrices } from '../../../actions/iex_actions';
import { fetchPortfolio } from '../../../actions/portfolio_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  asset: state.entities.assets[ownProps.match.params.assetId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchAssets: () => dispatch(fetchAssets()),
  fetchAsset: (id) => dispatch(fetchAsset(id)),
  watchAsset: (id) => dispatch(watchAsset(id)),
  unwatchAsset: (id) => dispatch(unwatchAsset(id))

});

// completeFill: (fill)
// fill { type: buy, size: 10, } // asset detail

export default connect(mapStateToProps, mapDispatchToProps)(AssetDetail);
