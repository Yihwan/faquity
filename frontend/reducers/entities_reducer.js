import { combineReducers } from 'redux';

import assetsReducer from './assets_reducer';
import fillsReducer from './fills_reducer';


const entitiesReducer = combineReducers({
  assets: assetsReducer,
  fills: fillsReducer
});

export default entitiesReducer;
