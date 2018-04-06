import React from 'react';

const renderTags = (tags) => (
  tags.map((tag, idx) => {
    return <span key={idx} className='tag'>{tag}</span>;
  })
);

// from http://jsfiddle.net/hAfMM/
const formatCurrency = (n, currency) => {
  return currency +
      n.toString().replace(/./g, function(c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
  });
};

const AssetSummary = ({ asset }) => (
  <section className='asset-summary'>
    {renderTags(asset.tags)}
    <h1 className="name">{asset.name}</h1>
    <h1 className="latest-price">{formatCurrency(asset.latest_price, "$")}</h1>
    <div className="chart">This is not a chart.</div>
  </section>
);

export default AssetSummary;
