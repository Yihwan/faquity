import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TradeForm from './trade_form';
import { createFill, receiveErrors } from '../../../../actions/fill_actions';
import { fetchLatestPrice } from '../../../../actions/iex_actions';

const mapStateToProps = (state, ownProps) => ({
  fill: {
    asset_id: ownProps.asset.id,
    portfolio_id: state.session.currentUser.id,
    price: -1,
    size: 0,
    side: 'sell'
  },
  latestPrice: state.entities.iex.latestPrice,
  errors: state.errors.fill,
  message: `${state.session.currentUser.holdings[ownProps.asset.id]||0} Shares Available`
});

const mapDispatchToProps = (dispatch) => ({
  createFill: (fill) => dispatch(createFill(fill)),
  clearErrors: () => dispatch(receiveErrors([])),
  fetchLatestPrice: (symbol) => dispatch(fetchLatestPrice(symbol))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeForm);
