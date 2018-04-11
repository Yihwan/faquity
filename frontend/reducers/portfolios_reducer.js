import { RECEIVE_PORTFOLIO, RECEIVE_SNAPSHOTS } from '../actions/portfolio_actions';
import merge from 'lodash/merge';
import { combineReducers } from 'redux';

const dataReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PORTFOLIO:
      const fetchedPortfolio = action.portfolio;
      return merge({}, fetchedPortfolio);
    default:
      return state;
  }
};

const snapshotsReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SNAPSHOTS:
      return action.snapshots;
    default:
      return state;
  }
};

const portfoliosReducer = combineReducers({
  data: dataReducer,
  snapshots: snapshotsReducer
});

export default portfoliosReducer;
