import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TradeForm from './trade_form';

const mapStateToProps = (state, ownProps) => ({
  tradeSize: 0,
  formType: 'sell'
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TradeForm);
