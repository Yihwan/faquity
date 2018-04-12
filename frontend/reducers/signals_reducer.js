import { SET_MARKET_SIGNAL } from '../actions/ui_actions';
import merge from 'lodash/merge';

const signalsReducer = (state="bullish", action) => {
  Object.freeze(state);

  switch (action.type) {
    case SET_MARKET_SIGNAL:
      return action.signal;
    default:
      return state;
  }
};

export default signalsReducer;
