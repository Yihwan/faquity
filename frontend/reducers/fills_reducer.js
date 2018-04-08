import { RECEIVE_FILL, RECEIVE_ERRORS } from '../actions/fill_actions';
import merge from 'lodash/merge';

const fillsReducer = (state={}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILL:
      const newFill = { [action.fill.id]: action.fill };
      return merge({}, state, newFill);
    default:
      return state;
  }
};

export default fillsReducer;
