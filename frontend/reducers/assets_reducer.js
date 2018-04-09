import { RECEIVE_ASSET, RECEIVE_ASSETS } from '../actions/asset_actions';
import merge from 'lodash/merge';

const assetsReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ASSET:
      const newAsset = { [action.asset.id]: action.asset };
      const newState = merge({}, state, newAsset);

      return newState;
    case RECEIVE_ASSETS:
      return action.assets;
    default:
      return state;
  }
};

export default assetsReducer;
