import React from 'react';
import { Link } from 'react-router-dom';
import AssetSearchContainer from './asset_search/asset_search_container';

const navLinks = () => {
  return(
    <div className='nav-links'>
      <Link className='link' to='/'>Home</Link>
      <Link className='link' to='/'>Account</Link>
    </div>
  );
};

const Header = () => (
  <header className="navbar">
    <div className='logo-search'>
      <div className='logo'>😎</div>
      <AssetSearchContainer />
    </div>
    {navLinks()}
  </header>
);

export default Header;
