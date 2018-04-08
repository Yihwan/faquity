import * as PortfolioAPIUtil from '../utils/portfolio_api_util';

export const RECEIVE_PORTFOLIO = "RECEIVE_PORTFOLIO";

export const receivePortfolio = (portfolio) => ({
  type: RECEIVE_PORTFOLIO,
  portfolio
});

export const fetchPortfolio = (id) => (dispatch) => (
  PortfolioAPIUtil.fetchPortfolio(id)
    .then((fetchedPortfolio) => dispatch(receivePortfolio(fetchedPortfolio)))
);
