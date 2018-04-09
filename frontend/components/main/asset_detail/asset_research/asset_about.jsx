import React from 'react';

const renderAboutTable = (asset) => {


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
    </table>
  );
};

const AssetAbout = ({ asset }) => {


  return(
    <section className='asset-about'>
      <h2>About</h2>
      <p>{asset.description}</p>
      {renderAboutTable(asset)}
    </section>
  );
};

export default AssetAbout;
