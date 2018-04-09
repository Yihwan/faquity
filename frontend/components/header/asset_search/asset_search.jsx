import React from 'react';
import { Link } from 'react-router-dom';


class AssetSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className='asset-search-module'>
        <div className='asset-search-icon'><i className="fa fa-search" aria-hidden="true"></i></div>
        <input
          className="asset-search-input"
          type="text"
          placeholder="Search by asset name or symbol"
          />
      </section>
    );
  }
}


export default AssetSearch;
