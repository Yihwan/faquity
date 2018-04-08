import React from 'react';
import PortfolioSidebar from './portfolio/portfolio';
import WatchlistSidebar from './watchlist/watchlist';

const DashboardSidebar = ({ user }) => (
  <section className='dashboard-sidebar'>
    <div className="scrollable">
      <PortfolioSidebar />
      <WatchlistSidebar />
    </div>
  </section>
);

export default DashboardSidebar;
