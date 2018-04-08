import {
  RECEIVE_ERRORS,
  RECEIVE_FILL
} from '../../actions/fill_actions';

const fillErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILL:
      return [];
    case RECEIVE_ERRORS:
      return Object.assign([], action.errors);
    default:
      return state;
  }
};

export default fillErrorsReducer;
