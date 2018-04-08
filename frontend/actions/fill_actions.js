import * as FillAPIUtil from '../utils/fill_api_util';

export const RECEIVE_FILL = "RECEIVE_FILL";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveFill = (fill) => ({
  type: RECEIVE_FILL,
  fill
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const createFill = (fill) => (dispatch) => (
  FillAPIUtil.createFill(fill)
    .then((newFill) => dispatch(receiveFill(newFill)),
    (errors) => dispatch(receiveErrors(errors.responseJSON)))
);
