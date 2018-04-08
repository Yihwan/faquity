import React from 'react';
import { connect } from 'react-redux';
import PortfolioSidebar from './portfolio';
import { fetchAssets } from '../../../../../actions/asset_actions';
import { fetchPortfolio } from '../../../../../actions/portfolio_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  portfolio: state.entities.portfolio,
  assets: Object.values(state.entities.assets)
});

const mapDispatchToProps = (dispatch) => ({
  fetchAssets: () => dispatch(fetchAssets()),
  fetchPortfolio: (id) => dispatch(fetchPortfolio(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioSidebar);
