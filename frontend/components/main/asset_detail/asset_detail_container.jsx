import React from 'react';
import { connect } from 'react-redux';
import AssetDetail from './asset_detail';
import { fetchAsset } from '../../../actions/asset_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  asset: state.assets[ownProps.match.params.assetId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchAsset: (id) => dispatch(fetchAsset(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AssetDetail);
