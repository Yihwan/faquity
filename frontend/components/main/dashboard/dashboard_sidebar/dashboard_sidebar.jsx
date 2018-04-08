import React from 'react';
import PortfolioSidebar from './portfolio/portfolio';
import WatchlistSidebar from './watchlist/watchlist';

const DashboardSidebar = ({ portfolio, fetchAsset }) => {

  return(
    <section className='dashboard-sidebar'>
      <div className="scrollable">
        <PortfolioSidebar
          portfolio={portfolio}
          fetchAsset={fetchAsset}
          />
        <WatchlistSidebar />
      </div>
    </section>
  );
};

export default DashboardSidebar;
