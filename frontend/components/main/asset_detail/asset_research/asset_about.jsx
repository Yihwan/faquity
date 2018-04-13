import React from 'react';
import { currencyRound, rounder, addCommas } from '../../../../utils/helpers';

const renderAboutTable = (asset, stats) => {


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
          <td>{asset.num_employees}</td>
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
};

const AssetAbout = ({ asset, stats }) => {


  return(
    <section className='asset-about'>
      <h2>About</h2>
      <div>Show More</div>
      <p>{asset.description}</p>
      {renderAboutTable(asset, stats)}
    </section>
  );
};

export default AssetAbout;
