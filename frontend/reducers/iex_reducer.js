import { RECEIVE_PRICES, RECEIVE_LATEST_PRICE, RECEIVE_STATS } from '../actions/iex_actions';
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

const latestPriceReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LATEST_PRICE:
      return action.price;
    default:
      return state;
  }
};

const statsReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STATS:
      return action.stats;
    default:
      return state;
  }
};

const iexReducer = combineReducers({
  prices: priceReducer,
  latestPrice: latestPriceReducer,
  stats: statsReducer
});

export default iexReducer;
