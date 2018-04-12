import { connect } from 'react-redux';
import { fetchAssets, fetchAsset } from '../../../actions/asset_actions';
import AssetSearch from './asset_search';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchAssets: () => (dispatch(fetchAssets())),
  fetchAsset: (id) => (dispatch(fetchAsset(id)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssetSearch);
