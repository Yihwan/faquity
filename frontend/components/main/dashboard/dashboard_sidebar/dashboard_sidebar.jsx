import React from 'react';
import PortfolioSidebar from './portfolio/portfolio';
import WatchlistSidebar from './watchlist/watchlist';

const DashboardSidebar = ({ assets, holdings, watchlist }) => {

  return(
    <section className='dashboard-sidebar'>
      <div className="scrollable">
        <PortfolioSidebar
          holdings={holdings}
          assets={assets}
        />
        <WatchlistSidebar
          watchlist={watchlist}
          assets={assets}
        />
      </div>
    </section>
  );
};

export default DashboardSidebar;
