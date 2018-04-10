import { RECEIVE_PRICES } from '../actions/iex_actions';
import { combineReducers } from 'redux';

const priceReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PRICES:
      return action.prices;
    default:
      return state;
  }
};

const iexReducer = combineReducers({
  prices: priceReducer
});

export default iexReducer;
