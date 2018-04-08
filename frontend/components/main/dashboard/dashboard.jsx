import React from 'react';
import DashboardSidebar from './dashboard_sidebar/dashboard_sidebar';
import DashboardSummary from './summary';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { currencyFormatter } from '../../../utils/helpers';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPortfolio(this.props.currentUser.id);
    this.props.fetchAssets();
    this.renderGreeting();
  }

  renderGreeting() {
    let currentDate = new Date();
    let currentHour = currentDate.getHours();
    let greeting;

    if (currentHour < 12) {
      greeting = "Good morning";
    } else if (currentHour < 17) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }

    return(
      <h1 className="greeting">
        {greeting}, {this.props.currentUser.first_name}
      </h1>
    );
  }

  renderTags(tags) {
    return(
      tags.map((tag, idx) => {
        return <span key={idx} className='tag'>{tag}</span>;
      })
    );
  }

  handleClick(id) {
    return (e) => {
      this.props.history.push(`/assets/${id}`);
    };
  }

  renderTableRows(assets) {
    return(
      assets.map(asset => {
        return(
            <tr key={asset.id} className="main-table-row"
                onClick={this.handleClick(asset.id)}>
                <td className="asset-name">{asset.name}</td>
              <td>{asset.symbol}</td>
              <td>{currencyFormatter.format(asset.latest_price)}</td>
              <td>{this.renderTags(asset.tags)}</td>
            </tr>


        );
      })
    );
  }

  // with help from menubar.io, creating react tables
  renderAssetIndex(assets) {
    return(
      <section className="asset-index">
        <h1 className='sticky'>All Assets</h1>
        <table className="asset-table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Symbol</td>
              <td>Price</td>
              <td>Tags</td>
            </tr>
          </thead>

          <tbody>
            {this.renderTableRows(assets)}
          </tbody>
        </table>
      </section>
    );
  }

  render() {

    if (this.props.portfolio === {}) {
      return "Loading...";
    }
    return(
        <section className="main">
          <div className="left">

            <section className="summary-bar">
              {this.renderGreeting()}
              <DashboardSummary
                portfolio={this.props.portfolio}
                user={this.props.currentUser}
              />
            </section>

            {this.renderAssetIndex(this.props.assets)}
          </div>
          <div className="right">
            <DashboardSidebar
              holdings={this.props.currentUser.holdings}
              assets={this.props.assets}
            />
          </div>
        </section>
    );
  }
}

export default withRouter(Dashboard);
