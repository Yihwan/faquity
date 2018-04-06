import React from 'react';
import Tabs from './tabs';
import BuyFormContainer from './buy_form_container';
import SellFormContainer from './sell_form_container';

const Panes = [
  {title: 'Buy', content: <BuyFormContainer />},
  {title: 'Sell', content: <SellFormContainer />},
];

const TradeSidebar = ({ asset }) => (
  <section className='trade-sidebar'>
    <Tabs panes={Panes}/>
  </section>
);

export default TradeSidebar;
