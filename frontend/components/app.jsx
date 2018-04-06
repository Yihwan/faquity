import React from 'react';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SignUpFormContainer from './signup_form/signup_form_container';
import LogInFormContainer from './login_form/login_form_container';
import DashboardContainer from './main/dashboard/dashboard_container';
import AssetDetailContainer from './main/asset_detail/asset_detail_container';
import HeaderContainer from './header/header_container';
import ProtectedViews from './protected';

import { AuthRoute, ProtectedRoute, ProtectedNavRoute } from '../utils/route_util';

const App = () => (
  <div>
  <ProtectedNavRoute path='/' component={HeaderContainer}/>

    <Switch>
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <ProtectedRoute exact path='/assets/:assetId' component={AssetDetailContainer}/>
      <ProtectedRoute path='/' component={ProtectedViews}/>
      <Redirect to='/' />
    </Switch>
  </div>

);

export default App;
