import React from 'react';
import { Link } from 'react-router-dom';
import AssetSearchContainer from './asset_search/asset_search_container';
const Header = () => (
  <header className="navbar">
    <div>Cool-name</div>
    <div><AssetSearchContainer /></div>
    <div>Account</div>
  </header>
);

export default Header;
