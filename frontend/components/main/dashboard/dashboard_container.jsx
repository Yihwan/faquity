import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../../actions/session_actions';
import { fetchAssets } from '../../../actions/asset_actions';
import { fetchPortfolio } from '../../../actions/portfolio_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  portfolio: Object.values(state.entities.portfolio),
  assets: Object.values(state.entities.assets)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchAssets: () => dispatch(fetchAssets()),
  fetchPortfolio: (id) => dispatch(fetchPortfolio(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
