import * as IEXAPIUtil from '../utils/iex_api_util';

export const RECEIVE_PRICES = "RECEIVE_PRICES";
export const RECEIVE_LATEST_PRICE = "RECEIVE_LATEST_PRICE";
export const RECEIVE_STATS = "RECEIVE_STATS";

export const receivePrices = (prices) => ({
  type: RECEIVE_PRICES,
  prices
});

export const receiveLatestPrice = (price) => ({
  type: RECEIVE_LATEST_PRICE,
  price
});

export const receiveStats = (stats) => ({
  type: RECEIVE_STATS,
  stats
});


export const fetchPrices = (time, symbol) => (dispatch) => (
  // dispatch(startLoadingAllAssets)

  IEXAPIUtil.fetchPrices(time, symbol)
    .then((prices) => dispatch(receivePrices(prices)))
);

export const fetchStats = (symbol) => (dispatch) => (
  // dispatch(startLoadingAllAssets)

  IEXAPIUtil.fetchStats(symbol)
    .then((stats) => dispatch(receiveStats(stats)))
);

export const fetchLatestPrice = (symbol) => (dispatch) => (
  // dispatch(startLoadingAllAssets)

  IEXAPIUtil.fetchLatestPrice(symbol)
    .then((price) => dispatch(receiveLatestPrice(price)))
);
