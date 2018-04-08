import { combineReducers } from 'redux';

import assetsReducer from './assets_reducer';
import fillsReducer from './fills_reducer';
import portfoliosReducer from './portfolios_reducer';


const entitiesReducer = combineReducers({
  assets: assetsReducer,
  fills: fillsReducer,
  portfolio: portfoliosReducer
});

export default entitiesReducer;
