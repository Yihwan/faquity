import { connect } from 'react-redux';
import { fetchAssets } from '../../../actions/asset_actions';
import AssetSearch from './asset_search';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchAssets: () => (dispatch(fetchAssets()))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetSearch);
