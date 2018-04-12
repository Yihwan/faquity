import { combineReducers } from 'redux';
import errorsReducer from './errors_reducers/errors_reducer';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  session: sessionReducer,
  entities: entitiesReducer,
  ui: uiReducer
});

export default rootReducer;
