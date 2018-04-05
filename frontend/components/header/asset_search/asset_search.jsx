import React from 'react';
import { Link } from 'react-router-dom';

export const AssetSearch = () => (
  <section className='asset-search-module'>
    <input
      className="asset-search-input"
      type="text"
      placeholder="Search by asset name or symbol"
      />
  </section>
);

export default AssetSearch;
