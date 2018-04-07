import { combineReducers } from 'redux';

import assetsReducer from './assets_reducer';


const entitiesReducer = combineReducers({
  assets: assetsReducer
});

export default entitiesReducer; 
