import { RECEIVE_PORTFOLIO } from '../actions/portfolio_actions';
import merge from 'lodash/merge';

const portfoliosReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PORTFOLIO:
      const fetchedPortfolio = action.portfolio;
      return merge({}, fetchedPortfolio);
    default:
      return state;
  }
};

export default portfoliosReducer;
