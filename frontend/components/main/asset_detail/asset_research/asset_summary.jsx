import React from 'react';
import { currencyFormatter } from '../../../../utils/helpers';
const renderTags = (tags, signal) => {
  let className = "tag";

  if (signal === "bullish") {
    className += " bullish";
  } else {
    className += " bearish";
  }

  return(

    tags.map((tag, idx) => {
      return <span key={idx} className={className}>{tag}</span>;
      })
  );
};

const AssetSummary = ({ asset, signal }) => (
  <section className='asset-summary'>
    {renderTags(asset.tags, signal)}
    <h1 className="name">{asset.name}</h1>
  </section>
);

export default AssetSummary;
