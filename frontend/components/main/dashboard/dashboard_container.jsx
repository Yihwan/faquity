import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../../actions/session_actions';
import { fetchAssets } from '../../../actions/asset_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  assets: Object.values(state.assets)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchAssets: () => dispatch(fetchAssets())

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
