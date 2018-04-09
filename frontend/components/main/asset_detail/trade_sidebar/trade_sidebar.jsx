import React from 'react';
import Tabs from './tabs';
import BuyFormContainer from './buy_form_container';
import SellFormContainer from './sell_form_container';

const panes = (asset) => ([
  {title: `Buy ${asset.symbol}`, content: <BuyFormContainer asset={asset}/>},
  {title: `Sell ${asset.symbol}`, content: <SellFormContainer asset={asset}/>},
  ]
);

const TradeSidebar = ({ asset }) => (
  <section className='trade-sidebar'>
    <Tabs panes={panes(asset)}/>
  </section>
);

export default TradeSidebar;
