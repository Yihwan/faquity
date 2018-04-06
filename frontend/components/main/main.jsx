import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import DashboardContainer from './dashboard/dashboard_container';

const Main = () => (
  <DashboardContainer />
);

export default Main;
