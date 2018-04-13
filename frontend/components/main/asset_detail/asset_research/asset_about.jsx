import React from 'react';
import { currencyRound, rounder, addCommas } from '../../../../utils/helpers';

const ExpandedAbout = ({ stats }) => {

  return(
    <table className="about-table">
      <thead className="row-3">
        <tr>
          <td>52 Week High</td>
          <td>52 Week Low</td>
          <td>Shares Outstanding</td>
          <td>Float</td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{currencyRound.format(stats.week52high)}</td>
          <td>{currencyRound.format(stats.week52low)}</td>
          <td>{addCommas(stats.sharesOutstanding, 2)}</td>
          <td>{addCommas(stats.float, 2)}</td>
        </tr>
      </tbody>

      <thead className="row-4">
        <tr>
          <td>Revenue (TTM)</td>
          <td>Per Employee</td>
          <td>Per Share</td>
          <td>Profit Margin</td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{currencyRound.format(stats.revenue)}</td>
          <td>{currencyRound.format(stats.revenuePerEmployee)}</td>
          <td>{currencyRound.format(stats.revenuePerShare)}</td>
          <td>{rounder(stats.profitMargin,2)}%</td>
        </tr>
      </tbody>
    </table>
  );
};

class AssetAbout extends React.Component {
  constructor(props) {
    super(props);

    this.toggleExpanded = this.toggleExpanded.bind(this);
    this.state = {
      expandedAbout: false
    };

  }

  toggleExpanded() {
    this.setState({ expandedAbout: !this.state.expandedAbout });
  }

  renderAboutTable(asset, stats) {
    return(
      <table className="about-table">
        <thead>
          <tr>
            <td>CEO</td>
            <td>Employees</td>
            <td>Headquarters</td>
            <td>Founded</td>
          </tr>
        </thead>

        <tbody>
          <tr key={asset.id}>
            <td>{asset.ceo}</td>
            <td>{addCommas(asset.num_employees)}</td>
            <td>{asset.headquarters}</td>
            <td>{asset.year_founded}</td>
          </tr>
        </tbody>

        <thead className="row-2">
          <tr>
            <td>Market Cap</td>
            <td>P/E Ratio High</td>
            <td>P/E Ratio Low</td>
            <td>Dividend Yield</td>
          </tr>
        </thead>

        <tbody>
          <tr key={asset.id}>
            <td>{currencyRound.format(stats.marketcap)}</td>
            <td>{rounder(stats.peRatioHigh, 2)}</td>
            <td>{rounder(stats.peRatioLow, 2)}</td>
            <td>{rounder(stats.dividendYield,2)}</td>
          </tr>
        </tbody>


      </table>
    );
  }

  render() {

    let toggleText = "Show More";
    let className = "bullish";

    if (this.props.signal === "bearish") {
      className = "bearish";
    }

    if (this.state.expandedAbout) {
      toggleText = "Show Less";
    }

    // with help from eddyerburgh.me
    return(
      <section className='asset-about'>
        <div className='about-header'>
          <h2>About</h2>
          <span className={className} onClick={this.toggleExpanded}>
            {toggleText}
          </span>
        </div>

        <p>{this.props.asset.description}</p>
        {this.renderAboutTable(this.props.asset, this.props.stats)}

        {this.state.expandedAbout && <ExpandedAbout stats={this.props.stats}/>}

      </section>
    );
  }
}


export default AssetAbout;
