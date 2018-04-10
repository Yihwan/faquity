import * as IEXAPIUtil from '../utils/iex_api_util';

export const RECEIVE_PRICES = "RECEIVE_PRICES";

export const receivePrices = (prices) => ({
  type: RECEIVE_PRICES,
  prices
});


export const fetchPrices = (time) => (dispatch) => (
  // dispatch(startLoadingAllAssets)

  IEXAPIUtil.fetchPrices(time)
    .then((prices) => dispatch(receivePrices(prices)))
);
