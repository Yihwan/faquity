import React from 'react';
import { currencyFormatter } from '../../../utils/helpers';
import CashAllocationChart from './dashboard_summary/cash_allocation_chart';
import PortfolioAllocationChart from './dashboard_summary/portfolio_allocation_chart';

const DashboardSummary = ({ user, portfolio, assets }) => {

  return(
    <div className="summary-charts">
      <h2 className="cash-allocation-title">
        Cash Allocation
      </h2>
      <div className="cash-allocation-chart">
        <CashAllocationChart
          cash={user.buying_power}
          holdings={portfolio.value}
          />
      </div>

    </div>
  );
};

export default DashboardSummary;

// <div className="summary-stats">
//   <div className="summary-1">
//     <div className="metric">
//       {currencyFormatter.format(portfolio.data.value)}
//     </div>
//     <div className="caption">
//       <h3>Portfolio Value</h3>
//     </div>
//   </div>
//   <div className="summary-2">
//     <div className="metric">
//       {currencyFormatter.format(user.buying_power)}
//     </div>
//     <div className="caption">
//       <h3>Cash Holdings</h3>
//     </div>
//   </div>
//   <div className="summary-3">
//     <div className="metric">
//       {user.num_trades}
//     </div>
//     <div className="caption">
//       <h3>Number of Trades</h3>
//     </div>
//   </div>
// </div>
