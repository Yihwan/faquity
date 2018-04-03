import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  session: sessionErrorsReducer,
  errors: errorsReducer
});

export default rootReducer;
