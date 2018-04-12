import signalsReducer from './signals_reducer';
import { combineReducers } from 'redux';

const uiReducer = combineReducers({
  signal: signalsReducer
});

export default uiReducer;
