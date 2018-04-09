import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';
import { RECEIVE_FILL } from '../actions/fill_actions';
import { RECEIVE_ASSET } from '../actions/asset_actions';

const _nullUser = ({
  currentUser: null
});

const sessionReducer = (state=_nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.user });
    case RECEIVE_FILL:
      let nextState = merge({}, state);
      let fillAmt = action.fill.size * action.fill.price;

      if (action.fill.side === "buy") {

        nextState.currentUser.buying_power -= fillAmt;
        nextState.currentUser.holdings[action.fill.asset_id] =
          (nextState.currentUser.holdings[action.fill.asset_id]||0) +
          action.fill.size;

      } else {
        nextState.currentUser.buying_power =
          parseFloat(nextState.currentUser.buying_power) +
          parseFloat(fillAmt);
        nextState.currentUser.holdings[action.fill.asset_id] -= action.fill.size;
      }
      return nextState;
    default:
      return state;
  }
};

export default sessionReducer;
