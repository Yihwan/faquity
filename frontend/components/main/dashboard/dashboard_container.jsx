import React from 'react';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../../actions/session_actions';
import { fetchAssets, fetchAsset } from '../../../actions/asset_actions';
import { fetchPortfolio, fetchPortfolioSnapshots } from '../../../actions/portfolio_actions';
import { fetchPrices, fetchStats, fetchLatestPrice } from '../../../actions/iex_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  portfolio: state.entities.portfolio,
  assets: Object.keys(state.entities.assets).map((id) => state.entities.assets[id]),
  snapshots: Object.values(state.entities.portfolio.snapshots)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  fetchAssets: () => dispatch(fetchAssets()),
  fetchAsset: (id) => dispatch(fetchAsset(id)),
  fetchPortfolio: (id) => dispatch(fetchPortfolio(id)),
  fetchLatestPrice: (symbol) => dispatch(fetchLatestPrice(symbol)),
  fetchStats: (symbol) => dispatch(fetchStats(symbol)),
  fetchPortfolioSnapshots: (id) => dispatch(fetchPortfolioSnapshots(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
