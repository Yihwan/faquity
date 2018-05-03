import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AssetSearchContainer from './asset_search/asset_search_container';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.fetchAssets()
      .then(() => this.setState({loading: false}));
  }

  navLinks() {
    return(
      <div className='nav-links'>
        <div className='link' onClick={() => this.props.history.push('/')}>Dashboard</div>
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
      this.state.loading ?
        <div>Loading...</div>
      :
      <div className="nav-wrapper">
      <header className="navbar">
        <div className='logo-search'>
          <a href="http://faquity.com">
            <div className='logo'>
              <img src="https://i.imgur.com/c3k30SS.png"
                alt="Faquity"

                />
            </div>
          </a>

          <AssetSearchContainer assets={this.props.assets}/>
        </div>
        {this.navLinks()}
      </header>
    </div>
    );
  }
}


export default withRouter(Header);
