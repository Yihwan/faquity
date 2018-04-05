import React from 'react';
import { Link } from 'react-router-dom';
import AssetSearchContainer from './asset_search/asset_search_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  navLinks() {
    return(
      <div className='nav-links'>
        <div>Welcome, {this.props.currentUser.first_name}!</div>
        <div className='link' onClick={() => this.props.logout()}>Logout</div>
      </div>
    );
  }

  render() {
    return(
      <header className="navbar">
        <div className='logo-search'>
          <div className='logo'>😎</div>

          <AssetSearchContainer />
        </div>
        {this.navLinks()}
      </header>
    );
  }
}


export default Header;
