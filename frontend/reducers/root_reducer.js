import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import assetsReducer from './assets_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  session: sessionReducer,
  assets: assetsReducer
});

export default rootReducer;
