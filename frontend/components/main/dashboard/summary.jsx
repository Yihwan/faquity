import React from 'react';
import { currencyFormatter } from '../../../utils/helpers';

const DashboardSummary = ({ user, portfolio }) => {

  return(
    <div className="summary-stats">
      <div className="summary-1">
        <div className="metric">
          {currencyFormatter.format(portfolio.value)}
        </div>
        <div className="caption">
          <h3>Portfolio Value</h3>
        </div>
      </div>
      <div className="summary-2">
        <div className="metric">
          {currencyFormatter.format(user.buying_power)}
        </div>
        <div className="caption">
          <h3>Cash Holdings</h3>
        </div>
      </div>
      <div className="summary-3">
        <div className="metric">
        {user.num_trades}
        </div>
        <div className="caption">
          <h3>Number of Trades</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary;
