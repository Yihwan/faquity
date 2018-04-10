import React from 'react';
import { currencyFormatter } from '../../../../utils/helpers';
const renderTags = (tags) => (
  tags.map((tag, idx) => {
    return <span key={idx} className='tag'>{tag}</span>;
  })
);

const AssetSummary = ({ asset }) => (
  <section className='asset-summary'>
    {renderTags(asset.tags)}
    <h1 className="name">{asset.name}</h1>
  </section>
);

export default AssetSummary;
