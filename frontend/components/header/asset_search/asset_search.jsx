import React from 'react';
import { Link } from 'react-router-dom';

export const AssetSearch = () => (
  <section className='asset-search-module'>
    <div className='asset-search-icon'></div>
    <input
      className="asset-search-input"
      type="text"
      placeholder="Search by asset name or symbol"
      />
  </section>
);

export default AssetSearch;
