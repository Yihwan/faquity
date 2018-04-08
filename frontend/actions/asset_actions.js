import * as AssetAPIUtil from '../utils/asset_api_util';

export const RECEIVE_ASSETS = "RECEIVE_ASSETS";
export const RECEIVE_ASSET = "RECEIVE_ASSET";

export const receiveAssets = (assets) =>({
  type: RECEIVE_ASSETS,
  assets
});

export const receiveAsset = (asset) =>({
  type: RECEIVE_ASSET,
  asset
});

export const fetchAssets = () => (dispatch) => (
  AssetAPIUtil.fetchAssets()
    .then((assets) => dispatch(receiveAssets(assets)))
);

export const fetchAsset = (id) => (dispatch) => (
  AssetAPIUtil.fetchAsset(id)
    .then((asset) => dispatch(receiveAsset(asset)))
);