import React from 'react';

// from http://jsfiddle.net/hAfMM/
const formatCurrency = (n, currency) => {
  return currency +
      n.toString().replace(/./g, function(c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
  });
};

const DashboardSummary = ({ user }) => (
  <div className="summary-stats">
    <div className="summary-1">
      <div className="metric">
        $0
      </div>
      <div className="caption">
        <h3>Portfolio Value</h3>
      </div>
    </div>
    <div className="summary-2">
      <div className="metric">
        {formatCurrency(user.buying_power,'$')}
      </div>
      <div className="caption">
        <h3>Cash Holdings</h3>
      </div>
    </div>
    <div className="summary-3">
      <div className="metric">
        0
      </div>
      <div className="caption">
        <h3>Number of Trades</h3>
      </div>
    </div>
  </div>
);

export default DashboardSummary;
