import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TradeForm from './trade_form2';
import { createFill, receiveErrors } from '../../../../actions/fill_actions';
import { fetchLatestPrice } from '../../../../actions/iex_actions';
import { currencyFormatter } from '../../../../utils/helpers';

const mapStateToProps = (state, ownProps) => ({
  fill: {
    asset_id: ownProps.asset.id,
    portfolio_id: state.session.currentUser.id,
    price: ownProps.latestPrice,
    size: 0,
    side: 'buy'
  },
  errors: state.errors.fill,
  user: state.session.currentUser,
  assets: state.entities.assets,
  message: `${currencyFormatter.format(state.session.currentUser.buying_power || 0)} Buying Power Available`
});

const mapDispatchToProps = (dispatch) => ({
  createFill: (fill) => dispatch(createFill(fill)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeForm);
