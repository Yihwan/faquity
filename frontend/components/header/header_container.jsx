import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchAssets } from '../../actions/asset_actions';
import Header from './header';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  assets: Object.keys(state.entities.assets).map((id) => state.entities.assets[id])
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchAssets: () => dispatch(fetchAssets())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
