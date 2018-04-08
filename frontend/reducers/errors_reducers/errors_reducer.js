import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';
import fillErrorsReducer from './fill_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  fill: fillErrorsReducer
});

export default errorsReducer;
