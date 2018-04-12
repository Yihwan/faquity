import React from 'react';
import { currencyFormatter } from '../../../utils/helpers';
import CashAllocationChart from './dashboard_summary/cash_allocation_chart';
import HoldingsAllocationChart from './dashboard_summary/holdings_allocation_chart';

const DashboardSummary = ({ user, portfolio, assets }) => {
  // <h2 className="holdings-allocation-title">
  //   Holdings Diversity
  // </h2>


  return(
    <div className="summary-charts">

      <div className="cash-allocation-chart">
      <p className="caption">
        Cash Allocation
      </p>

      <div className="graphic-left">
        <CashAllocationChart
          cash={user.buying_power}
          holdings={portfolio.value}
          />
      </div>
      </div>

      <div className="holdings-allocation-chart">
        <p className="caption">
          Holdings Diversity
        </p>

        <div className="graphic-right">
          <HoldingsAllocationChart
            assets={assets}
            cash={user.buying_power}
            holdings={portfolio.holdings}
            />
        </div>
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
