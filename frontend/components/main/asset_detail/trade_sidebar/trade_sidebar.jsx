import React from 'react';
import Tabs from './tabs';
import BuyFormContainer from './buy_form_container';
import SellFormContainer from './sell_form_container';

const panes = (asset, latestPrice, signal) => ([
  { title: `Buy ${asset.symbol}`,
    content: <BuyFormContainer asset={asset} latestPrice={latestPrice} signal={signal}/>},
  { title: `Sell ${asset.symbol}`,
    content: <SellFormContainer asset={asset} latestPrice={latestPrice} signal={signal}/>},
  ]
);

const TradeSidebar = ({ asset, latestPrice, signal }) => (
  <section className='trade-sidebar'>
    <Tabs panes={panes(asset, latestPrice, signal)} signal={signal}/>
  </section>
);

export default TradeSidebar;
