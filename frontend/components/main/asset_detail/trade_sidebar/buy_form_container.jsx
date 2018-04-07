import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TradeForm from './trade_form';
import { createFill } from '../../../../actions/fill_actions';
import { currencyFormatter } from '../../../../utils/helpers';

const mapStateToProps = (state, ownProps) => ({
  fill: {
    asset_id: ownProps.asset.id,
    portfolio_id: state.session.currentUser.id,
    price: ownProps.asset.latest_price,
    size: 0,
    side: 'buy'
  },
  errors: state.errors,
  message: `${currencyFormatter(state.session.currentUser.buying_power)} Buying Power Available`
});

const mapDispatchToProps = (dispatch) => ({
  createFill: (fill) => dispatch(createFill(fill))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeForm);
