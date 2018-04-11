import React from 'react';
import Tabs from './tabs';
import BuyFormContainer from './buy_form_container';
import SellFormContainer from './sell_form_container';

const panes = (asset, latestPrice) => ([
  { title: `Buy ${asset.symbol}`,
    content: <BuyFormContainer asset={asset} latestPrice={latestPrice}/>},
  { title: `Sell ${asset.symbol}`,
    content: <SellFormContainer asset={asset} latestPrice={latestPrice}/>},
  ]
);

const TradeSidebar = ({ asset, latestPrice }) => (
  <section className='trade-sidebar'>
    <Tabs panes={panes(asset, latestPrice)}/>
  </section>
);

export default TradeSidebar;
