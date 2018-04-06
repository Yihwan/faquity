import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AssetSearchContainer from './asset_search/asset_search_container';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  navLinks() {
    return(
      <div className='nav-links'>
        <div className='link' onClick={() => this.props.history.push('/')}>Home</div>
        <div>
          {this.props.currentUser.first_name} &nbsp;
          {this.props.currentUser.last_name}
        </div>
        <div className='link' onClick={() => this.props.logout()}>Logout</div>
      </div>
    );
  }

  render() {
    return(
      <div className="nav-wrapper">
      <header className="navbar">
        <div className='logo-search'>
          <div className='logo'>😎</div>

          <AssetSearchContainer />
        </div>
        {this.navLinks()}
      </header>
    </div>
    );
  }
}


export default withRouter(Header);
