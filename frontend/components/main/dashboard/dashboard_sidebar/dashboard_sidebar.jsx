import React from 'react';
import PortfolioSidebar from './portfolio/portfolio';
import WatchlistSidebar from './watchlist/watchlist';

const DashboardSidebar = ({ holdings, assets }) => {

  return(
    <section className='dashboard-sidebar'>
      <div className="scrollable">
        <PortfolioSidebar
          holdings={holdings}
          assets={assets}
          />
        <WatchlistSidebar />
      </div>
    </section>
  );
};

export default DashboardSidebar;
